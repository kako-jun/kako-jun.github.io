
var InfoSprite = class {
  constructor(ds, x, y) {
    this.ds = ds;
    this.x = x;
    this.y = y;

    this.calc();
  }

  calc() {
    var _this = this;

    this.sprite = Sprite('button_info').addChildTo(this.ds);
    this.sprite.x = this.x;
    this.sprite.y = this.y;
    this.sprite.alpha = 0;
    this.sprite.setInteractive(true);

    this.sprite.onclick = function () {
      if (_this.ds.mode === 'first') {
        return;
      }

      _this.ds.prevent_click = true;
      setTimeout(function () {
        _this.ds.prevent_click = false;
      }, 100);

      window.open('https://llll-ll.com', '_blank');
    };

    this.sprite.onpointover = function () {
      if (_this.ds.mode === 'first') {
        return;
      }

      _this.sprite.setImage('button_info_hover');
      _g.playSound('voice_info');
    };

    this.sprite.onpointout = function () {
      _this.sprite.setImage('button_info');
    };
  }

  show() {
    if (this.sprite) {
      this.sprite.tweener.fade(0.5, 200).play();
    }
  }

  hide() {
    if (this.sprite) {
      this.sprite.tweener.fadeOut(50).play();
    }
  }

  remove() {
    if (this.sprite) {
      this.sprite.remove();
    }
  }
};

var BackSprite = class {
  constructor(ds, x, y) {
    this.ds = ds;
    this.x = x;
    this.y = y;

    this.calc();
  }

  calc() {
    var _this = this;

    this.sprite = Sprite('button_back').addChildTo(this.ds);
    this.sprite.x = this.x;
    this.sprite.y = this.y;
    this.sprite.alpha = 0;
    this.sprite.setInteractive(true);

    this.sprite.onclick = function () {
      switch (_this.ds.mode) {
        case 'first':
        case 'ready':
          return;
      }

      _this.ds.prevent_click = true;
      setTimeout(function () {
        _this.ds.prevent_click = false;
      }, 100);

      _g.stopAllBGM();

      _this.ds.exit({
        back: true,
      });
    };

    this.sprite.onpointover = function () {
      if (_this.ds.mode === 'first') {
        return;
      }

      _this.sprite.setImage('button_back_hover');
      _g.playSound('voice_back');
    };

    this.sprite.onpointout = function () {
      _this.sprite.setImage('button_back_hover');
    };
  }

  show() {
    if (this.sprite) {
      this.sprite.tweener.fade(0.5, 200).play();
    }
  }

  hide() {
    if (this.sprite) {
      this.sprite.tweener.fadeOut(50).play();
    }
  }

  remove() {
    if (this.sprite) {
      this.sprite.remove();
    }
  }
};

var RulesSprite = class {
  constructor(ds, x, y) {
    this.ds = ds;
    this.x = x;
    this.y = y;

    this.calc();
  }

  calc() {
    var _this = this;
    this.sprites = [];

    var line_sprite_1 = Sprite('line_v_1').addChildTo(_this.ds);
    line_sprite_1.x = this.x + 100;
    line_sprite_1.y = this.y + 200;
    line_sprite_1.alpha = 0;
    this.sprites.push(line_sprite_1);

    var line_sprite_2 = Sprite('line_v_1').addChildTo(_this.ds);
    line_sprite_2.x = this.x + 100 + 200;
    line_sprite_2.y = this.y + 200;
    line_sprite_2.alpha = 0;
    this.sprites.push(line_sprite_2);

    var rule_sprite_1 = Sprite('rule_1').addChildTo(this.ds);
    rule_sprite_1.x = this.x;
    rule_sprite_1.y = this.y;
    rule_sprite_1.alpha = 0;
    this.sprites.push(rule_sprite_1);

    var rule_sprite_2 = Sprite('rule_2').addChildTo(this.ds);
    rule_sprite_2.x = this.x + 200;
    rule_sprite_2.y = this.y;
    rule_sprite_2.alpha = 0;
    this.sprites.push(rule_sprite_2);

    var rule_sprite_3 = Sprite('rule_3').addChildTo(this.ds);
    rule_sprite_3.x = this.x + 200 * 2;
    rule_sprite_3.y = this.y;
    rule_sprite_3.alpha = 0;
    this.sprites.push(rule_sprite_3);

    var rule_sprite_1_2943 = Sprite('rule_1_2943').addChildTo(this.ds);
    rule_sprite_1_2943.x = this.x;
    rule_sprite_1_2943.y = this.y + 120;
    rule_sprite_1_2943.alpha = 0;
    rule_sprite_1_2943.setInteractive(true);

    var rule_sprite_1_8390 = Sprite('rule_1_8390').addChildTo(this.ds);
    rule_sprite_1_8390.x = this.x;
    rule_sprite_1_8390.y = this.y + 120 + 140;
    rule_sprite_1_8390.alpha = 0;
    rule_sprite_1_8390.setInteractive(true);

    var rule_sprite_1_37654 = Sprite('rule_1_37654').addChildTo(this.ds);
    rule_sprite_1_37654.x = this.x;
    rule_sprite_1_37654.y = this.y + 120 + 140 * 2;
    rule_sprite_1_37654.alpha = 0;
    rule_sprite_1_37654.setInteractive(true);

    var rule_sprite_2_2943 = Sprite('rule_2_2943').addChildTo(this.ds);
    rule_sprite_2_2943.x = this.x + 200;
    rule_sprite_2_2943.y = this.y + 120;
    rule_sprite_2_2943.alpha = 0;
    rule_sprite_2_2943.setInteractive(true);

    var rule_sprite_2_8390 = Sprite('rule_2_8390').addChildTo(this.ds);
    rule_sprite_2_8390.x = this.x + 200;
    rule_sprite_2_8390.y = this.y + 120 + 140;
    rule_sprite_2_8390.alpha = 0;
    rule_sprite_2_8390.setInteractive(true);

    var rule_sprite_2_37654 = Sprite('rule_2_37654').addChildTo(this.ds);
    rule_sprite_2_37654.x = this.x + 200;
    rule_sprite_2_37654.y = this.y + 120 + 140 * 2;
    rule_sprite_2_37654.alpha = 0;
    rule_sprite_2_37654.setInteractive(true);

    var rule_sprite_3_0409 = Sprite('rule_3_0409').addChildTo(this.ds);
    rule_sprite_3_0409.x = this.x + 200 * 2;
    rule_sprite_3_0409.y = this.y + 120;
    rule_sprite_3_0409.alpha = 0;
    rule_sprite_3_0409.setInteractive(true);

    var rule_sprite_3_2009 = Sprite('rule_3_2009').addChildTo(this.ds);
    rule_sprite_3_2009.x = this.x + 200 * 2;
    rule_sprite_3_2009.y = this.y + 120 + 140;
    rule_sprite_3_2009.alpha = 0;
    rule_sprite_3_2009.setInteractive(true);

    var rule_sprite_3_6819 = Sprite('rule_3_6819').addChildTo(this.ds);
    rule_sprite_3_6819.x = this.x + 200 * 2;
    rule_sprite_3_6819.y = this.y + 120 + 140 * 2;
    rule_sprite_3_6819.alpha = 0;
    rule_sprite_3_6819.setInteractive(true);

    rule_sprite_1_2943.onclick = function () {
      if (_this.ds.mode === 'first') {
        return;
      }

      _g.playSound('se_select_rule');
      _this.ds.exit({
        rule: 'rule_1_2943',
      });
    };

    rule_sprite_1_2943.onpointover = function () {
      if (_this.ds.mode === 'first') {
        return;
      }

      rule_sprite_1_2943.setImage('rule_1_2943_hover');
      _g.playSound('voice_rule_2943');
    };

    rule_sprite_1_2943.onpointout = function () {
      rule_sprite_1_2943.setImage('rule_1_2943');
    };

    rule_sprite_1_8390.onclick = function () {
      if (_this.ds.mode === 'first') {
        return;
      }

      _g.playSound('se_select_rule');
      _this.ds.exit({
        rule: 'rule_1_8390',
      });
    };

    rule_sprite_1_8390.onpointover = function () {
      if (_this.ds.mode === 'first') {
        return;
      }

      rule_sprite_1_8390.setImage('rule_1_8390_hover');
      _g.playSound('voice_rule_8390');
    };

    rule_sprite_1_8390.onpointout = function () {
      rule_sprite_1_8390.setImage('rule_1_8390');
    };

    rule_sprite_1_37654.onclick = function () {
      if (_this.ds.mode === 'first') {
        return;
      }

      _g.playSound('se_select_rule');
      _this.ds.exit({
        rule: 'rule_1_37654',
      });
    };

    rule_sprite_1_37654.onpointover = function () {
      if (_this.ds.mode === 'first') {
        return;
      }

      rule_sprite_1_37654.setImage('rule_1_37654_hover');
      _g.playSound('voice_rule_37654');
    };

    rule_sprite_1_37654.onpointout = function () {
      rule_sprite_1_37654.setImage('rule_1_37654');
    };

    rule_sprite_2_2943.onclick = function () {
      if (_this.ds.mode === 'first') {
        return;
      }

      _g.playSound('se_select_rule');
      _this.ds.exit({
        rule: 'rule_2_2943',
      });
    };

    rule_sprite_2_2943.onpointover = function () {
      if (_this.ds.mode === 'first') {
        return;
      }

      rule_sprite_2_2943.setImage('rule_2_2943_hover');
      _g.playSound('voice_rule_2943');
    };

    rule_sprite_2_2943.onpointout = function () {
      rule_sprite_2_2943.setImage('rule_2_2943');
    };

    rule_sprite_2_8390.onclick = function () {
      if (_this.ds.mode === 'first') {
        return;
      }

      _g.playSound('se_select_rule');
      _this.ds.exit({
        rule: 'rule_2_8390',
      });
    };

    rule_sprite_2_8390.onpointover = function () {
      if (_this.ds.mode === 'first') {
        return;
      }

      rule_sprite_2_8390.setImage('rule_2_8390_hover');
      _g.playSound('voice_rule_8390');
    };

    rule_sprite_2_8390.onpointout = function () {
      rule_sprite_2_8390.setImage('rule_2_8390');
    };

    rule_sprite_2_37654.onclick = function () {
      if (_this.ds.mode === 'first') {
        return;
      }

      _g.playSound('se_select_rule');
      _this.ds.exit({
        rule: 'rule_2_37654',
      });
    };

    rule_sprite_2_37654.onpointover = function () {
      if (_this.ds.mode === 'first') {
        return;
      }

      rule_sprite_2_37654.setImage('rule_2_37654_hover');
      _g.playSound('voice_rule_37654');
    };

    rule_sprite_2_37654.onpointout = function () {
      rule_sprite_2_37654.setImage('rule_2_37654');
    };

    rule_sprite_3_0409.onclick = function () {
      if (_this.ds.mode === 'first') {
        return;
      }

      _g.playSound('se_select_rule');
      _this.ds.exit({
        rule: 'rule_3_0409',
      });
    };

    rule_sprite_3_0409.onpointover = function () {
      if (_this.ds.mode === 'first') {
        return;
      }

      rule_sprite_3_0409.setImage('rule_3_0409_hover');
      _g.playSound('voice_rule_0409');
    };

    rule_sprite_3_0409.onpointout = function () {
      rule_sprite_3_0409.setImage('rule_3_0409');
    };

    rule_sprite_3_2009.onclick = function () {
      if (_this.ds.mode === 'first') {
        return;
      }

      _g.playSound('se_select_rule');
      _this.ds.exit({
        rule: 'rule_3_2009',
      });
    };

    rule_sprite_3_2009.onpointover = function () {
      if (_this.ds.mode === 'first') {
        return;
      }

      rule_sprite_3_2009.setImage('rule_3_2009_hover');
      _g.playSound('voice_rule_2009');
    };

    rule_sprite_3_2009.onpointout = function () {
      rule_sprite_3_2009.setImage('rule_3_2009');
    };

    rule_sprite_3_6819.onclick = function () {
      if (_this.ds.mode === 'first') {
        return;
      }

      _g.playSound('se_select_rule');
      _this.ds.exit({
        rule: 'rule_3_6819',
      });
    };

    rule_sprite_3_6819.onpointover = function () {
      if (_this.ds.mode === 'first') {
        return;
      }

      rule_sprite_3_6819.setImage('rule_3_6819_hover');
      _g.playSound('voice_rule_6819');
    };

    rule_sprite_3_6819.onpointout = function () {
      rule_sprite_3_6819.setImage('rule_3_6819');
    };

    this.sprites.push(rule_sprite_1_2943);
    this.sprites.push(rule_sprite_1_8390);
    this.sprites.push(rule_sprite_1_37654);
    this.sprites.push(rule_sprite_2_2943);
    this.sprites.push(rule_sprite_2_8390);
    this.sprites.push(rule_sprite_2_37654);
    this.sprites.push(rule_sprite_3_0409);
    this.sprites.push(rule_sprite_3_2009);
    this.sprites.push(rule_sprite_3_6819);
  }

  show() {
    _.each(this.sprites, function (sprite) {
      sprite.tweener.fadeIn(200).play();
    });
  }

  hide() {
    _.each(this.sprites, function (sprite) {
      sprite.tweener.fadeOut(50).play();
    });
  }

  remove() {
    _.each(this.sprites, function (sprite) {
      sprite.remove();
    });

    this.sprites = [];
  }
};

