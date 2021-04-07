
// const serverRoot = 'http://localhost:4201/';
const serverRoot = 'https://the-system.llll-ll.com/';

let threads = [];
let threadID = 0;

const redrawThreads = () => {
  const dfd = $.Deferred();

  $.ajax({
    url: serverRoot + 'api/threads/comments',
    type: 'GET',
    cache: false,
    dataType: 'json',
  }).done((res) => {
    threads = res;

    $('#threads').empty();
    _.each(threads, (thread) => {
      $('#threads').append('<li value="' + thread.id + '">' + thread.title.ja + ' ' + thread.desc.ja + ' ---- ' + thread.comments.length + ' コメント (承認待ち ' + thread.invisible_num + ')</li>');
    });
  }).fail((res) => {
    // alert(JSON.stringify(res));
    alert('スレッド一覧の取得に失敗');
  }).always(() => {
    dfd.resolve();
  });

  return dfd.promise();
};

const redrawComments = (threadID) => {
  const found = _.find(threads, (thread) => {
    return (thread.id === threadID);
  });

  const comments = found.comments;

  $('#comments').empty();

  _.each(comments, (comment) => {
    if (comment.visible) {
      $('#comments').append('<li value="' + comment.id + '">' + comment.id + '<br>' + comment.name + '<br>' + comment.dt + '<br>' + comment.country + '<br>' + comment.desc + '</li>');
    }
  });

  $('#comment-form #name').val('');
  $('#comment-form #desc').val('');
  $('#comment-form #quiz').val('');
  generateQuiz();
};

const redrawCommentsWithPreview = (thread) => {
  const comments = thread.comments;

  $('#comments').empty();

  _.each(comments, (comment) => {
    if (comment.visible) {
      $('#comments').append('<li value="' + comment.id + '">' + comment.id + '<br>' + comment.name + '<br>' + comment.dt + '<br>' + comment.country + '<br>' + comment.desc + '</li>');
    }
  });
};

const generateQuiz = () => {
  const qs = [
    '40 + 2 = ?',
    '41 + 1 = ?',
    '43 - 1 = ?',
    '44 - 2 = ?',
    '21 * 2 = ?',
    '14 * 3 = ?',
    '420 / 10 = ?',
    '4200 / 100 = ?',
    '100 + 42 - 100 = ?',
  ];

  const i = _.random(0, 8);
  $('#comment-form #quiz').attr('placeholder', ' ' + qs[i]);
};

$(() => {
  $('#comment-form').hide();

  redrawThreads();
});

$('#threads').on('click', 'li', function () {
  threadID = Number($(this).val());

  redrawComments(threadID);
  $('#comment-form').fadeIn();
});

$('#preview').on('click', function () {
  let name = $('#comment-form #name').val();
  const desc = $('#comment-form #desc').val();

  if (name.length > 42) {
    alert('名前は42文字まで');
    return;
  }

  if (!desc) {
    alert('本文が空白');
    return;
  }

  if (desc.length > 420) {
    alert('本文は420文字まで');
    return;
  }

  if (!name) {
    name = '無色透明さん';
  }

  const now = new Date();
  const year = now.getFullYear();
  const mon = ('00' + (now.getMonth() + 1)).slice(-2);
  const date = ('00' + now.getDate()).slice(-2);
  const hour = ('00' + now.getHours()).slice(-2);
  const min = ('00' + now.getMinutes()).slice(-2);
  const sec = ('00' + now.getSeconds()).slice(-2);
  const dt = year + '-' + mon + '-' + date + ' ' + hour + ':' + min + ':' + sec;

  $.ajax({
    url: 'https://ipinfo.io',
    dataType: 'jsonp',
  }).done((res) => {
    $.ajax({
      url: serverRoot + 'api/threads/' + threadID + '/comments/preview',
      data: {
        dt: dt,
        name: _.escape(name),
        desc: _.escape(desc),
        info: res,
      },
      type: 'POST',
      cache: false,
      dataType: 'json',
    }).done((res) => {
      redrawCommentsWithPreview(res);
    }).fail((res) => {
      // alert(JSON.stringify(res));
      alert('プレビューに失敗');
    }).always(() => {
    });
  }).fail(() => {
  }).always(() => {
  });
});

$('#send').on('click', function () {
  let name = $('#comment-form #name').val();
  const desc = $('#comment-form #desc').val();
  const answer = $('#comment-form #quiz').val();

  if (name.length > 42) {
    alert('名前は42文字まで');
    return;
  }

  if (!desc) {
    alert('本文が空白');
    return;
  }

  if (desc.length > 420) {
    alert('本文は420文字まで');
    return;
  }

  if (answer !== '42') {
    alert('答えが違います');
    return;
  }

  if (!name) {
    name = '無色透明さん';
  }

  const now = new Date();
  const year = now.getFullYear();
  const mon = ('00' + (now.getMonth() + 1)).slice(-2);
  const date = ('00' + now.getDate()).slice(-2);
  const hour = ('00' + now.getHours()).slice(-2);
  const min = ('00' + now.getMinutes()).slice(-2);
  const sec = ('00' + now.getSeconds()).slice(-2);
  const dt = year + '-' + mon + '-' + date + ' ' + hour + ':' + min + ':' + sec;

  $.ajax({
    url: 'https://ipinfo.io',
    dataType: 'jsonp',
  }).done((res) => {
    $.ajax({
      url: serverRoot + 'api/threads/' + threadID + '/comments',
      data: {
        dt: dt,
        name: _.escape(name),
        desc: _.escape(desc),
        info: res,
      },
      type: 'POST',
      cache: false,
      dataType: 'json',
    }).done((res) => {
      // alert(JSON.stringify(res));
      redrawThreads().always(() => {
        redrawComments(threadID);

        alert('投稿しました！\nコメントありがとうー。\n承認されるまで、のんびりお待ちください。');
      });
    }).fail((res) => {
      // alert(JSON.stringify(res));
      alert('投稿に失敗');
    }).always(() => {
    });
  }).fail(() => {
  }).always(() => {
  });
});
