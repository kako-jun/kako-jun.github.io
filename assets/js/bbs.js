
// var serverRoot = 'http://localhost:4201/';
var serverRoot = 'https://the-system.llll-ll.com/';

var threads = [];
var threadID = 0;

var redrawThreads = function () {
  var dfd = $.Deferred();

  $.ajax({
    url: serverRoot + 'api/threads/comments',
    type: 'GET',
    cache: false,
    dataType: 'json',
  }).done(function (res) {
    threads = res;

    $('#threads').empty();
    _.each(threads, function (thread) {
      $('#threads').append('<li value="' + thread.id + '">' + thread.title.ja + ' ' + thread.desc.ja + ' ---- ' + thread.comments.length + ' コメント (承認待ち ' + thread.invisible_num + ')</li>');
    });
  }).fail(function (res) {
    // alert(JSON.stringify(res));
    alert('スレッド一覧の取得に失敗');
  }).always(function () {
    dfd.resolve();
  });

  return dfd.promise();
};

var redrawComments = function (threadID) {
  var found = _.find(threads, function (thread) {
    return (thread.id === threadID);
  });

  var comments = found.comments;

  $('#comments').empty();

  _.each(comments, function (comment) {
    if (comment.visible) {
      $('#comments').append('<li value="' + comment.id + '">' + comment.id + '<br>' + comment.name + '<br>' + comment.dt + '<br>' + comment.country + '<br>' + comment.desc + '</li>');
    }
  });

  $('#comment-form #name').val('');
  $('#comment-form #desc').val('');
  $('#comment-form #quiz').val('');
  generateQuiz();
};

var redrawCommentsWithPreview = function (thread) {
  var comments = thread.comments;

  $('#comments').empty();

  _.each(comments, function (comment) {
    if (comment.visible) {
      $('#comments').append('<li value="' + comment.id + '">' + comment.id + '<br>' + comment.name + '<br>' + comment.dt + '<br>' + comment.country + '<br>' + comment.desc + '</li>');
    }
  });
};

var generateQuiz = function () {
  var qs = [
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

  var i = _.random(0, 8);
  $('#comment-form #quiz').attr('placeholder', qs[i]);
};

$(function () {
  $('#comment-form').hide();

  redrawThreads();
});

$('#threads').on('click', 'li', function () {
  threadID = Number($(this).val());

  redrawComments(threadID);
  $('#comment-form').fadeIn();
});

$('#preview').on('click', function () {
  var name = $('#comment-form #name').val();
  var desc = $('#comment-form #desc').val();

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

  var now = new Date();
  var year = now.getFullYear();
  var mon = ('00' + (now.getMonth() + 1)).slice(-2);
  var date = ('00' + now.getDate()).slice(-2);
  var hour = ('00' + now.getHours()).slice(-2);
  var min = ('00' + now.getMinutes()).slice(-2);
  var sec = ('00' + now.getSeconds()).slice(-2);
  var dt = year + '-' + mon + '-' + date + ' ' + hour + ':' + min + ':' + sec;

  $.ajax({
    url: 'https://ipinfo.io',
    dataType: 'jsonp',
  }).done(function (res) {
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
    }).done(function (res) {
      redrawCommentsWithPreview(res);
    }).fail(function (res) {
      // alert(JSON.stringify(res));
      alert('プレビューに失敗');
    }).always(function () {
    });
  }).fail(function () {
  }).always(function () {
  });
});

$('#send').on('click', function () {
  var name = $('#comment-form #name').val();
  var desc = $('#comment-form #desc').val();
  var answer = $('#comment-form #quiz').val();

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

  var now = new Date();
  var year = now.getFullYear();
  var mon = ('00' + (now.getMonth() + 1)).slice(-2);
  var date = ('00' + now.getDate()).slice(-2);
  var hour = ('00' + now.getHours()).slice(-2);
  var min = ('00' + now.getMinutes()).slice(-2);
  var sec = ('00' + now.getSeconds()).slice(-2);
  var dt = year + '-' + mon + '-' + date + ' ' + hour + ':' + min + ':' + sec;

  $.ajax({
    url: 'https://ipinfo.io',
    dataType: 'jsonp',
  }).done(function (res) {
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
    }).done(function (res) {
      // alert(JSON.stringify(res));
      redrawThreads().always(function () {
        redrawComments(threadID);

        alert('投稿しました！\nコメントありがとうー。\n承認されるまで、のんびりお待ちください。');
      });
    }).fail(function (res) {
      // alert(JSON.stringify(res));
      alert('投稿に失敗');
    }).always(function () {
    });
  }).fail(function () {
  }).always(function () {
  });
});