var BackgroundSprites = class {
  constructor(ds) {
    this.ds = ds;

    this.calc();
    this.startAnime();
  }

  calc() {
    this.sprite = Sprite('dummy').addChildTo(this.ds);
    this.sprite.x = 320;
    this.sprite.y = 480;
    this.sprite.alpha = 0;
  }

  show(image) {
    this.sprite.setImage(image);
    this.sprite.width = 960 * 1.2;
    this.sprite.height = 960 * 1.2;
    this.sprite.alpha = 0;

    this.sprite.tweener.fadeIn(500).play();
  }

  change(i_score_1000, rule) {
    var n = i_score_1000 + 1;
    if (n > 37) {
      switch (rule) {
        case 'rule_1_2943':
        case 'rule_1_8390':
        case 'rule_1_37654':
        case 'rule_2_2943':
        case 'rule_2_8390':
        case 'rule_2_37654':
          n = 37;
          break;
        case 'rule_3_0409':
        case 'rule_3_2009':
        case 'rule_3_6819':
          n = n % 37;
          break;
      }
    }

    this.show('bg_' + n);
  }

  remove() {
    if (this.sprite) {
      this.sprite.remove();
    }
  }

  startAnime() {
    var anime_1 = Tweener()
      .by({ rotation: -60 }, 80000, 'easeInOutQuad').
      by({ rotation: 90 }, 80000, 'easeInOutQuad').
      by({ rotation: 60 }, 40000, 'easeInOutQuad').
      by({ rotation: -90 }, 40000, 'easeInOutQuad').setLoop(true);

    var anime_2 = Tweener()
      .to({ scaleX: 1.5, scaleY: 1.5 }, 40000, 'easeInOutQuad')
      .to({ scaleX: 1, scaleY: 1 }, 80000, 'easeInOutQuad').setLoop(true);

    var anime_3 = Tweener()
      .by({ x: -50, y: 0 }, 10000, 'easeInOutQuad')
      .by({ x: 0, y: -50 }, 10000, 'easeInOutQuad')
      .by({ x: 50, y: 0 }, 10000, 'easeInOutQuad')
      .by({ x: 0, y: 50 }, 10000, 'easeInOutQuad').setLoop(true);

    this.sprite.attach(anime_1);
    this.sprite.attach(anime_2);
    this.sprite.attach(anime_3);
  }
};

