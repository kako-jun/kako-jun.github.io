
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
      $('#comments').append('<li value="' + comment.id + '"><button class="change-invisible btn btn-warning btn-sm"><span class="glyphicon glyphicon-unchecked"></span> 許可しない</button>' + comment.id + '<br>' + comment.name + '<br>' + comment.dt + '<br>' + comment.desc + '<br>' + comment.remote_ip + '<br>' + JSON.stringify(comment.ip) + '<button class="remove btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove"></span> 削除する</button></li>');
    } else {
      $('#comments').append('<li value="' + comment.id + '"><button class="change-visible btn btn-success btn-sm"><span class="glyphicon glyphicon-check"></span> 許可する</button>' + comment.id + '<br>' + comment.name + '<br>' + comment.dt + '<br>' + comment.desc + '<br>' + comment.remote_ip + '<br>' + JSON.stringify(comment.ip) + '<button class="remove btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove"></span> 削除する</button></li>');
    }
  });
};

$(function () {
  updateThreads();
});

$('#threads').on('click', 'li', function () {
  threadID = Number($(this).val());

  updateComments(threadID);
});

$('#comments').on('click', '.change-visible', function () {
  var commentID = $(this).parent().val();

  $.ajax({
    'url': 'http://localhost:4000/api/visible-comment',
    'data': JSON.stringify({
      threadID: threadID,
      commentID: commentID,
    }),
    'type': 'POST',
    'cache': false,
    'dataType': 'json',
  // }).done(function (res) {
    // alert(JSON.stringify(res));
  // }).fail(function (res) {
    // alert(JSON.stringify(res));
  }).always(function () {
    updateThreads().always(function () {
      updateComments(threadID);
    });
  });
});

$('#comments').on('click', '.change-invisible', function () {
  var commentID = $(this).parent().val();

  $.ajax({
    'url': 'http://localhost:4000/api/invisible-comment',
    'data': JSON.stringify({
      threadID: threadID,
      commentID: commentID,
    }),
    'type': 'POST',
    'cache': false,
    'dataType': 'json',
  // }).done(function (res) {
    // alert(JSON.stringify(res));
  // }).fail(function (res) {
    // alert(JSON.stringify(res));
  }).always(function () {
    updateThreads().always(function () {
      updateComments(threadID);
    });
  });
});

$('#comments').on('click', '.remove', function () {
  var commentID = $(this).parent().val();

  $.ajax({
    'url': 'http://localhost:4000/api/remove-comment',
    'data': JSON.stringify({
      threadID: threadID,
      commentID: commentID,
    }),
    'type': 'POST',
    'cache': false,
    'dataType': 'json',
  // }).done(function (res) {
    // alert(JSON.stringify(res));
  // }).fail(function (res) {
    // alert(JSON.stringify(res));
  }).always(function () {
    updateThreads().always(function () {
      updateComments(threadID);
    });
  });
});
