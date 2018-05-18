
;==============================
; タイトル画面
;==============================

[call  storage="sub.ks"  target=""  ]
[iscript]
$(".chara_name_area").css("text-align", "center");
$(".chara_name_area").css("width", "245px");
$(".chara_name_area").css("font-family", "Verdana,Arial,sans-serif");
[endscript]

[bgmopt volume=80]
[seopt volume=80]

[hidemenubutton]

[tb_clear_images]

[tb_keyconfig flag=0]



[cm]
[jump storage="S1-1-1.ks"]
[s]