var KanjiSprites = class {
  constructor(ds) {
    this.ds = ds;

    this.calc();
    this.startAnime();
  }

  calc() {
    this.sprite = Sprite('dummy').addChildTo(this.ds);
    this.sprite.x = 0;
    this.sprite.y = 960;
    this.sprite.alpha = 0;
  }

  show(image) {
    this.sprite.setImage(image);
    this.sprite.width = 150 * 2;
    this.sprite.height = 150 * 2;
  }

  change() {
    this.show('kanji_' + _.random(1, 35));
  }

  remove() {
    if (this.sprite) {
      this.sprite.remove();
    }
  }

  startAnime() {
    var _this = this;

    var anime_1 = Tweener()
      .by({ rotation: 360 }, 100000, 'easeInOutBack').
      by({ rotation: -360 }, 120000, 'easeInOutBack').setLoop(true);

    var anime_2 = Tweener()
      .to({ scaleX: 2, scaleY: 2 }, 20000, 'easeInOutQuad')
      .to({ scaleX: 3, scaleY: 3 }, 20000, 'easeInOutQuad').setLoop(true);

    var anime_3 = Tweener()
      .by({ x: 200, y: -100 }, 14000, 'easeInOutSine')
      .by({ x: -100, y: -200 }, 14000, 'easeInOutSine')
      .by({ x: 150, y: -100 }, 14000, 'easeInOutSine')
      .by({ x: -100, y: -200 }, 14000, 'easeInOutSine')
      .by({ x: 300, y: -300 }, 14000, 'easeInOutSine')
      .by({ x: -450, y: -200 }, 14000, 'easeInOutSine')
      .by({ x: 200, y: 100 }, 14000, 'easeInOutSine')
      .by({ x: -100, y: 200 }, 14000, 'easeInOutSine')
      .by({ x: 150, y: 100 }, 14000, 'easeInOutSine')
      .by({ x: -100, y: 200 }, 14000, 'easeInOutSine')
      .by({ x: 300, y: 300 }, 14000, 'easeInOutSine')
      .by({ x: -450, y: 200 }, 14000, 'easeInOutSine').setLoop(true);

    var anime_4 = Tweener()
      .fade(0.5, 4000)
      .fade(1, 8000)
      .fade(0, 8000)
      .call(function () {
        _this.change();
      }).wait(4000)
      .fade(1, 10000).setLoop(true);

    this.sprite.attach(anime_1);
    this.sprite.attach(anime_2);
    this.sprite.attach(anime_3);
    this.sprite.attach(anime_4);
  }
};

var MonSprites = class {
  constructor(ds) {
    this.ds = ds;

    this.calc();
    this.startAnime();
  }

  calc() {
    this.sprite = Sprite('dummy').addChildTo(this.ds);
    this.sprite.x = 640;
    this.sprite.y = 0;
    this.sprite.alpha = 0;
  }

  show(image) {
    this.sprite.setImage(image);
  }

  change() {
    this.show('mon_' + _.random(1, 14));
  }

  remove() {
    if (this.sprite) {
      this.sprite.remove();
    }
  }

  startAnime() {
    var _this = this;

    var anime_1 = Tweener()
      .by({ rotation: 360 }, 10000, 'easeInOutElastic').
      by({ rotation: -360 }, 10000, 'easeInOutElastic').setLoop(true);

    var anime_2 = Tweener()
      .to({ scaleX: 1.5, scaleY: 1.5 }, 5000, 'easeInOutQuad')
      .to({ scaleX: 1, scaleY: 1 }, 10000, 'easeInOutQuad').setLoop(true);

    var anime_3 = Tweener()
      .by({ x: -200, y: 100 }, 10000, 'easeInOutSine')
      .by({ x: 100, y: 200 }, 10000, 'easeInOutSine')
      .by({ x: -150, y: 100 }, 10000, 'easeInOutSine')
      .by({ x: 100, y: 200 }, 10000, 'easeInOutSine')
      .by({ x: -300, y: 300 }, 10000, 'easeInOutSine')
      .by({ x: 450, y: 200 }, 10000, 'easeInOutSine')
      .by({ x: -200, y: -100 }, 10000, 'easeInOutSine')
      .by({ x: 100, y: -200 }, 10000, 'easeInOutSine')
      .by({ x: -150, y: -100 }, 10000, 'easeInOutSine')
      .by({ x: 100, y: -200 }, 10000, 'easeInOutSine')
      .by({ x: -300, y: -300 }, 10000, 'easeInOutSine')
      .by({ x: 450, y: -200 }, 10000, 'easeInOutSine').setLoop(true);

    var anime_4 = Tweener()
      .fade(0.5, 4000)
      .fade(1, 8000)
      .fade(0, 7000)
      .call(function () {
        _this.change();
      }).wait(4000)
      .fade(1, 10000).setLoop(true);

    this.sprite.attach(anime_1);
    this.sprite.attach(anime_2);
    this.sprite.attach(anime_3);
    this.sprite.attach(anime_4);
  }
};

var EffectSprites = class {
  constructor(ds) {
    this.ds = ds;

    this.calc();
  }

  calc() {
    this.sprites = [];

    var sprite1 = Sprite('bg_bullet_time').addChildTo(this.ds);
    sprite1.x = 320;
    sprite1.y = 480;
    sprite1.alpha = 0;
    this.sprites.push(sprite1);

    var sprite2 = Sprite('bg_revolution').addChildTo(this.ds);
    sprite2.x = 320;
    sprite2.y = 480;
    sprite2.alpha = 0;
    this.sprites.push(sprite2);

    var sprite3 = Sprite('effect_hand').addChildTo(this.ds);
    sprite3.x = 320;
    sprite3.y = 480;
    sprite3.alpha = 0;
    this.sprites.push(sprite3);

    var sprite4 = Sprite('bg_triple_seven').addChildTo(this.ds);
    sprite4.x = 320;
    sprite4.y = 480;
    sprite4.width = 960 * 1.2;
    sprite4.height = 960 * 1.2;
    sprite4.alpha = 0;
    this.sprites.push(sprite4);
  }

  show(effect) {
    switch (effect) {
      case 'bullet_time':
        this.sprites[0].tweener.fadeIn(200).play();
        this.sprites[2].tweener.fade(0.5, 200).by({ rotation: 360 }, 29500, 'linear').play();
        break;
      case 'revolution':
        this.sprites[1].tweener.fadeIn(200).play();
        this.sprites[2].tweener.fade(0.5, 200).by({ rotation: 360 }, 29500, 'linear').play();
        break;
      case 'triple_seven':
        var anime_1 = Tweener().fade(0.2, 200);
        var anime_2 = Tweener().by({ rotation: 360 }, 2000, 'linear');

        this.sprites[3].attach(anime_1);
        this.sprites[3].attach(anime_2);
        break;
    }
  }

  hide(effect) {
    if (effect) {
      switch (effect) {
        case 'triple_seven':
          this.sprites[3].tweener.fadeOut(50).play();
          break;
      }
    } else {
      _.each(this.sprites, function (sprite) {
        sprite.tweener.fadeOut(50).play();
      });
    }
  }

  remove() {
    _.each(this.sprites, function (sprite) {
      sprite.remove();
    });

    this.sprites = [];
  }
};

var LinesSprites = class {
  constructor(ds) {
    this.ds = ds;

    this.calc();
  }

  calc() {
    this.sprites = [];

    var sprite1 = Sprite('line_v_1').addChildTo(this.ds);
    sprite1.x = 122;
    sprite1.y = 450;
    sprite1.alpha = 0;
    this.sprites.push(sprite1);

    var sprite2 = Sprite('line_v_1').addChildTo(this.ds);
    sprite2.x = 164;
    sprite2.y = 450;
    sprite2.alpha = 0;
    this.sprites.push(sprite2);

    var sprite3 = Sprite('line_h_1').addChildTo(this.ds);
    sprite3.x = 142;
    sprite3.y = 278;
    sprite3.alpha = 0;
    this.sprites.push(sprite3);

    var sprite4 = Sprite('line_h_1').addChildTo(this.ds);
    sprite4.x = 142;
    sprite4.y = 488;
    sprite4.alpha = 0;
    this.sprites.push(sprite4);

    var sprite5 = Sprite('line_h_2').addChildTo(this.ds);
    sprite5.x = 142;
    sprite5.y = 320;
    sprite5.alpha = 0;
    this.sprites.push(sprite5);

    var sprite6 = Sprite('line_h_2').addChildTo(this.ds);
    sprite6.x = 142;
    sprite6.y = 362;
    sprite6.alpha = 0;
    this.sprites.push(sprite6);

    var sprite7 = Sprite('line_h_2').addChildTo(this.ds);
    sprite7.x = 142;
    sprite7.y = 404;
    sprite7.alpha = 0;
    this.sprites.push(sprite7);

    var sprite8 = Sprite('line_h_2').addChildTo(this.ds);
    sprite8.x = 142;
    sprite8.y = 446;
    sprite8.alpha = 0;
    this.sprites.push(sprite8);
  }

  show() {
    _.each(this.sprites, function (sprite) {
      sprite.tweener.fadeIn(200).play();
    });
  }

  hide() {
    _.each(this.sprites, function (sprite) {
      sprite.tweener.fadeOut(50).play();
    });
  }

  remove() {
    _.each(this.sprites, function (sprite) {
      sprite.remove();
    });

    this.sprites = [];
  }
};

