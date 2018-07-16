
phina.globalize();

phina.main(function () {
  var app = GameApp({
    fps: 60,
    startLabel: 'title',
    assets: _g.Assets,
    scenes: _g.Scenes,
  });

  // app.enableStats();
  app.run();
});

phina.define('TitleScene', {
  superClass: 'DisplayScene',
  init: function (param) {
    var _this = this;
    this.superInit();

    this.backgroundColor = '#732121';

    this.mode = 'first';

    // TODO: Android
    var chkAndroid = navigator.userAgent.indexOf('Android') > 0;
    console.log("chkAndroid = " + chkAndroid);

    if (param.back) {
      setTimeout(function () {
        _this.infoSprite = new InfoSprite(_this, 606, 30);
        _this.infoSprite.show();
        _this.rulesSprite = new RulesSprite(_this, 120, 480);
        _this.rulesSprite.show();
        _this.mode = 'select_rule';
      }, 500);
    } else if (param.rule) {
      setTimeout(function () {
        _this.exit({
          rule: param.rule,
        });
      }, 500);
    } else {
      setTimeout(function () {
        SoundManager.playMusic('voice_chin', null, false);
        setTimeout(function () {
          SoundManager.playMusic('voice_chiro', null, false);
          setTimeout(function () {
            SoundManager.playMusic('voice_rin', null, false);
          }, 600);
        }, 600);
      }, 500);
    }
  },

  update: function (app) {
    switch (this.mode) {
      case 'first':
        break;
      case 'select_rule':
        break;
    }
  },

  onclick: function () {
    this.changeMode();
  },

  changeMode: function () {
    var _this = this;

    switch (this.mode) {
      case 'first':
        this.infoSprite = new InfoSprite(this, 606, 30);
        this.infoSprite.show();
        this.rulesSprite = new RulesSprite(this, 120, 480);
        this.rulesSprite.show();
        this.mode = 'select_rule';
        break;
      case 'select_rule':
        break;
    }
  },
});
