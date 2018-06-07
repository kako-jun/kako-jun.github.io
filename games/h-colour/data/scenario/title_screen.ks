
;==============================
; タイトル画面
;==============================

;[loadjs storage="my.js"]
[loadjs storage="snowfall.jquery.js"]

;マクロを読み込む
[call storage="my.ks" target=""]

[iscript]
;キャラ名を装飾する
$(".chara_name_area").css("text-align", "center");
$(".chara_name_area").css("width", "245px");
$(".chara_name_area").css("font-family", "Verdana, Arial, sans-serif");

;システム変数を初期化する
if (sf.my === undefined) { sf.my = {}; }

if (sf.my.info === undefined) { sf.my.info = {}; }
;起動した回数
if (sf.my.info.num_of_start === undefined) { sf.my.info.num_of_start = 0; }
;プレイ中のシリーズ
if (sf.my.info.current_series === undefined) { sf.my.info.current_series = 0; }
;プレイ中の小節
if (sf.my.info.current_scene === undefined) { sf.my.info.current_scene = ""; }

if (sf.my.user === undefined) { sf.my.user = {}; }
;ユーザー名
if (sf.my.user.name === undefined) { sf.my.user.name = ""; }

if (sf.my.config === undefined) { sf.my.config = {}; }
;テンポ
if (sf.my.config.tempo === undefined) { sf.my.config.tempo = 30; }
;音量
if (sf.my.config.volume === undefined) { sf.my.config.volume = 50; }

if (sf.my.flags === undefined) { sf.my.flags = {}; }
;その小節を表示して良いか
if (sf.my.flags.show_S1_1_1 === undefined) { sf.my.flags.show_S1_1_1 = true; }
if (sf.my.flags.show_S1_1_A === undefined) { sf.my.flags.show_S1_1_A = false; }
if (sf.my.flags.show_S1_2_1 === undefined) { sf.my.flags.show_S1_2_1 = false; }

;その小節をクリア済みか
if (sf.my.flags.clear_S1_1_1 === undefined) { sf.my.flags.clear_S1_1_1 = false; }
if (sf.my.flags.clear_S1_1_A === undefined) { sf.my.flags.clear_S1_1_A = false; }
if (sf.my.flags.clear_S1_2_1 === undefined) { sf.my.flags.clear_S1_2_1 = false; }

;そのノイズを表示して良いか
if (sf.my.flags.show_N1_1 === undefined) { sf.my.flags.show_N1_1 = false; }

;そのノイズをクリア済みか
if (sf.my.flags.clear_N1_1 === undefined) { sf.my.flags.clear_N1_1 = false; }

;選択肢をもう選んだか
sf.my.info.num_of_start = sf.my.info.num_of_start + 1;
sf.my.info.current_series = 0;
sf.my.info.current_scene = "";

;デバッグ用
sf.my.flags.clear_S1_1_1 = false;
sf.my.flags.clear_S1_1_A = false;
sf.my.flags.clear_S1_2_1 = false;
[endscript]

[configdelay speed="&sf.my.config.tempo"]
[bgmopt volume="&sf.my.config.volume"]
[seopt volume="&sf.my.config.volume"]

[hidemenubutton]
[tb_clear_images]
[tb_keyconfig flag=0]
[cm]

[show_ubiquitous_buttons]

[if exp="sf.my.flags.clear_S1_1_1 === true"]
  [jump storage="system_series.ks"]
[else]
  [jump storage="system_series.ks"]
  ; [jump storage="S1-1-1.ks"]
[endif]

[s]