var RingSprites = class {
  constructor(ds, x, y, align) {
    this.ds = ds;
    this.x = x;
    this.y = y;
    this.align = align;

    this.ns = [];
    this.color = 'white';

    this.basic_alpha = 1;
    this.i_transform = 0;
    this.transformed = false;

    this.ring_pattern_new = {
      top: {
        x_ratio: 0,
        width_ratio: 1,
      },
      bottom: {
        x_ratio: 0,
        width_ratio: 1,
      },
    };

    this.ring_pattern = this.ring_pattern_new;
    this.ring_pattern_old = this.ring_pattern;

    this.calc();
  }

  calc() {
    var _this = this;

    this.sprites = [];
    _.times(10, function (i) {
      var sprite = Sprite('dummy').addChildTo(_this.ds);
      sprite.x = _this.x;
      sprite.y = _this.y - (42 * 10) + 42 * i;
      sprite.alpha = 0;
      _this.sprites.push(sprite);
    });

    _.times(10, function (i) {
      var sprite = Sprite('dummy').addChildTo(_this.ds);
      sprite.x = _this.x;
      sprite.y = _this.y + 42 * i;
      sprite.alpha = 0;
      _this.sprites.push(sprite);
    });

    _.times(10, function (i) {
      var sprite = Sprite('dummy').addChildTo(_this.ds);
      sprite.x = _this.x;
      sprite.y = _this.y + (42 * 10) + 42 * i;
      sprite.alpha = 0;
      _this.sprites.push(sprite);
    });

    _.times(10, function (i) {
      var sprite = Sprite('dummy').addChildTo(_this.ds);
      sprite.x = _this.x;
      sprite.y = _this.y + (42 * 20) + 42 * i;
      sprite.alpha = 0;
      _this.sprites.push(sprite);
    });
  }

  redraw(ns, color) {
    this.ns = ns;
    this.color = color;

    _.each(this.sprites, function (sprite, i) {
      var i2 = i % 10;
      var n = ns[i2];

      sprite.setImage(color + '_n_' + n);
      sprite.alpha = 0;
      sprite.my_n = n;
    });

    this.show();
  }

  show() {
    var _this = this;

    _.each(this.sprites, function (sprite) {
      if (sprite.y >= -40 && sprite.y <= 200) {
        var delta = (sprite.y + 40) / 240;
        sprite.alpha = delta * _this.basic_alpha;
      } else if (sprite.y >= 700 && sprite.y <= 1000) {
        var delta = (300 - (1000 - sprite.y)) / 300;
        sprite.alpha = (1 - delta) * _this.basic_alpha;
      } else {
        sprite.alpha = _this.basic_alpha;
      }
    });
  }

  hide() {
    _.each(this.sprites, function (sprite) {
      sprite.tweener.fadeOut(50).play();
    });
  }

  remove() {
    _.each(this.sprites, function (sprite) {
      sprite.remove();
    });

    this.sprites = [];
  }

  changeOpacity(opacity) {
    var _this = this;

    if (opacity === 'normal') {
      this.basic_alpha = 1;
    } else {
      this.basic_alpha = 0.2;
    }

    _.each(this.sprites, function (sprite) {
      if (sprite.y >= -40 && sprite.y <= 200) {
        var delta = (sprite.y + 40) / 240;
        sprite.alpha = delta * _this.basic_alpha;
      } else if (sprite.y >= 700 && sprite.y <= 1000) {
        var delta = (300 - (1000 - sprite.y)) / 300;
        sprite.alpha = (1 - delta) * _this.basic_alpha;
      } else {
        sprite.alpha = _this.basic_alpha;
      }
    });
  }

  changeRingPattern() {
    var ring_pattern = {
      top: {
        x_ratio: _.random(-5, 5),
        width_ratio: _.random(5, 30) / 10,
      },
      bottom: {
        x_ratio: _.random(-5, 5),
        width_ratio: _.random(5, 30) / 10,
      },
    };

    this.i_transform = 0;
    this.transformed = false;

    this.ring_pattern_old = this.ring_pattern;
    this.ring_pattern_new = ring_pattern;
    this.ring_pattern = this.calcRingPattern();
  }

  calcRingPattern() {
    if (this.transformed) {
      return this.ring_pattern;
    } else {
      this.i_transform++;
      if (this.i_transform > 10000) {
        this.i_transform = 0;
        this.transformed = true;
        this.ring_pattern_old = this.ring_pattern;
      }

      var delta_top_x = (this.ring_pattern_new.top.x_ratio - this.ring_pattern_old.top.x_ratio) / 10000;
      var delta_top_width = (this.ring_pattern_new.top.width_ratio - this.ring_pattern_old.top.width_ratio) / 10000;
      var delta_bottom_x = (this.ring_pattern_new.bottom.x_ratio - this.ring_pattern_old.bottom.x_ratio) / 10000;
      var delta_bottom_width = (this.ring_pattern_new.bottom.width_ratio - this.ring_pattern_old.bottom.width_ratio) / 10000;

      var ring_pattern = {
        top: {
          x_ratio: this.ring_pattern_old.top.x_ratio + delta_top_x * this.i_transform,
          width_ratio: this.ring_pattern_old.top.width_ratio + delta_top_width * this.i_transform,
        },
        bottom: {
          x_ratio: this.ring_pattern_old.bottom.x_ratio + delta_bottom_x * this.i_transform,
          width_ratio: this.ring_pattern_old.bottom.width_ratio + delta_bottom_width * this.i_transform,
        },
      };

      return ring_pattern;
    }
  }

  transform(sprite) {
    this.ring_pattern = this.calcRingPattern();

    if (sprite.y >= -40 && sprite.y <= 200) {
      var delta = (sprite.y + 40) / 240;
      sprite.alpha = delta * this.basic_alpha;
      sprite.x = this.x + (1 - delta) * (1 - delta) * 100 * this.ring_pattern.top.x_ratio;
      sprite.width = (42 * this.ring_pattern.top.width_ratio) - (42 * this.ring_pattern.top.width_ratio - 42) * delta;
    } else if (sprite.y >= 700 && sprite.y <= 1000) {
      var delta = (300 - (1000 - sprite.y)) / 300;
      sprite.alpha = (1 - delta) * this.basic_alpha;
      sprite.x = this.x + delta * delta * 100 * this.ring_pattern.bottom.x_ratio;
      sprite.width = 42 + (42 * this.ring_pattern.bottom.width_ratio - 42) * delta;
    } else {
      sprite.alpha = this.basic_alpha;
      sprite.x = this.x;
      sprite.width = 42;
    }
  }

  rotate(speed) {
    var _this = this;

    _.each(this.sprites, function (sprite, i) {
      sprite.y -= speed;

      var initial_y = 0;
      if (i < 10) {
        initial_y = _this.y - (42 * 10) + 42 * i;
      } else if (i < 20) {
        initial_y = _this.y + 42 * (i - 10);
      } else if (i < 30) {
        initial_y = _this.y + (42 * 10) + 42 * (i - 20);
      } else if (i < 40) {
        initial_y = _this.y + (42 * 20) + 42 * (i - 30);
      }

      if (sprite.y <= initial_y - 42 * 10) {
        sprite.y = initial_y;
      }

      _this.transform(sprite);
    });
  }

  brake(speed, cb) {
    var _this = this;

    var dt = 0;
    _.each(this.sprites, function (sprite, i) {
      var initial_y = 0;
      if (i < 10) {
        initial_y = _this.y - (42 * 10) + 42 * i;
      } else if (i < 20) {
        initial_y = _this.y + 42 * (i - 10);
      } else if (i < 30) {
        initial_y = _this.y + (42 * 10) + 42 * (i - 20);
      } else if (i < 40) {
        initial_y = _this.y + (42 * 20) + 42 * (i - 30);
      }

      var dy = sprite.y - initial_y;
      var dn = Math.floor(dy / 42);
      var dest_y = initial_y + 42 * dn;
      var dest_dy = dest_y - sprite.y;

      // if (initial_y - dest_y >= 42 * 10) {
      //   dest_y = initial_y;
      // }

      // sprite.y = dest_y;
      dt = 10 * Math.abs(dest_dy);
      sprite.tweener.by({ y: dest_dy }, dt, 'easeOutExpo').play();

      _this.transform(sprite);
    });

    if (cb) {
      setTimeout(cb(), dt);
    }
  }

  stop(zone) {
    var _this = this;

    var start_y = _this.y;
    var end_y = _this.y + 42 * 10;

    this.eyes = [];
    _.each(this.sprites, function (sprite, i) {
      if (sprite.y >= start_y && sprite.y < end_y) {
        var eye = sprite.my_n;
        _this.eyes.push(eye);
      }
    });

    if (zone) {
      switch (this.align) {
        case 'left':
          SoundManager.playMusic('voice_chin', null, false);
          break;
        case 'center':
          SoundManager.playMusic('voice_chiro', null, false);
          break;
        case 'right':
          SoundManager.playMusic('voice_rin', null, false);
          break;
      }
    } else {
      SoundManager.playMusic('se_stop', null, false);
    }
  }
};

