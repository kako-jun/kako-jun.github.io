
var audios = {};
var current_BGM_id = 'bgm_1';

var loopPlay = function (id, audio, length) {
  audio.play();
  audio.currentTime = 0;
  setTimeout(function () {
    if (audios[id]) {
      loopPlay(id, audio, length);
    }
  }, length);
};

var playBGM = function (id) {
  var audio = BGMs[id].audio;
  var length = BGMs[id].length;

  audio.volume = BGMs[id].volume;

  if (id.split('_')[0] === 'bgm') {
    stopBGM('bgm_1');
    stopBGM('bgm_2');
    stopBGM('bgm_3');
    stopBGM('bgm_4');
  }

  audios[id] = audio;
  loopPlay(id, audio, length);
};

var stopBGM = function (id) {
  if (audios[id]) {
    audios[id].pause();
    delete audios[id];
  }
};

var stopAllBGM = function () {
  stopBGM('bgm_1');
  stopBGM('bgm_2');
  stopBGM('bgm_3');
  stopBGM('bgm_4');
  stopBGM('bgm_result');
  stopBGM('se_rotate');
};

var changeBGM = function () {
  var n = Number(current_BGM_id.split('_')[1]);
  n++;
  if (n > 4) {
    n = 1;
  }

  var id = 'bgm_' + n;
  current_BGM_id = id;
  this.playBGM(id);
};

var playSound = function (id) {
  var audio = BGMs[id].audio;
  audio.volume = BGMs[id].volume;
  audio.play();
};

// TODO: バレットタイム中は音量を下げるか、くぐもった音にする
var volumeDownBGM = function () {
};
