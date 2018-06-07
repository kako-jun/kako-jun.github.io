
[macro name="kanim_b"]
  [keyframe name=background_anime_1]
  [frame p=25% x=-320 y=10 rotate=-2deg]
  [frame p=50% x=0 y=0 rotate=0deg]
  [frame p=75% x=320 y=10 rotate=2deg]
  [frame p=100% x=0 y=0 rotate=0deg]
  [endkeyframe]

  [kanim layer=base keyframe=background_anime_1 time=100000 easing=linear count=infinite]
[endmacro]

[macro name="kanim_s"]
  [keyframe name=stand_anime_1]
  [frame p=0.2% x=0 y=0 rotate=0deg scale=1]
  [frame p=25% x=100 y=0 rotate=-30deg scale=2]
  [frame p=50% x=50 y=0 rotate=0deg scale=1]
  [frame p=75% x=-100 y=0 rotate=30deg scale=2]
  [frame p=100% x=0 y=0 rotate=0deg scale=1]
  [endkeyframe]

  [kanim layer=0 keyframe=stand_anime_1 time=400000 easing=linear count=infinite]
[endmacro]

[macro name="chara_show_b"]
  ;[filter layer=base hue=200]
  [filter layer=base sepia=100 hue=200 brightness=50]
  [chara_show name=background layer=base]
  ; [chara_mod name=background storage="chara/1/black.png"]
  [kanim_b]
[endmacro]

[macro name="chara_mod_b"]
  ;[tb_hide_message_window]
  [chara_mod name=background storage=%storage cross=true time=2500]
  ;[image layer=base page=back storage=%storage]
  ;[trans layer=base method=zoomInUp time=2000]
  ;[tb_show_message_window]
[endmacro]

[macro name="chara_hide_b"]
  ; [chara_hide name=background time=3000]
  [chara_mod_b storage="chara/1/black.png"]
[endmacro]

[macro name="chara_show_s"]
  [chara_show name=stand width=640 left=50]
  ; [chara_mod name=stand storage="chara/2/a.png"]
  [kanim_s]
[endmacro]

[macro name="chara_mod_s"]
  [layopt layer="message0" visible="false"]
  [chara_mod name=stand storage=%storage cross=true time=1000]
  ;[image layer=0 page=back storage=%storage]
  ;[trans layer=0 method=zoomInUp time=500]
  [chara_show_s name=stand]
  [layopt layer="message0" visible="true"]

  [if exp="mp.pm.storage.indexOf('kako') != -1"]
    [change_name_color color="salmon"]
    [elsif exp="mp.pm.storage.indexOf('tomo') != -1"]
    [change_name_color color="gold"]
  [else]
    [change_name_color color="white"]
  [endif]
[endmacro]

[macro name="chara_hide_s"]
  [layopt layer="message0" visible="false"]
  [chara_hide name=stand time=1500]
  ; [chara_mod_s storage="chara/2/a.png"]
[endmacro]

[macro name="p2"]
  [tb_start_text mode=4 ]
  [r][r]
  [font color=gray]¶[resetfont][p]
  [_tb_end_text]

  [cm]
[endmacro]

[macro name="p_h"]
  [show_hanasu_button storage=%storage target=%target]

  [tb_start_text mode=4 ]
  [r][r]
  [font color=gray]¶[resetfont][p]
  [_tb_end_text]

  [cm]
  [hide_hanasu_button]
  [jump storage=%storage target=%target_else]
[endmacro]

[macro name="start_mono"]
  [nowait]
  [font color=gray]︵︵︵︵︵︵︵︵︵︵︵︵︵︵︵︵[resetfont]
  [r]
  [r]
  [endnowait]
[endmacro]

[macro name="end_mono"]
  [nowait]
  [r]
  [r]
  [font color=gray]︶︶︶︶︶︶︶︶︶︶︶︶︶︶︶︶[resetfont]
  [endnowait]
[endmacro]

[macro name="playbgm2"]
  ; [fadeoutbgm2]
  [playbgm storage=%storage fadein=true time=3000 loop=smooth]
[endmacro]

[macro name="fadeoutbgm2"]
  [fadeoutbgm time=2000]
  [wait time=2000]
[endmacro]

[macro name="playse2"]
  [playse storage=%storage]
[endmacro]

[macro name="show_ubiquitous_buttons"]
  [button name="fullscreen" role="fullscreen" graphic="button/fullscreen2.png" enterimg="button/fullscreen_hover.png" enterse="se_bubble_2.ogg" clickse="se_piano.ogg" x=531 y=0 fix=true]
  [button name="shot" role="sleepgame" storage="my_shot.ks" graphic="button/shot.png" enterimg="button/shot_hover.png" enterse="se_bubble_2.ogg" clickse="se_shot.ogg" x=205 y=850 fix=true]
[endmacro]

[macro name="show_menu_button"]
  ; [button name="role_button" role="menu" graphic="button/back.png" enterimg="button/back_hover.png" enterse="se_bubble_2.ogg" clickse="se_ice.ogg" x=0 y=0]
  [button name="menu" role="sleepgame" storage="system_menu.ks" graphic="button/back.png" enterimg="button/back_hover.png" enterse="se_bubble_2.ogg" clickse="se_ice.ogg" x=0 y=0 fix=true]