var GuidesSprites = class {
  constructor(ds, x, y) {
    this.ds = ds;
    this.x = x;
    this.y = y;

    this.calc();
  }

  calc(guide) {
    var _this = this;

    this.reach_sprites = [];
    _.times(11, function (i) {
      var alphabet = String.fromCharCode(97 + i)

      var sprite = Sprite('guide_reach_' + alphabet).addChildTo(_this.ds);
      sprite.x = _this.x;
      sprite.y = _this.y;
      sprite.alpha = 0;

      _this.reach_sprites.push(sprite);
    });

    this.mod_sprites = [];

    var mod_sprite_a = Sprite('guide_mod_a').addChildTo(this.ds);
    var mod_sprite_f = Sprite('guide_mod_f').addChildTo(this.ds);
    var mod_sprite_i = Sprite('guide_mod_i').addChildTo(this.ds);

    mod_sprite_a.x = this.x;
    mod_sprite_a.y = this.y;
    mod_sprite_a.alpha = 0;

    mod_sprite_f.x = this.x;
    mod_sprite_f.y = this.y;
    mod_sprite_f.alpha = 0;

    mod_sprite_i.x = this.x;
    mod_sprite_i.y = this.y;
    mod_sprite_i.alpha = 0;

    this.mod_sprites.push(mod_sprite_a);
    this.mod_sprites.push(mod_sprite_f);
    this.mod_sprites.push(mod_sprite_i);
  }

  show(guide) {
    switch (guide) {
      case 'a':
        this.reach_sprites[0].tweener.fadeIn(200).play();
        break;
      case 'b':
        this.reach_sprites[1].tweener.fadeIn(200).play();
        break;
      case 'c':
        this.reach_sprites[2].tweener.fadeIn(200).play();
        break;
      case 'd':
        this.reach_sprites[3].tweener.fadeIn(200).play();
        break;
      case 'e':
        this.reach_sprites[4].tweener.fadeIn(200).play();
        break;
      case 'f':
        this.reach_sprites[5].tweener.fadeIn(200).play();
        break;
      case 'g':
        this.reach_sprites[6].tweener.fadeIn(200).play();
        break;
      case 'h':
        this.reach_sprites[7].tweener.fadeIn(200).play();
        break;
      case 'i':
        this.reach_sprites[8].tweener.fadeIn(200).play();
        break;
      case 'j':
        this.reach_sprites[9].tweener.fadeIn(200).play();
        break;
      case 'k':
        this.reach_sprites[10].tweener.fadeIn(200).play();
        break;
      case 'mod':
        this.mod_sprites[0].tweener.fadeIn(50).play();
        this.mod_sprites[1].tweener.wait(400).fadeIn(50).play();
        this.mod_sprites[2].tweener.wait(800).fadeIn(50).play();
        break;
    }
  }

  hide() {
    _.each(this.reach_sprites, function (sprite) {
      sprite.tweener.fadeOut(50).play();
    });

    _.each(this.mod_sprites, function (sprite) {
      sprite.tweener.fadeOut(50).play();
    });
  }

  remove() {
    _.each(this.reach_sprites, function (sprite) {
      sprite.remove();
    });

    _.each(this.mod_sprites, function (sprite) {
      sprite.remove();
    });

    this.reach_sprites = [];
    this.mod_sprites = [];
  }
};

var ModsSprites = class {
  constructor(ds, x, y) {
    this.ds = ds;
    this.x = x;
    this.y = y;

    this.calc();
  }

  calc() {
    var _this = this;

    this.sprites = [];
    _.times(11, function (i) {
      var sprite = Sprite('dummy').addChildTo(_this.ds);
      if (i >= 0 && i <= 4) {
        sprite.x = _this.x - 100;
        sprite.y = _this.y - 82 + 42 * i;
      } else if (i >= 5 && i <= 7) {
        sprite.x = _this.x + 72;
        sprite.y = _this.y - 128 + 47 * (i - 5);
      } else if (i >= 8 && i <= 10) {
        sprite.x = _this.x + 72;
        sprite.y = _this.y + 38 + 47 * (i - 8);
      }

      sprite.alpha = 0;
      _this.sprites.push(sprite);
    });
  }

  redraw(mods) {
    _.each(this.sprites, function (sprite, i) {
      var mod = mods[i];
      sprite.setImage('mod_n_' + mod);
      sprite.alpha = 0;
    });

    this.show();
  }

  show() {
    this.sprites[0].tweener.fadeIn(50).play();
    this.sprites[1].tweener.fadeIn(50).play();
    this.sprites[2].tweener.fadeIn(50).play();
    this.sprites[3].tweener.fadeIn(50).play();
    this.sprites[4].tweener.fadeIn(50).play();
    _g.playSound('se_mod');
    // SoundManager.playMusic('se_mod', null, false);

    this.sprites[5].tweener.wait(400).fadeIn(50).play();
    this.sprites[6].tweener.wait(400).fadeIn(50).play();
    this.sprites[7].tweener.wait(400).fadeIn(50).call(function () {
      // _g.playSound('se_mod');
      SoundManager.playMusic('se_mod', null, false);
    }).play();

    this.sprites[8].tweener.wait(800).fadeIn(50).play();
    this.sprites[9].tweener.wait(800).fadeIn(50).play();
    this.sprites[10].tweener.wait(800).fadeIn(50).call(function () {
      // _g.playSound('se_mod');
      SoundManager.playMusic('se_mod', null, false);
    }).play();
  }

  hide() {
    _.each(this.sprites, function (sprite) {
      sprite.tweener.fadeOut(50).play();
    });
  }

  remove() {
    _.each(this.sprites, function (sprite) {
      sprite.remove();
    });

    this.sprites = [];
  }
};

