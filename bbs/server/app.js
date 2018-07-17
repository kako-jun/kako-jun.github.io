"use strict"
const _ = require('underscore');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const iso3311a2 = require('iso-3166-1-alpha-2');
// const sendmail = require('sendmail')();

const writeJSON = (path, json) => {
  const jsonStr = JSON.stringify(json, null, '  ');
  fs.writeFileSync(path, jsonStr, { encoding: 'utf-8' });
};

const readThreads = () => {
  const threads = JSON.parse(fs.readFileSync('json/threads.json', { encoding: 'utf-8' }));
  return threads;
};

const readThread = (id) => {
  const thread = JSON.parse(fs.readFileSync('json/thread_' + id + '.json', { encoding: 'utf-8' }));
  return thread;
};

const readIgnoreList = () => {
  const thread = JSON.parse(fs.readFileSync('json/ignore_list.json', { encoding: 'utf-8' }));
  return thread;
};

const addComment = (threadID, params) => {
  const thread = readThread(threadID);
  let nextCommentID = 0;
  if (thread.comments.length > 0) {
    const lastComment = _.max(thread.comments, (comment) => {
      return comment.id;
    });

    nextCommentID = lastComment.id + 1;
  }

  thread.comments.push({
    id: nextCommentID,
    dt: params.dt,
    name: params.name,
    desc: params.desc,
    host: params.host,
    country: params.country,
    info: params.info,
    visible: params.visible,
  });

  writeJSON('json/thread_' + threadID + '.json', thread);
  writeJSON('json/thread_' + threadID + '_bk.json', thread);
  return thread;
};

const removeComment = (threadID, commentID) => {
  const thread = readThread(threadID);
  const comments = _.filter(thread.comments, (comment) => {
    return (comment.id !== commentID);
  });

  thread.comments = comments;
  writeJSON('json/thread_' + threadID + '.json', thread);
  return thread;
};

const updateComment = (threadID, commentID, params) => {
  const thread = readThread(threadID);

  _.each(thread.comments, (comment) => {
    if (comment.id === commentID) {
      comment.visible = params.visible;
    }
  });

  writeJSON('json/thread_' + threadID + '.json', thread);
  return thread;
};

const previewComment = (threadID, params) => {
  const thread = readThread(threadID);
  let nextCommentID = 0;
  if (thread.comments.length > 0) {
    const lastComment = _.max(thread.comments, (comment) => {
      return comment.id;
    });

    nextCommentID = lastComment.id + 1;
  }

  thread.comments.push({
    id: nextCommentID,
    dt: params.dt,
    name: params.name,
    desc: params.desc,
    host: params.host,
    country: params.country,
    info: params.info,
    visible: params.visible,
  });

  return thread;
};

const hasValidInterval = (threadID, dt, host) => {
  const thread = readThread(threadID);
  const myComments = _.filter(thread.comments, (comment) => {
    return (comment.host === host);
  });

  const myLastComment = _.max(myComments, (comment) => {
    const tempDT = comment.dt.replace(/-/g, '/');
    return new Date(tempDT);
  });

  const tempDT1 = myLastComment.dt.replace(/-/g, '/');
  const tempDT2 = dt.replace(/-/g, '/');
  const delta = new Date(tempDT2) - new Date(tempDT1);
  if (delta > 10 * 1000) {
    return true;
  }

  return false;
};

const isIgnore = (name, host, desc) => {
  const ignoreList = readIgnoreList();

  let found = _.find(ignoreList.name_list, (ignoreName) => {
    return (ignoreName === name);
  });

  if (found) {
    return true;
  }

  found = _.find(ignoreList.host_list, (ignoreHost) => {
    return (ignoreHost === host);
  });

  if (found) {
    return true;
  }

  found = _.find(ignoreList.word_list, (ignoreWord) => {
    if (desc.match(ignoreWord)) {
      return true;
    }
  });

  if (found) {
    return true;
  }

  return false;
};

// const sendMail = () => {
//   sendmail({
//     from: 'foxgrapefruits@gmail.com',
//     to: 'foxgrapefruits@gmail.com',
//     subject: '件名も化けなかった',
//     text: 'これは本文',
//   }, (err, reply) => {
//     console.log(err && err.stack);
//     console.dir(reply);
//   });
// };

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json());

app.get('/api/threads', (req, res) => {
  const threads = readThreads();
  res.send(threads);
});

