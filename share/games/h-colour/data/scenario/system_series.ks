
[layopt layer=0 visible=true]

[iscript]
f.preload_images = [
  "data/fgimage/chara/1/bg_series_1.png",
  "data/fgimage/chara/1/bg_series_2.png",
  "data/fgimage/chara/1/bg_series_3.png",
  "data/fgimage/chara/1/bg_series_4.png",
  "data/fgimage/chara/1/bg_series_5.png",
  "data/fgimage/chara/1/bg_series_6.png",
];
[endscript]

[preload storage="&f.preload_images" wait="true"]

[random_loading]
[wait time=1000]
[bg storage="black.png" method=fadeIn cross=true time=200]

[chara_mod name=background storage="chara/1/bg_series_2.png" cross=true time=3000]
[chara_show name=background layer=base top=-30]

[keyframe name=bg_series_anime]
[frame p=25% x=0 y=0 rotate=90deg scale=1.5]
[frame p=50% x=0 y=10 rotate=180deg scale=2]
[frame p=75% x=10 y=10 rotate=270deg scale=1.5]
[frame p=100% x=10 y=0 rotate=360deg scale=1]
[endkeyframe]

[kanim layer="base" keyframe=bg_series_anime time=200000 easing=linear count=infinite]

[button name="S1" target="*play_S1" graphic="button/S1.png" enterimg="button/back_hover.png" enterse="se_bubble_2.ogg" clickse="se_ice.ogg" x=100 y=100]
[wait time=100]
[button name="S2" target="*play_S2" graphic="button/S1.png" enterimg="button/back_hover.png" enterse="se_bubble_2.ogg" clickse="se_ice.ogg" x=150 y=200]
[wait time=100]
[button name="S3" target="*play_S3" graphic="button/S1.png" enterimg="button/back_hover.png" enterse="se_bubble_2.ogg" clickse="se_ice.ogg" x=200 y=300]
[wait time=100]
[button name="S4" target="*play_S4" graphic="button/S1.png" enterimg="button/back_hover.png" enterse="se_bubble_2.ogg" clickse="se_ice.ogg" x=150 y=400]
[wait time=100]
[button name="S5" target="*play_S5" graphic="button/S1.png" enterimg="button/back_hover.png" enterse="se_bubble_2.ogg" clickse="se_ice.ogg" x=150 y=600]
[wait time=100]
[button name="S6" target="*play_S6" graphic="button/S1.png" enterimg="button/back_hover.png" enterse="se_bubble_2.ogg" clickse="se_ice.ogg" x=150 y=800]

[ptext name="insert_coin" layer=0 text="遊びたい章を選んでや……" face="" size=30 color="white" edge=black x=150 y=40]

[keyframe name=insert_coin_anime]
[frame p=50% opacity=1]
[frame p=100% opacity=0]
[endkeyframe]

[kanim name="insert_coin" keyframe=insert_coin_anime time=2000 easing=ease count=infinite]

;雪を降らせる
[start_snow inverse="true"]

[s]

*play_S1
[iscript]
sf.my.info.current_series = 1;
[endscript]

[end_snow]
[freeimage layer=0]
[chara_mod name=background storage="chara/1/black.png" time=0]
[playbgm2 storage="loop/piano2_016.ogg"]
[jump storage="system_menu.ks"]

*play_S2
[iscript]
sf.my.info.current_series = 2;
[endscript]

[end_snow]
[freeimage layer=0]
[chara_mod name=background storage="chara/1/black.png" time=0]
[playbgm2 storage="eternal_three_or.ogg"]
[jump storage="system_menu.ks"]

*play_S3
[iscript]
sf.my.info.current_series = 3;
[endscript]

[end_snow]
[freeimage layer=0]
[chara_mod name=background storage="chara/1/black.png" time=0]
[playbgm2 storage="heilveil_or.ogg"]
[jump storage="system_menu.ks"]

*play_S4
[iscript]
sf.my.info.current_series = 4;
[endscript]

[end_snow]
[freeimage layer=0]
[chara_mod name=background storage="chara/1/black.png" time=0]
[playbgm2 storage="kore_de_eno.ogg"]
[jump storage="system_menu.ks"]

*play_S5
[iscript]
sf.my.info.current_series = 5;
[endscript]

[end_snow]
[freeimage layer=0]
[chara_mod name=background storage="chara/1/black.png" time=0]
[playbgm2 storage="luna.ogg"]
[jump storage="system_menu.ks"]

*play_S6
[iscript]
sf.my.info.current_series = 6;
[endscript]

[end_snow]
[freeimage layer=0]
[chara_mod name=background storage="chara/1/black.png" time=0]
[playbgm2 storage="portrait_ep.ogg"]
[jump storage="system_menu.ks"]
