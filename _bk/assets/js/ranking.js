
// const serverRoot = 'http://localhost:4201/';
const serverRoot = 'https://the-system.llll-ll.com/';

const redrawEntries = (gameName, rule) => {
  const dfd = $.Deferred();

  $.ajax({
    url: serverRoot + 'api/rankings/' + gameName + '/' + rule,
    type: 'GET',
    cache: false,
    dataType: 'json',
    // dataType: 'jsonp',
  }).done((res) => {
    const entries = res;

    let sorted = [];
    switch (rule) {
      case 'rule_1_2943':
      case 'rule_1_8390':
      case 'rule_1_37654':
        sorted = _.sortBy(entries, (entry) => {
          return entry.time;
        });

        $('#' + rule + ' .entry').remove();
        _.each(sorted, (entry, i) => {
          const rank = i + 1;
          $('#' + rule).append('<tr class="entry"><td>' + rank + '</td><td>' + entry.name + '</td><td class="strong">' + entry.time + '</td><td>' + entry.max_combo + '</td><td>' + entry.max_gain + '</td><td>' + entry.average_gain + '</td><td>' + entry.env + '</td><td>' + entry.locale + '</td></tr>');
        });
        break;
      case 'rule_2_2943':
      case 'rule_2_8390':
      case 'rule_2_37654':
        sorted = _.sortBy(entries, (entry) => {
          return Number(entry.bet_times);
        });

        $('#' + rule + ' .entry').remove();
        _.each(sorted, (entry, i) => {
          const rank = i + 1;
          $('#' + rule).append('<tr class="entry"><td>' + rank + '</td><td>' + entry.name + '</td><td class="strong">' + entry.bet_times + '</td><td>' + entry.max_combo + '</td><td>' + entry.max_gain + '</td><td>' + entry.average_gain + '</td><td>' + entry.env + '</td><td>' + entry.locale + '</td></tr>');
        });
        break;
      case 'rule_3_0409':
      case 'rule_3_2009':
      case 'rule_3_6819':
        sorted = _.sortBy(entries, (entry) => {
          return Number(entry.score) * -1;
        });

        $('#' + rule + ' .entry').remove();
        _.each(sorted, (entry, i) => {
          const rank = i + 1;
          $('#' + rule).append('<tr class="entry"><td>' + rank + '</td><td>' + entry.name + '</td><td class="strong">' + entry.score + '</td><td>' + entry.max_combo + '</td><td>' + entry.max_gain + '</td><td>' + entry.average_gain + '</td><td>' + entry.env + '</td><td>' + entry.locale + '</td></tr>');
        });
        break;
    }
  }).fail((res) => {
    // alert(JSON.stringify(res));
  }).always(() => {
    dfd.resolve();
  });

  return dfd.promise();
};

$(() => {
  redrawEntries('tin-tilo-rings', 'rule_1_2943');
  redrawEntries('tin-tilo-rings', 'rule_1_8390');
  redrawEntries('tin-tilo-rings', 'rule_1_37654');
  redrawEntries('tin-tilo-rings', 'rule_2_2943');
  redrawEntries('tin-tilo-rings', 'rule_2_8390');
  redrawEntries('tin-tilo-rings', 'rule_2_37654');
  redrawEntries('tin-tilo-rings', 'rule_3_0409');
  redrawEntries('tin-tilo-rings', 'rule_3_2009');
  redrawEntries('tin-tilo-rings', 'rule_3_6819');
});
