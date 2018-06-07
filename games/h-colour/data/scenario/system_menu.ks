
[layopt layer=message0 visible=false]
[clearfix name="menu"]
[free_layermode time=0 ]
[reset_camera time=0]

[iscript]
$(".layer_camera").empty();
[endscript]

[hidemenubutton]

[free_filter]

[layopt layer=0 visible=true]
[layopt layer=1 visible=true]

[cm]

[bg storage="bg_menu.png" method=fadeInLeft cross=true time=200]

[button name="role_button" storage="system_config.ks" graphic="button/back2.png" enterimg="button/back_hover.png" enterse="se_bubble_2.ogg" clickse="se_book.ogg" x=200 y=0]
[button name="role_button" storage="system_noize_tips.ks" graphic="button/back2.png" enterimg="button/back_hover.png" enterse="se_bubble_2.ogg" clickse="se_book.ogg" x=200 y=300]
[button name="role_button" storage="system_scenario_jump.ks" graphic="button/back2.png" enterimg="button/back_hover.png" enterse="se_bubble_2.ogg" clickse="se_book.ogg" x=200 y=600]

[if exp="sf.my.info.current_scene === ''"]
  [button target="*start" graphic="button/back.png" enterimg="button/back_hover.png" enterse="se_bubble_2.ogg" clickse="se_glass.ogg" x=400 y=600]
[else]
  [button target="*back" graphic="button/back.png" enterimg="button/back_hover.png" enterse="se_bubble_2.ogg" clickse="se_glass.ogg" x=400 y=600]
[endif]

[ptext layer=0 text="テキストテキスト" face="" size=12 color="0xf8f8f8" x=200 y=300]
[ptext layer=0 text="&sf.my.info.current_scene" face="" size=12 color="0xf8f8f8" x=200 y=400]

[s]

*start
[cm]
[layopt layer=message1 visible=false]
[freeimage layer=0]
[freeimage layer=1]
; [clearfix]
[wait_cancel]

[iscript]
var next_scene = "S1-1-1";
if (sf.my.flags.clear_S1_1_1 === true) {
	next_scene = "S1-1-A"
} else if (sf.my.flags.clear_S1_1_A === true) {
	next_scene = "S1-2-1"
} else if (sf.my.flags.clear_S1_2_1 === true) {
	next_scene = "S1-2-2"
}

tf.next_scene = next_scene + ".ks";
[endscript]

[bg storage="black.png" method=fadeInLeft cross=true time=200]
[fadeoutbgm2]
[jump storage="&tf.next_scene"]

*back
[cm]
[layopt layer=message1 visible=false]
[freeimage layer=1]
; [clearfix]
[wait_cancel]

[bg storage="black.png" method=fadeInLeft cross=true time=200]
[awakegame]

;===================================================

;★ボタンクリック時の処理

;===================================================
;--------------------------------------------------------------------------------
;▼BGM音量
;--------------------------------------------------------------------------------
*vol_bgm_change
[iscript]
	$(".bgmvol").attr("src","data/image/config/c_btn.png");
	$(".bgmvol_"+tf.current_bgm_vol).attr("src","data/image/config/c_set.png");
[endscript]
[bgmopt volume="&tf.current_bgm_vol"]
[return]

;--------------------------------------------------------------------------------
;▼SE音量
;--------------------------------------------------------------------------------
*vol_se_change
[iscript]
	$(".sevol").attr("src","data/image/config/c_btn.png");
	$(".sevol_"+tf.current_se_vol).attr("src","data/image/config/c_set.png");
[endscript]
[seopt volume="&tf.current_se_vol"]
[return]

;---------------------------------------------------------------------------------
;▼テキスト速度
;--------------------------------------------------------------------------------
*ch_speed_change
[iscript]
	$(".ch").attr("src","data/image/config/c_btn.png");
	$(".ch_"+tf.set_ch_speed).attr("src","data/image/config/c_set.png");
[endscript]
[configdelay speed="&tf.set_ch_speed"]

;	テキスト速度サンプル
	[position layer=message1 left=40 top=490 width=880 height=110 page=fore visible=true opacity=0]
	[layopt layer=message1 visible=true]
	[current layer=message1]
	[font color="0x454D51"]
	■■■■■■■■■■■■■■■

		[iscript]
		tf.system.backlog.pop(); // 上の「このスピードで表示されます」のテキストを履歴から削除
		[endscript]

	[wait time=2000]
	[er]
	[layopt layer=message1 visible=false]
	[return]

;--------------------------------------------------------------------------------
;▼オート速度
;--------------------------------------------------------------------------------
*auto_speed_change
[iscript]
	$(".auto").attr("src","data/image/config/c_btn.png");
	$(".auto_"+tf.set_auto_speed).attr("src","data/image/config/c_set.png");
[endscript]
[autoconfig speed="&tf.set_auto_speed"]
[return]

;--------------------------------------------------------------------------------
;▼スキップ処理-OFF
;--------------------------------------------------------------------------------
*skip_off
[iscript]
	$(".unread_off").attr("src","data/image/config/c_uts_off.png");
	$(".unread_on").attr("src","data/image/config/c_btn.png");
	tf.text_skip="OFF";
[endscript]
[config_record_label skip=false]
[return]

;--------------------------------------------------------------------------------
;▼スキップ処理-ON
;--------------------------------------------------------------------------------
*skip_on
[iscript]
	$(".unread_off").attr("src","data/image/config/c_btn.png");
	$(".unread_on").attr("src","data/image/config/c_uts_on.png");
	tf.text_skip="ON";
[endscript]
[config_record_label skip=true]
[return]

