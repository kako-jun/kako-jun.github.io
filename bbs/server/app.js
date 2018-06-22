
const _ = require('underscore');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
var app = express();

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
    ip: params.ip,
    visible: params.visible,
  });

  writeJSON('json/thread_' + threadID + '.json', thread);
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
  const threads = readThreads();
  _.map(threads, (thread) => {
    const comments = readThread(thread.id).comments;
    var invisible_num = _.filter(comments, (comment) => {
      return (comment.visible === false);
    }).length;

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

  thread = addComment(threadID, {
    dt: req.body.dt,
    name: req.body.name,
    desc: req.body.desc,
    host: req.headers.host,
    ip: req.body.ip,
    visible: false,
  });

  res.send(thread);
});

app.delete('/api/threads/:threadID/comments/:commentID', (req, res) => {
  const threadID = Number(req.params.threadID);
  const commentID = Number(req.params.commentID);

  const thread = removeComment(threadID, commentID);
  res.send(thread);
});

app.put('/api/threads/:threadID/comments/:commentID', (req, res) => {
  const threadID = Number(req.params.threadID);
  const commentID = Number(req.params.commentID);

  const thread = updateComment(threadID, commentID, {
    visible: (req.body.visible === 'true') ? true : false,
  });

  res.send(thread);
});

app.listen(4201);
