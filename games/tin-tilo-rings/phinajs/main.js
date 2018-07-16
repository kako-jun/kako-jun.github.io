
var _g = this;
var high_score = {
  rule_1_2943: null,
  rule_1_8390: null,
  rule_1_3765: null,
  rule_2_2943: null,
  rule_2_8390: null,
  rule_2_3765: null,
  rule_3_0409: null,
  rule_3_2009: null,
  rule_3_6819: null,
};

phina.define('MainScene', {
  superClass: 'DisplayScene',
  init: function (param) {
    var _this = this;
    this.superInit();

    this.backgroundColor = '#732121';

    this.rule = param.rule;

    this.mode = 'first';
    this.elapsed_time = 0;
    this.bet_times = 0;
    this.total_score = 0;
    this.stats = {
      max_combo: 0,
      max_gain: 0,
      roll: {
        pinzoro: 0,
        arashikabu: 0,
        kemono: 0,
        triple_seven: 0,
        zorome: 0,
        shigoro: 0,
        hifumi: 0,
        pinbasami: 0,
        me: 0,
        pin: 0,
        nizou: 0,
        santa: 0,
        yotsuya: 0,
        goke: 0,
        roppou: 0,
        shichiken: 0,
        oicho: 0,
        kabu: 0,
        buta: 0,
      },
      zone: {
        bullet_time: 0,
        revolution: 0,
      },
      triple_seven: {
        all_1: 0,
        all_6: 0,
        sort: 0,
        rollback: 0,
      },
      egg: {
        ambulance: 0,
        time_signal: 0,
        pink_ribbon: 0,
      },
    };

    this.prevent_click = false;
    this.key_wait = false;

    this.speed = 4;
    this.speed_bk = this.speed;

    this.i_combo = 0;
    this.i_score_1000 = 0;
    this.i_second_1 = 0;
    this.i_minute_1 = 0;

    this.reserve_change_BGM = false;
    this.reserve_start_zone = false;
    this.reserve_finish_zone = false;
    this.zone_seconds = 0;
    this.bullet_time = false;
    this.revolution = false;
    this.rollback_stock = 0;

    this.backgroundSprites = new BackgroundSprites(this);
    this.kanjiSprites = new KanjiSprites(this);
    this.monSprites = new MonSprites(this);
    this.effectSprites = new EffectSprites(this);
    this.linesSprites = new LinesSprites(this);
    this.guidesSprites = new GuidesSprites(this, 155, 382);
    this.modsSprites = new ModsSprites(this, 155, 382);
    this.ringSprites1 = new RingSprites(this, 100, 300, 'left');
    this.ringSprites2 = new RingSprites(this, 142, 300, 'center');
    this.ringSprites3 = new RingSprites(this, 184, 300, 'right');
    this.alphabetsSprites = new AlphabetsSprites(this, 335, 300);
    this.scoresSprites = new ScoresSprites(this, 520, 300);
    this.comboSprites = new ComboSprites(this, 350, 783);
    this.currentScoreSprites = new CurrentScoreSprites(this, 645, 790);
    this.totalScoreSprites = new TotalScoreSprites(this, 245, 925);
    this.timeSprites = new TimeSprites(this, 245, 17);
    this.betTimesSprites = new BetTimesSprites(this, 245, 60);
    this.infoSprite = new InfoSprite(this, 606, 30);
    this.backSprite = new BackSprite(this, 34, 30);

    this.backgroundSprites.change(0, this.rule);
    this.kanjiSprites.change();
    this.monSprites.change();

    setTimeout(function () {
      _this.changeMode();
    }, 1000);
  },

  update: function (app) {
    var _this = this;

    switch (this.mode) {
      case 'first':
      case 'ready':
      case 'shown_results':
        break;
      default:
        this.elapsed_time += app.deltaTime;

        var second = Math.floor(this.elapsed_time / 1000);
        var i_second_1 = Math.floor(second);
        if (i_second_1 !== this.i_second_1) {
          this.i_second_1 = i_second_1;
          this.timeSprites.redraw(Rule.getTime(this.rule, this.i_second_1));

          if (this.bullet_time || this.revolution) {
            if (this.zone_seconds > 0) {
              this.zone_seconds--;

              if (this.zone_seconds <= 0) {
                this.reserve_finish_zone = true;
              }
            }
          }
        }

        var i_minute_1 = Math.floor(second / 60);
        if (i_minute_1 > this.i_minute_1) {
          this.i_minute_1 = i_minute_1;
          this.reserve_change_BGM = true;
        }
        break;
    }

    var key = app.keyboard;
    if (key.getKey('space')) {
      if (!this.key_wait) {
        this.key_wait = true;
        setTimeout(function () {
          _this.key_wait = false;
        }, 200);

        this.changeMode();
      }
    }

    switch (this.mode) {
      case 'first':
        break;
      case 'ready':
        break;
      case 'rotate_3':
        this.ringSprites1.rotate(this.speed);
        this.ringSprites2.rotate(this.speed + 1);
        this.ringSprites3.rotate(this.speed + 2);
        break;
      case 'braking_3':
        // this.ringSprites1.brake(this.speed);
        this.ringSprites2.rotate(this.speed + 1);
        this.ringSprites3.rotate(this.speed + 2);
        break;
      case 'braked_3':
        break;
      case 'rotate_2':
        this.ringSprites2.rotate(this.speed);
        this.ringSprites3.rotate(this.speed + 1);
        break;
      case 'braking_2':
        // this.ringSprites2.brake(this.speed);
        this.ringSprites3.rotate(this.speed + 1);
        break;
      case 'braked_2':
        break;
      case 'rotate_1':
        this.ringSprites3.rotate(this.speed);
        break;
      case 'braking_1':
        // this.ringSprites3.brake(this.speed);
        break;
      case 'braked_1':
        break;
      case 'showing_mods':
        break;
      case 'showing_scores':
        break;
      case 'shown_scores':
        break;
      case 'shown_results':
        break;
    }
  },

  onclick: function () {
    if (this.prevent_click) {
      return;
    }

    switch (this.mode) {
      case 'first':
      case 'ready':
      case 'braking_3':
      case 'braked_3':
      case 'braking_2':
      case 'braked_2':
      case 'braking_1':
      case 'braked_1':
      case 'showing_mods':
      case 'showing_scores':
      case 'shown_results':
        return;
    }

    this.changeMode();
  },

  changeMode: function () {
    var _this = this;

    switch (this.mode) {
      case 'first':
        this.infoSprite.show();
        this.backSprite.show();
        this.linesSprites.show();

        var ring1_ns = Rule.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        var ring2_ns = Rule.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        var ring3_ns = Rule.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        this.ringSprites1.redraw(ring1_ns, 'white');
        this.ringSprites2.redraw(ring2_ns, 'white');
        this.ringSprites3.redraw(ring3_ns, 'white');

        this.totalScoreSprites.redraw(this.total_score);
        this.timeSprites.redraw(Rule.getTime(this.rule, this.i_second_1));

        switch (this.rule) {
          case 'rule_2_2943':
          case 'rule_2_8390':
          case 'rule_2_37654':
            this.betTimesSprites.redraw(this.bet_times);
            break;
        }

        setTimeout(function () {
          _g.playSound('voice_ready_1');
          setTimeout(function () {
            _g.playSound('voice_ready_2');
            setTimeout(function () {
              _g.playSound('voice_ready_3');
              setTimeout(function () {
                _this.mode = 'ready';
                _this.changeMode();
              }, 700);
            }, 1300);
          }, 1700);
        }, 500);
        break;
      case 'ready':
        this.elapsed_time = 0;
        _g.playBGM('bgm_1');

        this.ringSprites1.changeOpacity('normal');
        this.ringSprites2.changeOpacity('light');
        this.ringSprites3.changeOpacity('light');

        _g.playBGM('se_rotate');
        this.bet_times++;
        switch (this.rule) {
          case 'rule_2_2943':
          case 'rule_2_8390':
          case 'rule_2_37654':
            this.betTimesSprites.redraw(this.bet_times);
            break;
        }

        this.mode = 'rotate_3';
        break;
      case 'rotate_3':
        this.mode = 'braking_3';
        this.changeMode();
        break;
      case 'braking_3':
        this.ringSprites1.brake(this.speed, function () {
          _this.ringSprites1.stop(_this.bullet_time || _this.revolution);
          _this.mode = 'braked_3';
          _this.changeMode();
        });
        break;
      case 'braked_3':
        this.ringSprites1.changeOpacity('normal');
        this.ringSprites2.changeOpacity('normal');
        this.ringSprites3.changeOpacity('light');
        this.mode = 'rotate_2';
        break;
      case 'rotate_2':
        this.mode = 'braking_2';
        this.changeMode();
        break;
      case 'braking_2':
        this.ringSprites2.brake(this.speed, function () {
          _this.ringSprites2.stop(_this.bullet_time || _this.revolution);
          _this.mode = 'braked_2';
          _this.changeMode();
        });
        break;
      case 'braked_2':
        this.ringSprites1.changeOpacity('normal');
        this.ringSprites2.changeOpacity('normal');
        this.ringSprites3.changeOpacity('normal');

        var reaches = Rule.getReaches(this.ringSprites1.eyes, this.ringSprites2.eyes);
        _.each(reaches, function (reach) {
          _this.guidesSprites.show(reach);
        });

        if (reaches.length > 0) {
          _g.playSound('voice_reach');
        }

        if (!this.bullet_time && !this.revolution) {
          var zoneReaches = Rule.getZoneReaches(this.ringSprites1.eyes, this.ringSprites2.eyes);
          if (zoneReaches.length > 0) {
            _g.playSound('se_zone_reach');
          }
        }

        this.mode = 'rotate_1';
        break;
      case 'rotate_1':
        _g.stopBGM('se_rotate');
        this.mode = 'braking_1';
        this.changeMode();
        break;
      case 'braking_1':
        this.ringSprites3.brake(this.speed, function () {
          _this.ringSprites3.stop(_this.bullet_time || _this.revolution);
          _this.mode = 'braked_1';
          _this.changeMode();
        });
        break;
      case 'braked_1':
        this.ringSprites1.changeOpacity('normal');
        this.ringSprites2.changeOpacity('normal');
        this.ringSprites3.changeOpacity('normal');

        this.guidesSprites.hide();

        this.tuples = Rule.calcTuples(this.ringSprites1.eyes, this.ringSprites2.eyes, this.ringSprites3.eyes);

        // if (!this.bullet_time && !this.revolution) {
        if (this.zone_seconds <= 0) {
          var zoneRolls = Rule.getZoneRolls(this.tuples);

          if (zoneRolls.length > 0) {
            this.reserve_start_zone = true;
            // this.reserve_finish_zone = false;
          }

          _.each(zoneRolls, function (roll) {
            _g.playSound('voice_zone_' + roll);
          });
        }

        if (Rule.isAmbulance(this.tuples)) {
          this.elapsed_time -= 10 * 1000;
          _g.playSound('se_ambulance');
        }

        this.mods = Rule.calcMods(this.tuples);
        this.mode = 'showing_mods';

        setTimeout(function () {
          _this.guidesSprites.show('mod');
          _this.modsSprites.redraw(_this.mods);
          _this.alphabetsSprites.redraw(_this.tuples, _this.mods);

          setTimeout(function () {
            _this.scores = Rule.calcScores(_this.tuples, _this.mods, _this.revolution);

            var rollback = false;
            if (_this.rollback_stock > 0) {
              var reaches = Rule.getReaches(_this.ringSprites1.eyes, _this.ringSprites2.eyes);
              if (reaches.length > 0) {
                if (!Rule.isMultiWon(_this.scores)) {
                  _this.guidesSprites.hide();
                  _this.modsSprites.hide();
                  _this.alphabetsSprites.hide();

                  _.each(reaches, function (reach) {
                    _this.guidesSprites.show(reach);
                  });

                  rollback = true;
                }
              }
            }

            if (rollback) {
              _this.rollback_stock--;

              if (_this.rollback_stock === 0) {
                var ns = _this.ringSprites3.ns;
                var color = _this.ringSprites2.color;
                _this.ringSprites3.redraw(ns, color);
              }

              _this.effectSprites.show('triple_seven');
              setTimeout(function () {
                _this.effectSprites.hide('triple_seven');
              }, 1000);

              _g.playSound('voice_rollback');
              _this.mode = 'rotate_1';
            } else {
              _this.current_scores = Rule.calcCurrentScores(_this.scores);

              if (_this.current_scores[2] >= 100) {
                _this.i_combo++;
                if (_this.i_combo > 10) {
                  _this.i_combo = 10;
                }
              } else {
                _this.i_combo = 0;
              }

              _this.current_scores = Rule.addComboScore(_this.current_scores, _this.i_combo);
              _this.total_score = Rule.calcTotalScore(_this.total_score, _this.current_scores);

              _this.mode = 'showing_scores';
              _this.scoresSprites.redraw(_this.scores, _this.revolution);

              if (_this.i_combo >= 2) {
                _this.comboSprites.redraw(_this.i_combo);
              }

              _this.currentScoreSprites.redraw(_this.current_scores);

              var wait = 1000;
              if (_this.current_scores[3] !== _this.current_scores[2]) {
                wait = 1500;
              }

              setTimeout(function () {
                _this.totalScoreSprites.redraw(_this.total_score);
                _this.mode = 'shown_scores';
              }, wait);
            }
          }, 1400);
        }, 300);
        break;
      case 'showing_mods':
        break;
      case 'showing_scores':
        break;
      case 'shown_scores':
        if (Rule.isAchieved(this.rule, this.elapsed_time, this.total_score)) {
          _g.stopAllBGM();
          _g.playBGM('bgm_result');

          var is_high_score = false;
          switch (this.rule) {
            case 'rule_1_2943':
            case 'rule_1_8390':
            case 'rule_1_37654':
              if (_g.high_score[this.rule] === null || this.elapsed_time < _g.high_score[this.rule]) {
                is_high_score = true;
                _g.high_score[this.rule] = this.elapsed_time;
              }
              break;
            case 'rule_2_2943':
            case 'rule_2_8390':
            case 'rule_2_37654':
              if (_g.high_score[this.rule] === null || this.bet_times < _g.high_score[this.rule]) {
                is_high_score = true;
                _g.high_score[this.rule] = this.bet_times;
              }
              break;
            case 'rule_3_0409':
            case 'rule_3_2009':
            case 'rule_3_6819':
              if (_g.high_score[this.rule] === null || this.total_score > _g.high_score[this.rule]) {
                is_high_score = true;
                _g.high_score[this.rule] = this.total_score;
              }
              break;
          }

          this.resultSprites = new ResultSprites(this);
          this.resultSprites.redraw(this.rule, this.elapsed_time, this.bet_times, this.total_score, this.stats, is_high_score);

          this.mode = 'shown_results';
        } else {
          this.guidesSprites.hide();
          this.modsSprites.hide();
          this.alphabetsSprites.hide();
          this.scoresSprites.hide();
          this.comboSprites.hide();
          this.currentScoreSprites.hide();

          var current_score = this.current_scores[3];

          if (!this.bullet_time) {
            var speed_bk = this.speed;
            this.speed = Rule.getNextSpeed(this.speed, current_score);

            if (this.speed > speed_bk) {
              _g.playSound('se_speed_up');
            } else if (this.speed < speed_bk) {
              _g.playSound('se_speed_down');
            }
          }

          if (this.reserve_finish_zone) {
            this.reserve_finish_zone = false;
            this.zone_seconds = 0;

            if (this.bullet_time) {
              this.speed = this.speed_bk;
              _g.playSound('se_speed_up');
            }

            if (this.revolution) {
              _g.playSound('se_finish_revolution');
            }

            this.bullet_time = false;
            this.revolution = false;
            this.effectSprites.hide();
          }

          if (this.reserve_start_zone) {
            this.reserve_start_zone = false;
            this.zone_seconds = 30;

            if (_.random(0, 1) > 0) {
              this.bullet_time = true;
              this.speed_bk = this.speed;
              this.speed = 2;
              this.effectSprites.show('bullet_time');
              _g.playSound('se_start_bullet_time');
              _g.playSound('voice_bullet_time');
            } else {
              this.revolution = true;
              this.effectSprites.show('revolution');
              _g.playSound('se_start_revolution');
              _g.playSound('voice_revolution');
            }
          }

          var color = 'white';
          if (Rule.isPinkRibbon(this.scores)) {
            color = 'pink';
          }

          var ring1_ns = Rule.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
          var ring2_ns = Rule.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
          var ring3_ns = Rule.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
          if (Rule.isTripleSeven(this.scores)) {
            this.effectSprites.show('triple_seven');
            setTimeout(function () {
              _this.effectSprites.hide('triple_seven');
            }, 1000);

            _g.playSound('voice_triple_seven');

            var r = _.random(0, 99);
            if (r < 5) {
              // 5%
              ring1_ns = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
              ring2_ns = ring1_ns;
              ring3_ns = ring1_ns;
            } else if (r < 10) {
              // 5%
              ring1_ns = [6, 6, 6, 6, 6, 6, 6, 6, 6, 6];
              ring2_ns = ring1_ns;
              ring3_ns = ring1_ns;
            } else if (r < 15) {
              // 5%
              ring1_ns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
              ring2_ns = ring1_ns;
              ring3_ns = ring1_ns;
            } else if (r < 20) {
              // 5%
              ring1_ns = Rule.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
              ring2_ns = ring1_ns;
              ring3_ns = ring1_ns;
            } else if (r < 30) {
              // 10%
              ring1_ns = _.union(Rule.shuffle([0, 1, 2, 3, 4, 5, 6]), [7, 8, 9]);
              ring2_ns = _.union(Rule.shuffle([0, 1, 2, 3, 4, 5, 6]), [7, 8, 9]);
              ring3_ns = _.union(Rule.shuffle([0, 1, 2, 3, 4, 5, 6]), [7, 8, 9]);
            } else if (r < 40) {
              // 10%
              ring1_ns = Rule.shuffle([1, 2, 3, 1, 2, 3, 1, 2, 3, 1]);
              ring2_ns = Rule.shuffle([1, 2, 3, 1, 2, 3, 1, 2, 3, 1]);
              ring3_ns = Rule.shuffle([1, 2, 3, 1, 2, 3, 1, 2, 3, 1]);
            } else if (r < 50) {
              // 10%
              ring1_ns = Rule.shuffle([4, 5, 6, 4, 5, 6, 4, 5, 6, 6]);
              ring2_ns = Rule.shuffle([4, 5, 6, 4, 5, 6, 4, 5, 6, 6]);
              ring3_ns = Rule.shuffle([4, 5, 6, 4, 5, 6, 4, 5, 6, 6]);
            } else {
              // 50%
              this.rollback_stock++;
              if (this.rollback_stock > 3) {
                this.rollback_stock = 1;
              }
            }
          }

          this.ringSprites1.redraw(ring1_ns, color);
          this.ringSprites2.redraw(ring2_ns, color);

          if (this.rollback_stock === 0) {
            this.ringSprites3.redraw(ring3_ns, color);
          } else {
            this.ringSprites3.redraw(ring3_ns, 'yellow');
          }

          this.ringSprites1.changeOpacity('normal');
          this.ringSprites2.changeOpacity('light');
          this.ringSprites3.changeOpacity('light');

          this.ringSprites1.changeRingPattern();
          this.ringSprites2.changeRingPattern();
          this.ringSprites3.changeRingPattern();

          var i_score_1000 = Math.floor(this.total_score / 1000);
          if (i_score_1000 !== this.i_score_1000) {
            this.i_score_1000 = i_score_1000;
            if (this.i_score_1000 < 0) {
              this.i_score_1000 = 0;
            }

            this.backgroundSprites.change(this.i_score_1000, this.rule);
          }

          if (this.reserve_change_BGM) {
            this.reserve_change_BGM = false;
            _g.changeBGM();
          }

          SoundManager.playMusic('se_start', null, false);
          _g.playBGM('se_rotate');
          this.bet_times++;
          switch (this.rule) {
            case 'rule_2_2943':
            case 'rule_2_8390':
            case 'rule_2_37654':
              this.betTimesSprites.redraw(this.bet_times);
              break;
          }

          this.mode = 'rotate_3';
        }
        break;
      case 'shown_results':
        break;
    }
  },
});