var AlphabetsSprites = class {
  constructor(ds, x, y) {
    this.ds = ds;
    this.x = x;
    this.y = y;

    this.calc();
  }

  calc() {
    var _this = this;

    this.sprite_group = [];
    _.times(11, function (i) {
      var alphabet = String.fromCharCode(97 + i)
      var alphabet_sprite = Sprite('alphabet_' + alphabet).addChildTo(_this.ds);
      alphabet_sprite.x = _this.x;
      alphabet_sprite.y = _this.y + 42 * i;
      alphabet_sprite.alpha = 0;

      var tuple_sprite_1 = Sprite('dummy').addChildTo(_this.ds);
      tuple_sprite_1.x = _this.x + 28;
      tuple_sprite_1.y = _this.y + 42 * i;
      tuple_sprite_1.width = 35;
      tuple_sprite_1.height = 35;
      tuple_sprite_1.alpha = 0;

      var tuple_sprite_2 = Sprite('dummy').addChildTo(_this.ds);
      tuple_sprite_2.x = _this.x + 53;
      tuple_sprite_2.y = _this.y + 42 * i;
      tuple_sprite_2.width = 35;
      tuple_sprite_2.height = 35;
      tuple_sprite_2.alpha = 0;

      var tuple_sprite_3 = Sprite('dummy').addChildTo(_this.ds);
      tuple_sprite_3.x = _this.x + 78;
      tuple_sprite_3.y = _this.y + 42 * i;
      tuple_sprite_3.width = 35;
      tuple_sprite_3.height = 35;
      tuple_sprite_3.alpha = 0;

      var mod_sprite = Sprite('dummy').addChildTo(_this.ds);
      mod_sprite.x = _this.x + 112;
      mod_sprite.y = _this.y + 42 * i;
      mod_sprite.width = 30;
      mod_sprite.height = 30;
      mod_sprite.alpha = 0;

      _this.sprite_group.push([alphabet_sprite, tuple_sprite_1, tuple_sprite_2, tuple_sprite_3, mod_sprite]);
    });

    this.line_sprite = Sprite('line_h_3').addChildTo(this.ds);
    this.line_sprite.x = this.x + 140;
    this.line_sprite.y = this.y + 445;
    this.line_sprite.alpha = 0;
  }

  redraw(tuples, mods) {
    _.each(this.sprite_group, function (sprites, i) {
      var tuple = tuples[i];
      var mod = mods[i];

      var alphabet_sprite = sprites[0];
      alphabet_sprite.alpha = 0;

      var tuple_sprite_1 = sprites[1];
      tuple_sprite_1.setImage('gray_n_' + tuple[0]);
      tuple_sprite_1.width = 35;
      tuple_sprite_1.height = 35;
      tuple_sprite_1.alpha = 0;

      var tuple_sprite_2 = sprites[2];
      tuple_sprite_2.setImage('gray_n_' + tuple[1]);
      tuple_sprite_2.width = 35;
      tuple_sprite_2.height = 35;
      tuple_sprite_2.alpha = 0;

      var tuple_sprite_3 = sprites[3];
      tuple_sprite_3.setImage('gray_n_' + tuple[2]);
      tuple_sprite_3.width = 35;
      tuple_sprite_3.height = 35;
      tuple_sprite_3.alpha = 0;

      var mod_sprite = sprites[4];
      mod_sprite.setImage('mod_n_' + mod);
      mod_sprite.width = 30;
      mod_sprite.height = 30;
      mod_sprite.alpha = 0;
    });

    this.line_sprite.alpha = 0;

    this.show();
  }

  show() {
    _.each(this.sprite_group, function (sprites) {
      _.each(sprites, function (sprite) {
        sprite.tweener.wait(800).fadeIn(50).play();
      });
    });

    if (this.line_sprite) {
      this.line_sprite.tweener.wait(800).fadeIn(50).play();
    }
  }

  hide() {
    _.each(this.sprite_group, function (sprites) {
      _.each(sprites, function (sprite) {
        sprite.tweener.fadeOut(50).play();
      });
    });

    if (this.line_sprite) {
      this.line_sprite.tweener.fadeOut(50).play();
    }
  }

  remove() {
    _.each(this.sprite_group, function (sprites) {
      _.each(sprites, function (sprite) {
        sprite.remove();
      });
    });

    this.sprite_group = [];

    if (this.line_sprite) {
      this.line_sprite.remove();
    }
  }
};

var ScoresSprites = class {
  constructor(ds, x, y) {
    this.ds = ds;
    this.x = x;
    this.y = y;

    this.calc();
  }

  calc() {
    var _this = this;

    this.sprite_group = [];
    _.times(11, function (i) {
      var roll_sprite = Sprite('dummy').addChildTo(_this.ds);
      roll_sprite.x = _this.x;
      roll_sprite.y = _this.y + 42 * i;
      roll_sprite.alpha = 0;

      var odds_sprite = Sprite('dummy').addChildTo(_this.ds);
      odds_sprite.x = _this.x + 85;
      odds_sprite.y = _this.y + 42 * i;
      odds_sprite.alpha = 0;

      _this.sprite_group.push([roll_sprite, odds_sprite]);
    });
  }

  redraw(scores, revolution) {
    _.each(this.sprite_group, function (sprites, i) {
      var score = scores[i];

      var roll_image = '';
      var odds_image = '';
      if (score.won) {
        roll_image = 'roll_' + score.roll.name;

        var odds = 0;
        if (score.roll.odds) {
          odds = score.roll.odds;
        } else {
          odds = score.roll.calcGain(score.sum, score.tuple, score.mod);
        }

        if (score.roll.f === 'multi') {
          if (revolution) {
            odds *= -1;
          }
        }

        odds_image = 'odds_' + score.roll.f + '_' + odds;
      } else {
        roll_image = 'roll_buta';
        odds_image = 'dummy';
      }

      var roll_sprite = sprites[0];
      roll_sprite.setImage(roll_image);
      roll_sprite.alpha = 0;

      var odds_sprite = sprites[1];
      odds_sprite.setImage(odds_image);
      odds_sprite.alpha = 0;
    });

    this.show(scores);
  }

  show(scores) {
    _.each(this.sprite_group, function (sprites, i) {
      var score = scores[i];

      var roll_sprite = sprites[0];
      var odds_sprite = sprites[1];

      if (score.won) {
        switch (Rule.getStep(score)) {
          case 'me':
            roll_sprite.tweener.fadeIn(50).play();
            odds_sprite.tweener.fadeIn(50).play();
            break;
          case 'kabu':
            roll_sprite.tweener.wait(500).fadeIn(50).play();
            odds_sprite.tweener.wait(500).fadeIn(50).play();
            break;
          case 'multi':
            roll_sprite.tweener.wait(1000).fadeIn(50).play();
            odds_sprite.tweener.wait(1000).fadeIn(50).play();
            break;
        }
      } else {
        roll_sprite.tweener.wait(1000).fadeIn(50).play();
        odds_sprite.tweener.wait(1000).fadeIn(50).play();
      }
    });
  }

  hide() {
    _.each(this.sprite_group, function (sprites) {
      _.each(sprites, function (sprite) {
        sprite.tweener.fadeOut(50).play();
      });
    });
  }

  remove() {
    _.each(this.sprite_group, function (sprites) {
      _.each(sprites, function (sprite) {
        sprite.remove();
      });
    });

    this.sprite_group = [];
  }
};

var ComboSprites = class {
  constructor(ds, x, y) {
    this.ds = ds;
    this.x = x;
    this.y = y;

    this.calc();
  }

  calc() {
    this.combo_sprite = Sprite('dummy').addChildTo(this.ds);
    this.combo_sprite.x = this.x + 39;
    this.combo_sprite.y = this.y + 12;
    this.combo_sprite.alpha = 0;

    this.text_sprite = Sprite('text_combo').addChildTo(this.ds);
    this.text_sprite.x = this.x;
    this.text_sprite.y = this.y;
    this.text_sprite.alpha = 0;
  }

  redraw(i_combo) {
    this.combo_sprite.setImage('odds_multi_' + i_combo);
    this.combo_sprite.alpha = 0;

    this.text_sprite.alpha = 0;

    this.show();
  }

  show() {
    if (this.text_sprite) {
      this.text_sprite.tweener.wait(1500).fadeIn(50).play();
    }

    if (this.combo_sprite) {
      this.combo_sprite.tweener.wait(1500).fadeIn(50).play();
    }
  }

  hide() {
    if (this.text_sprite) {
      this.text_sprite.tweener.fadeOut(50).play();
    }

    if (this.combo_sprite) {
      this.combo_sprite.tweener.fadeOut(50).play();
    }
  }

  remove() {
    if (this.text_sprite) {
      this.text_sprite.remove();
    }

    if (this.combo_sprite) {
      this.combo_sprite.remove();
    }
  }
};