app.get('/api/threads/comments', (req, res) => {
  var admin = false;
  if (req.query.key === '42') {
    admin = true;
  }

  const threads = readThreads();
  _.map(threads, (thread) => {
    let comments = readThread(thread.id).comments;
    var invisible_num = _.filter(comments, (comment) => {
      return (comment.visible === false);
    }).length;

    if (!admin) {
      comments = _.map(comments, function (comment) {
        return _.omit(comment, 'host', 'info');
      });
    }

    thread = _.extend(thread, {
      comments: comments,
      invisible_num: invisible_num,
    });

    return thread;
  });

  res.send(threads);
});

app.get('/api/threads/:threadID', (req, res) => {
  const threadID = Number(req.params.threadID);

  const thread = readThread(threadID);
  res.send(thread);
});

app.post('/api/threads/:threadID/comments', (req, res) => {
  const threadID = Number(req.params.threadID);

  if (!hasValidInterval(threadID, req.body.dt, req.headers.host)) {
    return;
  }

  if (isIgnore(req.body.name, req.headers.host, req.body.desc)) {
    return;
  }

  const thread = addComment(threadID, {
    dt: req.body.dt,
    name: req.body.name,
    desc: req.body.desc,
    host: req.headers.host,
    country: iso3311a2.getCountry(req.body.info.country),
    info: req.body.info,
    visible: false,
  });

  res.send(thread);
  // sendMail();
});

app.post('/api/threads/:threadID/comments/preview', (req, res) => {
  const threadID = Number(req.params.threadID);

  if (isIgnore(req.body.name, req.headers.host, req.body.desc)) {
    return;
  }

  const thread = previewComment(threadID, {
    dt: req.body.dt,
    name: req.body.name,
    desc: req.body.desc,
    host: req.headers.host,
    country: iso3311a2.getCountry(req.body.info.country),
    info: req.body.info,
    visible: true,
  });

  res.send(thread);
});

app.delete('/api/threads/:threadID/comments/:commentID', (req, res) => {
  const threadID = Number(req.params.threadID);
  const commentID = Number(req.params.commentID);

  if (req.body.key !== '42') {
    return;
  }

  const thread = removeComment(threadID, commentID);
  res.send(thread);
});

app.put('/api/threads/:threadID/comments/:commentID', (req, res) => {
  const threadID = Number(req.params.threadID);
  const commentID = Number(req.params.commentID);

  if (req.body.key !== '42') {
    return;
  }

  const thread = updateComment(threadID, commentID, {
    visible: (req.body.visible === 'true') ? true : false,
  });

  res.send(thread);
});

const readRanking = (name, rule) => {
  const ranking = JSON.parse(fs.readFileSync('json/ranking_' + name + '_' + rule + '.json', { encoding: 'utf-8' }));
  return ranking;
};

const addEntry = (name, rule, params) => {
  const ranking = readRanking(name, rule);
  let nextEntryID = 0;
  if (ranking.length > 0) {
    const lastEntry = _.max(ranking, (entry) => {
      return entry.id;
    });

    nextEntryID = lastEntry.id + 1;
  }

  ranking.push({
    id: nextEntryID,
    dt: params.dt,
    name: params.name,
    score: params.score,
    time: params.time,
    bet_times: params.bet_times,
    max_combo: params.max_combo,
    max_gain: params.max_gain,
    average_gain: params.average_gain,
    stats: params.stats,
    host: params.host,
    country: params.country,
    info: params.info,
    visible: params.visible,
  });

  writeJSON('json/ranking_' + name + '_' + rule + '.json', ranking);
  return ranking;
};

app.get('/api/rankings/:gameName/:rule', (req, res) => {
  const gameName = req.params.gameName;
  const rule = req.params.rule;

  const ranking = readRanking(gameName, rule);
  res.send(ranking);
});

app.post('/api/rankings/:gameName/:rule/entries', (req, res) => {
  const gameName = req.params.gameName;
  const rule = req.params.rule;

  if (isIgnore(req.body.name, req.headers.host, '')) {
    return;
  }

  const ranking = addEntry(gameName, rule, {
    dt: req.body.dt,
    name: req.body.name,
    score: req.body.score,
    time: req.body.time,
    bet_times: req.body.bet_times,
    max_combo: req.body.max_combo,
    max_gain: req.body.max_gain,
    average_gain: req.body.average_gain,
    stats: req.body.stats,
    userAgent: req.body.userAgent,
    language: req.body.language,
    host: req.headers.host,
    country: iso3311a2.getCountry(req.body.info.country),
    info: req.body.info,
    visible: true,
  });

  res.send(ranking);
  // sendMail();
});

app.listen(4201);
