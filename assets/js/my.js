const loadCounter = () => {
  // sample1
  window.NostalgicCounter.beNostalgic(
    "nostalgic-counter-sample1",
    "https://nostalgic-counter.llll-ll.com/api/counter"
  );

  // sample2
  window.NostalgicCounter.beNostalgic(
    "nostalgic-counter-sample2",
    "https://nostalgic-counter.llll-ll.com/api/counter",
    {
      zero_padding_length: 8
    }
  );

  // sample3
  window.NostalgicCounter.beNostalgic(
    "nostalgic-counter-sample3",
    "https://nostalgic-counter.llll-ll.com/api/counter?id=sample1"
  );

  // sample4
  window.NostalgicCounter.beNostalgic(
    "nostalgic-counter-sample4",
    "https://nostalgic-counter.llll-ll.com/api/counter?id=sample1",
    { zero_padding_length: 8 }
  );

  // sample5
  window.NostalgicCounter.beNostalgic(
    "nostalgic-counter-sample5",
    "https://nostalgic-counter.llll-ll.com/api/counter?id=sample2",
    { image_dir_path: "./assets/image/counter/pdy", image_ext: ".gif" }
  );

  // sample6
  window.NostalgicCounter.beNostalgic(
    "nostalgic-counter-sample6",
    "https://nostalgic-counter.llll-ll.com/api/counter?id=sample2",
    {
      zero_padding_length: 8,
      image_dir_path: "./assets/image/counter/pdy",
      image_ext: ".gif"
    }
  );

  // sample7
  window.NostalgicCounter.beNostalgic(
    "nostalgic-counter-sample7",
    "https://nostalgic-counter.llll-ll.com/api/counter?id=sample2",
    {
      zero_padding_length: 8,
      image_dir_path: "./assets/image/counter/led",
      image_ext: ".gif"
    }
  );

  // sample8
  window.NostalgicCounter.beNostalgic(
    "nostalgic-counter-sample8",
    "https://nostalgic-counter.llll-ll.com/api/counter?id=sample2",
    {
      zero_padding_length: 8,
      image_dir_path: "./assets/image/counter/mahjong",
      image_ext: ".png"
    }
  );

  // sample9
  window.NostalgicCounter.beNostalgic(
    "nostalgic-counter-sample9",
    "https://nostalgic-counter.llll-ll.com/api/counter?id=sample3",
    {
      normal_messages: [
        {
          step: 10,
          message:
            'キリが良いよ！ <a href="https://twitter.com/share?text={total} 番目の訪問者でした！">シェアする</a>'
        },
        { step: 100, message: "すごくキリが良いよ！" },
        { step: 1000, message: "めちゃくちゃキリが良いよ！" },
        { step: 10000, message: "キリ良すぎ！" }
      ],
      special_messages: [
        { total: 10, message: "みんなありがとう" },
        { total: 20, message: "フン" },
        { total: 30, message: "神に感謝" },
        { total: 40, message: "くっ ボーボボに負けた…" },
        { total: 50, message: "順当な順位ですね" },
        {
          total: 60,
          message: "それではどうぞ。キユで「ロケットでつきぬけろ！」"
        },
        {
          total: 70,
          message:
            "ここで次週予告！！来週はハルタのお母さん登場！！マザー・オブ・ラブでつきぬけろ！"
        },
        {
          total: 80,
          message:
            "次週予告！！いよいよ赤城がベールを脱ぐ！！赤城の目的は！？ヒステリックにつきぬけろ！"
        },
        {
          total: 90,
          message:
            "毎回この欄はボツを食う。けどそれは自分が大人でありコドモであるとゆう事の誇りだ"
        },
        {
          total: 100,
          message:
            "痛みを知らない子供が嫌い。心をなくした大人が嫌い。優しい漫画が好き。バイバイ"
        }
      ],
      no_kiriban_message: "<p>残念！ キリ番ではありません。</p>",
      no_more_kiriban_message: "<p>もうキリ番はありません</p>",
      next_kiriban_message_left: "<p>次のキリ番は ",
      next_kiriban_message_right: " です</p>"
    }
  );
};

window.onload = () => {
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 210,
    speedAsDuration: true,
    easing: "easeOutQuad"
  });

  window.NostalgicCounter.showCounter(
    "nostalgic-counter",
    "https://nostalgic-counter.llll-ll.com/api/counter",
    // {
    //   image_dir_path: "./assets/image/counter/pdy",
    //   image_ext: ".gif"
    // }
  );
};
