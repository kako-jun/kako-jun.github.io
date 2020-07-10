window.onload = async () => {
  const counter = await window.NostalgicCounter.getCounter(
    "https://nostalgic-counter.llll-ll.com/api/counter?id=sample&ex"
  );

  if (counter) {
    window.NostalgicCounter.showCounter("nostalgic-counter-sample1", counter.total);

    window.NostalgicCounter.showCounter("nostalgic-counter-sample2", counter.total, {
      format: "<strong>{count}</strong>",
    });

    window.NostalgicCounter.showCounter("nostalgic-counter-sample3", counter.total, {
      zero_padding_length: 8,
    });

    window.NostalgicCounter.showCounter("nostalgic-counter-sample4", counter.total, {
      image_dir_path: "../assets/image/counter/pdy",
      image_ext: ".gif",
    });

    window.NostalgicCounter.showCounter("nostalgic-counter-sample5", counter.total, {
      format: "<p>{count}</p>",
      zero_padding_length: 8,
      image_dir_path: "../assets/image/counter/pdy",
      image_ext: ".gif",
    });

    window.NostalgicCounter.showCounter("nostalgic-counter-sample6", counter.today);

    window.NostalgicCounter.showCounter("nostalgic-counter-sample7", counter.yesterday, {
      format: "<strong>{count}</strong>",
    });

    const targetElement = document.getElementById("nostalgic-counter-sample7-past");
    if (targetElement) {
      targetElement.innerHTML = counter.yesterday_date + ": ";
    }

    window.NostalgicCounter.showCounter("nostalgic-counter-sample8", counter.this_month, {
      zero_padding_length: 4,
      image_dir_path: "../assets/image/counter/led",
      image_ext: ".gif",
    });

    window.NostalgicCounter.showCounter("nostalgic-counter-sample9", counter.last_month, {
      image_dir_path: "../assets/image/counter/led",
      image_ext: ".gif",
    });

    window.NostalgicCounter.showCounter("nostalgic-counter-sample10", counter.this_year, {
      format: "<p>{count}</p>",
      zero_padding_length: 4,
      image_dir_path: "../assets/image/counter/mahjong",
      image_ext: ".png",
    });

    window.NostalgicCounter.showCounter("nostalgic-counter-sample11", counter.last_year);

    window.NostalgicCounter.showCounter("nostalgic-counter-sample12", counter.total);

    window.NostalgicCounter.showKiriban("nostalgic-counter-sample12-kiriban", counter.total, {
      normal_messages: [
        {
          step: 10,
          message:
            '<p>{step} で割り切れるので、キリが良いよ！ <a class="button button-blue" href="https://twitter.com/share?text={raw_count} 番目の訪問者でした！" target="_blank"><i class="fab fa-twitter"></i> シェアする</a></p>',
        },
        { step: 100, message: "<p>{step} で割り切れるので、すごくキリが良いよ！</p>" },
        { step: 1000, message: "<p>{step} で割り切れるので、めちゃくちゃキリが良いよ！</p>" },
        { step: 10000, message: "<p>{step} で割り切れるので、キリ良すぎ！</p>" },
      ],
      special_messages: [
        { count: 10, message: "<p>みんなありがとう</p>" },
        { count: 20, message: "<p>フン</p>" },
        { count: 30, message: "<p>神に感謝</p>" },
        { count: 40, message: "<p>くっ ボーボボに負けた…</p>" },
        { count: 50, message: "<p>順当な順位ですね</p>" },
        {
          count: 60,
          message: "<p>それではどうぞ。キユで「ロケットでつきぬけろ！」</p>",
        },
        {
          count: 70,
          message: "<p>ここで次週予告！！来週はハルタのお母さん登場！！マザー・オブ・ラブでつきぬけろ！</p>",
        },
        {
          count: 80,
          message: "<p>次週予告！！いよいよ赤城がベールを脱ぐ！！赤城の目的は！？ヒステリックにつきぬけろ！</p>",
        },
        {
          count: 90,
          message: "<p>毎回この欄はボツを食う。けどそれは自分が大人でありコドモであるとゆう事の誇りだ</p>",
        },
        {
          count: 100,
          message: "<p>痛みを知らない子供が嫌い。心をなくした大人が嫌い。優しい漫画が好き。バイバイ</p>",
        },
        { count: 12345, message: "<p>{count} 回も来てくれて感謝。次は {next} を狙って。</p>" },
      ],
      no_kiriban_message: "",
      no_more_kiriban_message: "<p>もうキリ番はありません。</p>",
      next_kiriban_message: "<p>次のキリ番は {next} です。</p>",
    });
  }
};