var CurrentScoreSprites = class {
  constructor(ds, x, y) {
    this.ds = ds;
    this.x = x;
    this.y = y;

    this.calc();
  }

  calc() {
    var _this = this;

    this.me_sprites = [];
    _.times(8, function (i) {
      var sprite = Sprite('dummy').addChildTo(_this.ds);
      sprite.x = _this.x - 70 * 0.7 * (8 - i);
      sprite.y = _this.y;
      sprite.alpha = 0;
      _this.me_sprites.push(sprite);
    });

    this.kabu_sprites = [];
    _.times(8, function (i) {
      var sprite = Sprite('dummy').addChildTo(_this.ds);
      sprite.x = _this.x - 70 * 0.7 * (8 - i);
      sprite.y = _this.y;
      sprite.alpha = 0;
      _this.kabu_sprites.push(sprite);
    });

    this.multi_sprites = [];
    _.times(8, function (i) {
      var sprite = Sprite('dummy').addChildTo(_this.ds);
      sprite.x = _this.x - 70 * 0.7 * (8 - i);
      sprite.y = _this.y;
      sprite.alpha = 0;
      _this.multi_sprites.push(sprite);
    });

    this.combo_sprites = [];
    _.times(8, function (i) {
      var sprite = Sprite('dummy').addChildTo(_this.ds);
      sprite.x = _this.x - 70 * 0.7 * (8 - i);
      sprite.y = _this.y;
      sprite.alpha = 0;
      _this.combo_sprites.push(sprite);
    });
  }

  redraw(current_scores) {
    var _this = this;

    var me_digits = String(current_scores[0]).split('');
    var kabu_digits = String(current_scores[1]).split('');
    var multi_digits = String(current_scores[2]).split('');
    var combo_digits = String(current_scores[3]).split('');

    var me_start_i = 8 - me_digits.length;
    _.each(this.me_sprites, function (sprite, i) {
      if (i < me_start_i) {
        sprite.setImage('dummy');
      } else {
        var digit = me_digits[i - me_start_i];
        sprite.setImage('fude_n_' + digit);
        sprite.width = 70;
        sprite.height = 70;
        sprite.alpha = 0;
      }
    });

    var kabu_start_i = 8 - kabu_digits.length;
    _.each(this.kabu_sprites, function (sprite, i) {
      if (i < kabu_start_i) {
        sprite.setImage('dummy');
      } else {
        var digit = kabu_digits[i - kabu_start_i];
        sprite.setImage('fude_n_' + digit);
        sprite.width = 70;
        sprite.height = 70;
        sprite.alpha = 0;
      }
    });

    var multi_start_i = 8 - multi_digits.length;
    _.each(this.multi_sprites, function (sprite, i) {
      if (i < multi_start_i) {
        sprite.setImage('dummy');
      } else {
        var digit = multi_digits[i - multi_start_i];
        sprite.setImage('fude_n_' + digit);
        sprite.width = 70;
        sprite.height = 70;
        sprite.alpha = 0;
      }
    });

    var combo_start_i = 8 - combo_digits.length;
    _.each(this.combo_sprites, function (sprite, i) {
      if (i < combo_start_i) {
        sprite.setImage('dummy');
      } else {
        var digit = combo_digits[i - combo_start_i];
        sprite.setImage('fude_n_' + digit);
        sprite.width = 70;
        sprite.height = 70;
        sprite.alpha = 0;
      }
    });

    this.show(current_scores);
  }

  show(current_scores) {
    _.each(this.me_sprites, function (sprite) {
      sprite.tweener.fadeIn(50).wait(500).fadeOut(50).play();
    });

    _.each(this.kabu_sprites, function (sprite) {
      sprite.tweener.wait(500).fadeIn(50).wait(500).fadeOut(50).play();
    });

    if (current_scores[3] !== current_scores[2]) {
      _.each(this.multi_sprites, function (sprite) {
        sprite.tweener.wait(1000).fadeIn(50).wait(500).fadeOut(50).play();
      });

      _.each(this.combo_sprites, function (sprite) {
        sprite.tweener.wait(1500).fadeIn(50).play();
      });
    } else {
      _.each(this.multi_sprites, function (sprite) {
        sprite.tweener.wait(1000).fadeIn(50).play();
      });
    }

    if (current_scores[0] > 0) {
      SoundManager.playMusic('se_win', null, false);
    } else {
      SoundManager.playMusic('se_buta', null, false);
    }

    if (current_scores[1] > current_scores[0]) {
      setTimeout(function () {
        SoundManager.playMusic('se_win', null, false);
      }, 500);
    } else {
      setTimeout(function () {
        SoundManager.playMusic('se_buta', null, false);
      }, 500);
    }

    if (current_scores[2] > current_scores[1]) {
      setTimeout(function () {
        SoundManager.playMusic('se_multi', null, false);
      }, 1000);
    } else if (current_scores[2] === current_scores[1]) {
      setTimeout(function () {
        SoundManager.playMusic('se_buta', null, false);
      }, 1000);
    } else {
      setTimeout(function () {
        SoundManager.playMusic('se_hifumi', null, false);
      }, 1000);
    }

    if (current_scores[3] !== current_scores[2]) {
      setTimeout(function () {
        SoundManager.playMusic('voice_combo', null, false);
      }, 1500);
    }
  }

  hide() {
    _.each(this.me_sprites, function (sprite) {
      sprite.tweener.fadeOut(50).play();
    });

    _.each(this.kabu_sprites, function (sprite) {
      sprite.tweener.fadeOut(50).play();
    });

    _.each(this.multi_sprites, function (sprite) {
      sprite.tweener.fadeOut(50).play();
    });

    _.each(this.combo_sprites, function (sprite) {
      sprite.tweener.fadeOut(50).play();
    });
  }

  remove() {
    _.each(this.me_sprites, function (sprite) {
      sprite.remove();
    });

    _.each(this.kabu_sprites, function (sprite) {
      sprite.remove();
    });

    _.each(this.multi_sprites, function (sprite) {
      sprite.remove();
    });

    _.each(this.combo_sprites, function (sprite) {
      sprite.remove();
    });

    this.me_sprites = [];
    this.kabu_sprites = [];
    this.multi_sprites = [];
    this.combo_sprites = [];
  }
};

var TotalScoreSprites = class {
  constructor(ds, x, y) {
    this.ds = ds;
    this.x = x;
    this.y = y;

    this.calc();
  }

  calc() {
    var _this = this;

    this.sprites = [];
    _.times(8, function (i) {
      var sprite = Sprite('dummy').addChildTo(_this.ds);
      sprite.x = _this.x + 100 * 0.7 * i;
      sprite.y = _this.y;
      sprite.alpha = 0;
      _this.sprites.push(sprite);
    });
  }

  redraw(total_score) {
    var digits = String(total_score).split('');

    _.each(this.sprites, function (sprite, i) {
      if (i < digits.length) {
        var digit = digits[i];
        sprite.setImage('fude_n_' + digit);
      } else {
        sprite.setImage('dummy');
      }

      sprite.tweener.fadeIn(100).play();
    });
  }

  remove() {
    _.each(this.sprites, function (sprite) {
      sprite.remove();
    });

    this.sprites = [];
  }
};

var TimeSprites = class {
  constructor(ds, x, y) {
    this.ds = ds;
    this.x = x;
    this.y = y;

    this.calc();
  }

  calc() {
    var _this = this;

    this.sprites = [];
    _.times(8, function (i) {
      var sprite = Sprite('dummy').addChildTo(_this.ds);
      sprite.x = _this.x + 50 * 0.7 * i;
      sprite.y = _this.y;
      sprite.alpha = 0;
      _this.sprites.push(sprite);
    });
  }

  redraw(time) {
    var h = Math.floor(time / 60 / 60);
    var m = Math.floor(time / 60) % 60;
    var s = time % 60;

    var time_str = ('00' + h).slice(-2) + 'c' + ('00' + m).slice(-2) + 'c' + ('00' + s).slice(-2);
    var digits = String(time_str).split('');

    _.each(this.sprites, function (sprite, i) {
      if (i < digits.length) {
        var digit = digits[i];
        sprite.setImage('fude_n_' + digit);
        sprite.width = 50;
        sprite.height = 50;
      } else {
        sprite.setImage('dummy');
      }

      sprite.tweener.fadeIn(100).play();
    });
  }

  remove() {
    _.each(this.sprites, function (sprite) {
      sprite.remove();
    });

    this.sprites = [];
  }
};