[endmacro]

[macro name="hide_menu_button"]
  [clearfix name="menu"]
[endmacro]

[macro name="show_hanasu_button"]
  [playse2 storage="se_bubble_1.ogg"]
  [button name="hanasu" storage=%storage target=%target graphic="button/hanasu_hover.png" enterimg="button/hanasu_hover2.png" enterse="se_bubble_2.ogg" clickse="se_piano.ogg" x=421 y=740 fix=true]
  [button name="hanasu" storage=%storage target=%target graphic="faces/kako_face2.gif" enterse="se_bubble_2.ogg" clickse="se_piano.ogg" x=536 y=795 fix=true]
[endmacro]

[macro name="hide_hanasu_button"]
  [clearfix name="hanasu"]
[endmacro]

[macro name="start_hanasu"]
  ; [hide_menu_button]
  [hide_hanasu_button]
[endmacro]

[macro name="stop_hanasu"]
  [layopt layer="message0" visible="false"]
  ;[chara_hide_s]
  ; [show_menu_button]
[endmacro]

[macro name="mono"]
  [change_name_color color=darkgray]
[endmacro]

[macro name="change_name_color"]
  [iscript]
  $(".chara_name_area").css("color", mp.color);
  [endscript]
[endmacro]

[macro name="shot"]
  [iscript]
  ; $(".shot").hide();

  TYRANO.kag.menu.snapSave("", function () {
    ; $(".shot").show();

    var date = new Date();
    var format = "YYYY-MM-DD_hh-mm-ss";
    format = format.replace(/YYYY/g, date.getFullYear());
    format = format.replace(/MM/g, ("0" + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/DD/g, ("0" + date.getDate()).slice(-2));
    format = format.replace(/hh/g, ("0" + date.getHours()).slice(-2));
    format = format.replace(/mm/g, ("0" + date.getMinutes()).slice(-2));
    format = format.replace(/ss/g, ("0" + date.getSeconds()).slice(-2));
    var filename = "screenshot_" + sf.my.info.current_scene + "_" + format + ".jpg";

    if ($.isNWJS()) {
      var isopen   = false;
      var savedir  = $.getProcessPath();
      var fullpath = savedir + "/screenshots/" + filename;
      var img_code = TYRANO.kag.menu.snap.img_data.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
      require("fs").writeFile(fullpath, img_code, "base64", function () {
        if (isopen) {
          var gui = require("nw.gui");
          gui.Shell.showItemInFolder(savedir);
        }
      });
    } else {
      var type = "image/jpeg";
      var bin = atob(TYRANO.kag.menu.snap.img_data.split(",")[1]);
      var buffer = new Uint8Array(bin.length);
      for (var i = 0; i < bin.length; i++) {
        buffer[i] = bin.charCodeAt(i);
      }

      var blob = new Blob([buffer.buffer], {type: type});
      if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(blob, filename);
      }
      else {
        var a = document.createElement("a");
        a.download = filename;
        a.href = window.URL.createObjectURL(blob);
        a.click();
      }
    }
  }, "true");
  [endscript]
[endmacro]

[macro name="random_loading"]
  [iscript]
  var id = Math.floor(Math.random() * 42) + 1;
  tf.id = "bg_loading_" + id + ".png";
  [endscript]

  [bg storage="&tf.id" method=fadeInLeft cross=true time=420]
[endmacro]

[macro name="ink"]
  [iscript]
  var id = Math.floor(Math.random() * 4) + 1;
  tf.id = "ink/ink_" + id + ".png";
  [endscript]

  [image layer=0 folder="image" storage="&tf.id" time=420]
[endmacro]

[macro name="intermission"]
  [iscript]
  tf.series = "title_logos/title_logo_" + mp.series + ".png";
  tf.num_of_noise = Number(mp.num_of_noise);
  [endscript]

  [hide_menu_button]
  [chara_hide_s]
  [ink]
  [wait time=2000]
  [chara_hide_b]

  ;ロゴを表示
  [image layer=0 folder="image" storage="&tf.series" time=2000 x=20 y=650]
  [wait time=1000]
  [ptext layer=0 text="つづく" face="" size=30 color="0xf8f8f8" time=1000 x=520 y=760]
  [wait time=1000]
  [freeimage layer=0 time=4200]

  ;初クリアの場合

  ;ノイズを手に入れた
  [playse2 storage="se_voice_uchu.ogg" volume="42"]

  [if exp="tf.num_of_noise >= 1"]
    [ptext layer=0 text="ノイズを 1つ もろた" face="" size=30 color="0xf8f8d8" time=100 align="center" width="620px" x=0 y=250]
  [endif]

  [if exp="tf.num_of_noise >= 2"]
    [wait time=1000]
    [ptext layer=0 text="ノイズを 1つ もろた" face="" size=30 color="0xf8f8b8" time=100 align="center" width="600px" x=20 y=350]
  [endif]

  [if exp="tf.num_of_noise >= 3"]
    [wait time=1000]
    [ptext layer=0 text="ノイズを 1つ もろた" face="" size=30 color="0xf8f898" time=100 align="center" width="580px" x=40 y=450]
  [endif]

  [wait time=4200]

  [iscript]
  sf.my.info.current_scene = "";
  [endscript]
  [jump storage="system_menu.ks"]
