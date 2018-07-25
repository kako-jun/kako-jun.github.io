
var serverRoot = 'http://localhost:4201/';
// var serverRoot = 'https://the-system.llll-ll.com/';

var redrawCounter = function () {
  var dfd = $.Deferred();

  $.ajax({
    url: serverRoot + 'api/counter',
    type: 'GET',
    cache: false,
    dataType: 'json',
    // dataType: 'jsonp',
  }).done(function (res) {
    var counter = res;
    $('#counter').text(counter.total);
  }).fail(function (res) {
    // alert(JSON.stringify(res));
  }).always(function () {
    dfd.resolve();
  });

  return dfd.promise();
};

$(function () {
  redrawCounter();
});
