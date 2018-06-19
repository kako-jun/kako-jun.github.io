
var threads = [];
var threadID = 0;

var updateThreads = function () {
  var dfd = $.Deferred();

  $.getJSON('http://localhost:4000/api/threads')
  .done(function (res) {
    threads = res;

    $('#threads').empty();
    _.each(threads, function (thread) {
      var invisible_num = _.filter(thread.comments, function (comment) {
        return (comment.visible === false);
      }).length;

      $('#threads').append('<li value="' + thread.id + '">' + thread.title + ' ---- ' + thread.comments.length +' コメント (承認待ち ' + invisible_num + ')</li>');
    });
  // }).fail(function (res) {
    // alert(JSON.stringify(res));
  }).always(function () {
    dfd.resolve();
  });

  return dfd.promise();
};

var updateComments = function (threadID) {
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
    '43 - 1 = ?',
    '14 * 3 = ?',
    '4200 / 100 = ?',
    '100 + 42 - 100 = ?',
  ];

  var i = _.random(0, 4);
  $('#comment-form #quiz').attr('placeholder', qs[i]);
};

$(function () {
  $('#comment-form').hide();

  updateThreads();
});

$('#threads').on('click', 'li', function () {
  threadID = Number($(this).val());

  updateComments(threadID);
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
      'url': 'http://localhost:4000/api/add-comment',
      'data': JSON.stringify({
        threadID: threadID,
        dt: dt,
        name: _.escape(name),
        desc: _.escape(desc),
        ip: res,
      }),
      'type': 'POST',
      'cache': false,
      'dataType': 'json',
    // }).done(function (res) {
    //   alert(JSON.stringify(res));
    // }).fail(function (res) {
    //   alert(JSON.stringify(res));
    }).always(function () {
      updateThreads().always(function () {
        updateComments(threadID);

        $('#modal1').modal();
      });
    });
  }, 'jsonp');

});
