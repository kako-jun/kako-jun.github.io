
// const serverRoot = 'http://localhost:4201/';
const serverRoot = 'https://the-system.llll-ll.com/';

const redrawCounter = () => {
  const dfd = $.Deferred();

  $.ajax({
    url: serverRoot + 'api/counter',
    type: 'GET',
    cache: false,
    dataType: 'json',
    // dataType: 'jsonp',
  }).done((res) => {
    const counter = res;
    $('#counter').text(counter.total);
  }).fail((res) => {
    // alert(JSON.stringify(res));
  }).always(() => {
    dfd.resolve();
  });

  return dfd.promise();
};

$(() => {
  redrawCounter();
});
