
var serverRoot = 'http://localhost:4201/';

var redrawEntries = function (gameName, rule) {
  var dfd = $.Deferred();

  $.ajax({
    'url': serverRoot + 'api/rankings/' + gameName + '/' + rule,
    'type': 'GET',
    'cache': false,
    'dataType': 'json',
  }).done(function (res) {
    var entries = res;

    var sorted = [];
    switch (rule) {
      case 'rule_1_2943':
      case 'rule_1_8390':
      case 'rule_1_37654':
        sorted = _.sortBy(entries, function (entry) {
          return entry.time;
        });

        $('#' + rule + ' .entry').remove();
        _.each(sorted, function (entry, i) {
          var rank = i + 1;
          $('#' + rule).append('<tr class="entry"><td>' + rank + '</td><td>' + entry.name + '</td><td class="strong">' + entry.time + '</td><td>' + entry.max_combo + '</td><td>' + entry.max_gain + '</td><td>' + entry.average_gain + '</td><td>' + entry.userAgent + '</td><td>' + entry.language + '</td></tr>');
        });
        break;
      case 'rule_2_2943':
      case 'rule_2_8390':
      case 'rule_2_37654':
        sorted = _.sortBy(entries, function (entry) {
          return Number(entry.bet_times);
        });

        $('#' + rule + ' .entry').remove();
        _.each(sorted, function (entry, i) {
          var rank = i + 1;
          $('#' + rule).append('<tr class="entry"><td>' + rank + '</td><td>' + entry.name + '</td><td class="strong">' + entry.bet_times + '</td><td>' + entry.max_combo + '</td><td>' + entry.max_gain + '</td><td>' + entry.average_gain + '</td><td>' + entry.userAgent + '</td><td>' + entry.language + '</td></tr>');
        });
        break;
      case 'rule_3_0409':
      case 'rule_3_2009':
      case 'rule_3_6819':
        sorted = _.sortBy(entries, function (entry) {
          return Number(entry.score) * -1;
        });

        $('#' + rule + ' .entry').remove();
        _.each(sorted, function (entry, i) {
          var rank = i + 1;
          $('#' + rule).append('<tr class="entry"><td>' + rank + '</td><td>' + entry.name + '</td><td class="strong">' + entry.score + '</td><td>' + entry.max_combo + '</td><td>' + entry.max_gain + '</td><td>' + entry.average_gain + '</td><td>' + entry.userAgent + '</td><td>' + entry.language + '</td></tr>');
        });
        break;
    }
  }).fail(function (res) {
    // alert(JSON.stringify(res));
  }).always(function () {
    dfd.resolve();
  });

  return dfd.promise();
};

$(function () {
  redrawEntries('tin-tilo-rings', 'rule_1_2943');
  redrawEntries('tin-tilo-rings', 'rule_2_2943');
  redrawEntries('tin-tilo-rings', 'rule_3_0409');
});
