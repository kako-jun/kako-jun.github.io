[_tb_system_call storage=system/_S1-1-1.ks]

[iscript]
//S1-1-1
//月とパジャマ
//---------------------------------------------------------|-------------------<
//★書くこと
//
//
//
//---------------------------------------------------------|-------------------<
//00:00-
//1章の出だしはぽわーん。
//
//01:00-
//
//02:00-
//
//03:00-
//
//04:00-
//
[endscript]

[preload storage="./data/fgimage/chara/1/room.png"]

[preload storage="./data/fgimage/chara/1/rouka.png"]

[preload storage="./data/fgimage/chara/2/kako_angry.png"]

[preload storage="./data/fgimage/chara/2/kako_happy.png"]

[preload storage="./data/fgimage/chara/2/tomo_tohoho.png"]

[iscript]
//---------------------------------------------------------|-------------------<
//00:00-
//
[endscript]

[chara_mod_b storage="chara/1/room.png"]

[chara_show_b]

[chara_mod_s storage="chara/2/kako_angry.png"]

[show_role_buttons]

[tb_show_message_window  ]
[tb_start_text mode=4 ]
#カコ
てすと[l][r]
[playbgm2 storage="loop/piano2_016.ogg"]
[r]
tseuto[l][r]
改ページするよ
[p_h storage="S1-1-1.ks" target="*h_0010" target_else="*h_0010_else"]
[_tb_end_text]

*h_0010

[start_hanasu]

[chara_mod_s storage="chara/2/tomo_tohoho.png"]

[tb_start_text mode=4 ]
#トモ
はなしたよ[l][r]
[r]
はなすの中で改ページするよ[p2]
[_tb_end_text]

[tb_start_text mode=4 ]
はなすの中で改ページしたよ[p2]
[_tb_end_text]

[stop_hanasu]

*h_0010_else

[chara_hide_s]

[chara_mod_b storage="chara/1/rouka.png"]

[playbgm2 storage="aiju.ogg"]

[chara_mod_s storage="chara/2/kako_happy.png"]

[tb_start_text mode=4 ]
[start_mono]
#……
(こんにちは[l][r]
これは新しいプロジェクトです[l][r]
[r]
[playse2 storage="mechanical_61.ogg"]
ドラッグ＆ドロップして要素を追加してください)[p2]
[_tb_end_text]

[chara_mod_s storage="chara/2/kako_angry.png"]

[tb_start_text mode=4 ]
[start_mono]
#……
こんにちは[l][r]
これは新しいプロジェクトです[l][r]
[r]
ドラッグ＆ドロップして要素を追加してください[p2]
[_tb_end_text]

[iscript]
//---------------------------------------------------------|-------------------<
//01:00-
//
[endscript]

[s  ]
