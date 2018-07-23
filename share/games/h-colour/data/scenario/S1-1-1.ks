[_tb_system_call storage=system/_S1-1-1.ks]

[iscript]
//S1-1-1
//月とパジャマ
//---------------------------------------------------------|-------------------<
//★書くこと
//
//
//
[endscript]

[iscript]
f.preload_images = [
  ; "data/fgimage/chara/1/black.png",
  ; "data/fgimage/chara/1/white.png",
  "data/fgimage/chara/1/BG_1_4.png",
  "data/fgimage/chara/1/BG_2_4.png",
  "data/fgimage/chara/1/BG_3_4.png",
  "data/fgimage/chara/1/BG_4_4.png",
  "data/fgimage/chara/1/BG_5_4.png",
  "data/fgimage/chara/2/kako_angry.png",
  "data/fgimage/chara/2/kako_happy.png",
  "data/fgimage/chara/2/tomo_tohoho.png",
];
[endscript]

[preload storage="&f.preload_images" wait="true"]

[iscript]
//---------------------------------------------------------|-------------------<
//00:00-
//1章の出だしはぽわーん。
//
//
sf.my.info.current_scene = "S1-1-1";
[endscript]

[start_poem cloud="1"]
[poem text1="ああ" text2="なんで" text3="" text4=""]
[poem text1="くそ……" text2="" text3="" text4=""]
[poem text1="こまったなぁ……" text2="" text3="" text4=""]
[poem text1="……" text2="" text3="" text4="" text5="S1-2-1" text6="月とパジャマ" last="true"]
[end_poem]

[chara_mod_b storage="chara/1/BG_1_4.png"]
[chara_show_b]

[show_menu_button]

;[layermode name=cloud graphic="cloud.png" mode=overlay opacity=100]

[chara_mod_s storage="chara/2/kako_angry.png"]
; [intermission series="1" num_of_noise="3"]

[layopt layer="message0" visible="true"]
[tb_start_text mode=4 ]
#カコ
てすと[l][r]
[chara_mod_b storage="chara/1/BG_2_4.png"]
[emb exp="sf.my.info.num_of_start"][l][r]
[emb exp="sf.my.info.current_scene"][l][r]
[playbgm2 storage="eternal_three_or.ogg"]
[r]
[chara_mod_b storage="chara/1/BG_3_4.png"]
tseuto[l][r]
改ページするよ
[p_h storage="S1-1-1.ks" target="*h_0010" target_else="*h_0010_else"]
[_tb_end_text]

[iscript]
//---------------------------------------------------------|-------------------<
[endscript]

*h_0010

[start_hanasu]

[chara_mod_s storage="chara/2/tomo_tohoho.png"]

[tb_start_text mode=4 ]
#トモ
はなしたよ[l][r]
[r]
はなすの中で改ページするよ[p2]
[_tb_end_text]

[iscript]
//---------------------------------------------------------|-------------------<
[endscript]

[tb_start_text mode=4 ]
はなすの中で改ページしたよ[p2]
[_tb_end_text]

[stop_hanasu]

[iscript]
//---------------------------------------------------------|-------------------<
[endscript]

*h_0010_else

[chara_hide_s]

[chara_mod_b storage="chara/1/BG_4_4.png"]

[playbgm2 storage="aiju.ogg"]

[chara_mod_s storage="chara/2/kako_happy.png"]

[tb_start_text mode=4 ]
[mono]
#私
こんにちは[l][r]
これは新しいプロジェクトです[l][r]
[r]
[playse2 storage="mechanical_61.ogg"]
ドラッグ＆ドロップして要素を追加してください[p2]
[_tb_end_text]

[iscript]
//---------------------------------------------------------|-------------------<
[endscript]

[chara_mod_b storage="chara/1/BG_5_4.png"]
[chara_mod_s storage="chara/2/kako_angry.png"]

[tb_start_text mode=4 ]
[mono]
#私
こんにちは[l][r]
これは新しいプロジェクトです[l][r]
[r]
ドラッグ＆ドロップして要素を追加してください[p2]
[_tb_end_text]

[iscript]
//---------------------------------------------------------|-------------------<
//01:00-
//
//
//
sf.my.info.current_scene = "S1-1-1";
[endscript]





[iscript]
//---------------------------------------------------------|-------------------<
//02:00-
//
//
//
sf.my.info.current_scene = "S1-1-2";
[endscript]





[iscript]
//---------------------------------------------------------|-------------------<
//03:00-
//
//
//
sf.my.info.current_scene = "S1-1-2";
[endscript]





[iscript]
//---------------------------------------------------------|-------------------<
//04:00-
//
//
//
sf.my.info.current_scene = "S1-1-2";
[endscript]



[iscript]
sf.my.flags.clear_S1_1_1 = true;
sf.my.flags.show_S1_1_2 = true;

sf.my.flags.show_N1_1 = true;
[endscript]

[intermission series="1" num_of_noise="3"]
[s  ]