var BetTimesSprites = class {
  constructor(ds, x, y) {
    this.ds = ds;
    this.x = x;
    this.y = y;

    this.calc();
  }

  calc() {
    var _this = this;

    this.sprites = [];
    _.times(8, function (i) {
      var sprite = Sprite('dummy').addChildTo(_this.ds);
      sprite.x = _this.x + 50 * 0.7 * i;
      sprite.y = _this.y;
      sprite.alpha = 0;
      _this.sprites.push(sprite);
    });
  }

  redraw(bet_times) {
    var digits = String(bet_times).split('');

    _.each(this.sprites, function (sprite, i) {
      if (i < digits.length) {
        var digit = digits[i];
        sprite.setImage('fude_n_' + digit);
        sprite.width = 50;
        sprite.height = 50;
      } else {
        sprite.setImage('dummy');
      }

      sprite.tweener.fadeIn(100).play();
    });
  }

  remove() {
    _.each(this.sprites, function (sprite) {
      sprite.remove();
    });

    this.sprites = [];
  }
};

var ResultSprites = class {
  constructor(ds) {
    this.ds = ds;

    this.calc();
  }

  calc() {
    var _this = this;

    this.bg_sprite = Sprite('bg_result').addChildTo(this.ds);
    this.bg_sprite.x = 320;
    this.bg_sprite.y = 480;
    this.bg_sprite.alpha = 0;

    // this.text_sprites = [];
    // var sprite1 = Sprite('text_result').addChildTo(this.ds);
    // this.sprite1.x = 170;
    // this.sprite1.y = 750;
    // this.sprite1.alpha = 0;
    // this.text_sprites.push(sprite1);

    // var sprite2 = Sprite('text_game').addChildTo(this.ds);
    // this.sprite2.x = 170;
    // this.sprite2.y = 750;
    // this.sprite2.alpha = 0;
    // this.text_sprites.push(sprite2);

    this.button_sprite_change_rule = Sprite('button_change_rule').addChildTo(_this.ds);
    this.button_sprite_change_rule.x = 170;
    this.button_sprite_change_rule.y = 750;
    this.button_sprite_change_rule.alpha = 0;
    this.button_sprite_change_rule.setInteractive(true);

    this.button_sprite_change_rule.onclick = function () {
      if (_this.ds.mode !== 'shown_results') {
        return;
      }

      _g.stopAllBGM();

      _this.ds.exit({
        back: true,
      });
    };

    this.button_sprite_change_rule.onpointover = function () {
      if (_this.ds.mode !== 'shown_results') {
        return;
      }

      _this.button_sprite_change_rule.setImage('button_change_rule_hover');
      _g.playSound('voice_back');
    };

    this.button_sprite_change_rule.onpointout = function () {
      _this.button_sprite_change_rule.setImage('button_change_rule');
    };

    this.button_sprite_one_more = Sprite('button_one_more').addChildTo(_this.ds);
    this.button_sprite_one_more.x = 320;
    this.button_sprite_one_more.y = 750;
    this.button_sprite_one_more.alpha = 0;
    this.button_sprite_one_more.setInteractive(true);

    this.button_sprite_one_more.onclick = function () {
      if (_this.ds.mode !== 'shown_results') {
        return;
      }

      _g.stopAllBGM();

      _this.ds.exit({
        rule: _this.ds.rule,
      });
    };

    this.button_sprite_one_more.onpointover = function () {
      if (_this.ds.mode !== 'shown_results') {
        return;
      }

      _this.button_sprite_one_more.setImage('button_one_more_hover');
      _g.playSound('voice_one_more');
    };

    this.button_sprite_one_more.onpointout = function () {
      _this.button_sprite_one_more.setImage('button_one_more');
    };

    this.button_sprite_send = Sprite('button_send').addChildTo(_this.ds);
    this.button_sprite_send.x = 470;
    this.button_sprite_send.y = 750;
    this.button_sprite_send.alpha = 0;
    this.button_sprite_send.setInteractive(true);

    this.button_sprite_send.onclick = function () {
      if (_this.ds.mode !== 'shown_results') {
        return;
      }

      // TODO:名前入力
      // TODO:send

      _g.stopAllBGM();

      _this.ds.exit({
        rule: _this.ds.rule,
      });
    };

    this.button_sprite_send.onpointover = function () {
      if (_this.ds.mode !== 'shown_results') {
        return;
      }

      _this.button_sprite_send.setImage('button_send_hover');
      _g.playSound('voice_ok');
    };

    this.button_sprite_send.onpointout = function () {
      _this.button_sprite_send.setImage('button_send');
    };

    this.button_sprite_ranking = Sprite('button_ranking').addChildTo(_this.ds);
    this.button_sprite_ranking.x = 470;
    this.button_sprite_ranking.y = 680;
    this.button_sprite_ranking.alpha = 0;
    this.button_sprite_ranking.setInteractive(true);

    this.button_sprite_ranking.onclick = function () {
      if (_this.ds.mode !== 'shown_results') {
        return;
      }

      window.open('https://llll-ll.com', '_blank');
    };

    this.button_sprite_ranking.onpointover = function () {
      if (_this.ds.mode !== 'shown_results') {
        return;
      }

      _this.button_sprite_ranking.setImage('button_ranking_hover');
      _g.playSound('voice_ranking');
    };

    this.button_sprite_ranking.onpointout = function () {
      _this.button_sprite_ranking.setImage('button_ranking');
    };
  }

  redraw(rule, elapsed_time, bet_times, total_score, stats, is_high_score) {
    this.bg_sprite.alpha = 0;



    // this.rule = rule;
    // this.elapsed_time = elapsed_time;
    // this.bet_times = bet_times;
    // this.total_score = total_score;
    // this.stats = stats;
    // this.is_high_score = is_high_score;

    this.show(is_high_score);
  }

  show(is_high_score) {
    if (this.bg_sprite) {
      this.bg_sprite.tweener.fadeIn(200).play();
    }

    _.each(this.sprite_group, function (sprites) {
      _.each(sprites, function (sprite) {
        sprite.tweener.fadeIn(200).play();
      });
    });

    if (this.button_sprite_change_rule) {
      this.button_sprite_change_rule.tweener.fadeIn(200).play();
    }

    if (this.button_sprite_one_more) {
      this.button_sprite_one_more.tweener.fadeIn(200).play();
    }

    if (this.button_sprite_send) {
      this.button_sprite_send.tweener.fadeIn(200).play();
    }

    if (this.button_sprite_ranking) {
      this.button_sprite_ranking.tweener.fadeIn(200).play();
    }

    _g.playSound('voice_result');
    setTimeout(function () {
      if (is_high_score) {
        _g.playSound('voice_result_high_score');
      } else {
        _g.playSound('voice_result_negi');
      }
    }, 1500);
  }

  hide() {
    if (this.bg_sprite) {
      this.bg_sprite.tweener.fadeOut(50).play();
    }

    _.each(this.sprite_group, function (sprites) {
      _.each(sprites, function (sprite) {
        sprite.tweener.fadeOut(50).play();
      });
    });

    if (this.button_sprite_change_rule) {
      this.button_sprite_change_rule.tweener.fadeOut(50).play();
    }

    if (this.button_sprite_one_more) {
      this.button_sprite_one_more.tweener.fadeOut(50).play();
    }

    if (this.button_sprite_send) {
      this.button_sprite_send.tweener.fadeOut(50).play();
    }

    if (this.button_sprite_ranking) {
      this.button_sprite_ranking.tweener.fadeOut(50).play();
    }
  }

  remove() {
    if (this.bg_sprite) {
      this.bg_sprite.remove();
    }

    _.each(this.sprite_group, function (sprites) {
      _.each(sprites, function (sprite) {
        sprite.remove();
      });
    });

    this.sprite_group = [];

    if (this.button_sprite_change_rule) {
      this.button_sprite_change_rule.remove();
    }

    if (this.button_sprite_one_more) {
      this.button_sprite_one_more.remove();
    }

    if (this.button_sprite_send) {
      this.button_sprite_send.remove();
    }

    if (this.button_sprite_ranking) {
      this.button_sprite_ranking.remove();
    }
  }
};
