
var serverRoot = 'http://localhost:4201/';

var threads = [];
var threadID = 0;

var redrawThreads = function () {
  var dfd = $.Deferred();

  $.getJSON(serverRoot + 'api/threads/comments')
  .done(function (res) {
    threads = res;

    $('#threads').empty();
    _.each(threads, function (thread) {
      $('#threads').append('<li value="' + thread.id + '">' + thread.title.ja + ' ' + thread.desc.ja + ' ---- ' + thread.comments.length +' コメント (承認待ち ' + thread.invisible_num + ')</li>');
    });
  }).fail(function (res) {
    alert(JSON.stringify(res));
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
      $('#comments').append('<li value="' + comment.id + '">' + comment.id + '<br>' + comment.name + '<br>' + comment.dt + '<br>' + comment.ip.city + '<br>' + comment.desc + '</li>');
    }
  });

  $('#comment-form #name').val('');
  $('#comment-form #desc').val('');
  $('#comment-form #quiz').val('');
  generateQuiz();
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

$('#send').on('click', function () {
  var name = $('#comment-form #name').val();
  var desc = $('#comment-form #desc').val();
  var answer = $('#comment-form #quiz').val();

  if (!name || !desc || !answer) {
    alert('だめよ');
    return;
  }

  if (answer !== '42') {
    alert('だめよ');
    return;
  }

  var now = new Date();
  var year = now.getFullYear();
  var mon = ('00' + (now.getMonth() + 1)).slice(-2);
  var date = ('00' + now.getDate()).slice(-2);
  var hour = ('00' + now.getHours()).slice(-2);
  var min = ('00' + now.getMinutes()).slice(-2);
  var sec = ('00' + now.getSeconds()).slice(-2);
  var dt = year + '-' + mon + '-' + date + ' ' + hour + ':' + min + ':' + sec;

  $.get('http://ipinfo.io', function (res) {
    $.ajax({
      'url': serverRoot + 'api/threads/' + threadID + '/comments',
      'data': {
        dt: dt,
        name: _.escape(name),
        desc: _.escape(desc),
        ip: res,
      },
      'type': 'POST',
      'cache': false,
      'dataType': 'json',
    }).done(function (res) {
      // alert(JSON.stringify(res));
      redrawThreads().always(function () {
        redrawComments(threadID);

        $('#modal1').modal();
      });
    }).fail(function (res) {
      alert(JSON.stringify(res));
    }).always(function () {
    });
  }, 'jsonp');

});