[endmacro]

[macro name="start_poem"]
  [iscript]
  tf.cloud = "bg_cloud_" + mp.cloud + ".png";
  [endscript]

  [wait time=2000]
  [playbgm2 storage="eternal_three_or.ogg"]

  [bg storage="&tf.cloud" method=fadeInLeft cross=true time=4200]
  ; [chara_mod_b storage="chara/1/white.png"]

  [start_snow]
[endmacro]

[macro name="poem"]
  [if exp="mp.last === 'true'"]
    [ptext name="poem" layer=0 text=%text1 face="" size=30 color="0xf8f8f8" edge=black x=0 y=150]
    [ptext name="poem" layer=0 text=%text3 face="" size=30 color="0xf8f8f8" edge=black x=0 y=200]
    [ptext name="poem" layer=0 text=%text2 face="" size=30 color="0xf8f8f8" edge=black x=0 y=250]
    [ptext name="poem" layer=0 text=%text4 face="" size=30 color="0xf8f8f8" edge=black x=0 y=300]

    [iscript]
    $(".poem").css("text-align", "center");
    $(".poem").css("width", "640px");
    $(".poem").css("text-shadow", "0px 0px 21px #000000");
    $(".poem").css("opacity", "0");
    [endscript]

    [keyframe name=poem_anime]
    [frame p=30% opacity=1]
    [frame p=50% opacity=1]
    [frame p=80% opacity=1]
    [frame p=100% opacity=0]
    [endkeyframe]

    [kanim name="poem" keyframe=poem_anime time=5000 easing=linear]

    [wait time=5000]
    [freeimage layer=0]
    [wait time=1000]

    [ptext name="scene" layer=0 text=%text5 face="" size=20 color="0xf8f8f8" edge=black x=0 y=550]
    [ptext name="scene" layer=0 text=%text6 face="" size=30 color="0xf8f8f8" edge=black x=0 y=600]

    [iscript]
    $(".scene").css("text-align", "center");
    $(".scene").css("width", "640px");
    $(".scene").css("text-shadow", "0px 0px 21px #000000");
    $(".scene").css("opacity", "0");
    [endscript]

    [keyframe name=scene_anime]
    [frame p=30% opacity=1]
    [frame p=50% opacity=1]
    [frame p=80% opacity=1]
    [frame p=100% opacity=0]
    [endkeyframe]

    [kanim name="scene" keyframe=scene_anime time=5000 easing=linear]

    [wait time=5000]
    [freeimage layer=0]
    [wait time=1000]
  [else]
    [ptext name="poem" layer=0 text=%text1 face="" size=30 color="0xf8f8f8" edge=black x=0 y=250]
    [ptext name="poem" layer=0 text=%text3 face="" size=30 color="0xf8f8f8" edge=black x=0 y=300]
    [ptext name="poem" layer=0 text=%text2 face="" size=30 color="0xf8f8f8" edge=black x=0 y=350]
    [ptext name="poem" layer=0 text=%text4 face="" size=30 color="0xf8f8f8" edge=black x=0 y=400]

    [iscript]
    $(".poem").css("text-align", "center");
    $(".poem").css("width", "640px");
    $(".poem").css("text-shadow", "0px 0px 21px #000000");
    $(".poem").css("opacity", "0");
    [endscript]

    [keyframe name=poem_anime]
    [frame p=30% x=0 y=-30 opacity=1]
    [frame p=50% x=0 y=-50 opacity=1]
    [frame p=80% x=0 y=-80 opacity=1]
    [frame p=100% x=0 y=-100 opacity=0]
    [endkeyframe]

    [kanim name="poem" keyframe=poem_anime time=5000 easing=linear]

    [wait time=5000]
    [freeimage layer=0]
    [wait time=1000]
  [endif]
[endmacro]

[macro name="end_poem"]
  [fadeoutbgm2]
  [end_snow fade="true"]
  [bg storage="white.png" method=fadeInLeft cross=true time=4200]
  [wait time=2000]
  [bg storage="black.png" method=fadeInLeft cross=true time=200]
[endmacro]

[macro name="start_snow"]
  [iscript]
  var inverse = Boolean(mp.inverse);

  $("#tyrano_base").snowfall({
    flakeCount: 21,
    ; flakeColor: "#888888",
    minSize: 2,
    maxSize: 8,
    minSpeed: 1,
    maxSpeed: 2,
    round: true,
    ; shadow: true,
    ; image: "./data/image/nextpage.gif",
    inverse: inverse,
  });
  [endscript]
[endmacro]

[macro name="end_snow"]
  [iscript]
  if (mp.fade === "true") {
    $(".snowfall-flakes").fadeOut(4200);
    setTimeout(function () {
      $(".snowfall-flakes").remove();
    }, 4200);
  } else {
    $(".snowfall-flakes").remove();
  }
  [endscript]
[endmacro]
