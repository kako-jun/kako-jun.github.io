
[layopt layer=message0 visible=false]
; [clearfix]
[free_layermode time=0 ]
[reset_camera time=0]

[iscript]
$(".layer_camera").empty();
[endscript]

[hidemenubutton]

[layopt layer=1 visible=true]

[cm]

;	コンフィグ用の背景を読み込んでトランジション
[bg storage="bg_scenario_jump.png" method=fadeInDown cross=true time=200]

;	画面右上の「Back」ボタン
[button name="role_button" storage="system_menu.ks" graphic="button/back.png" enterimg="button/back_hover.png" enterse="se_bubble_2.ogg" clickse="se_book.ogg" x=0 y=0]

;選択肢
[button name="S1-1-1" target="*scene_clicked" exp="tf.target_scene='S1-1-1.ks'" graphic="config/button_unread_on.png" enterimg="config/button_unread_on.png" enterse="" clickse="" enterse="" x=200 y=200]
[button name="S1-1-2" target="*scene_clicked" exp="tf.target_scene='S1-1-2.ks'" graphic="config/button_unread_off.png" enterimg="config/button_unread_off.png" enterse="" clickse="" enterse="" x=200 y=400]

[iscript]
  //$(".S1-1-1").attr("src","data/image/config/c_set.png");
[endscript]

[s]

;クリック時の処理
*scene_clicked

[bg storage="black.png" method=fadeIn cross=true time=200]

[cm]
[layopt layer=message1 visible=false]
[freeimage layer=1]
; [clearfix]
[wait_cancel]
[breakgame]

[jump storage="&tf.target_scene"]
