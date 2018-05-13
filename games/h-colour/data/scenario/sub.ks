
[macro name="background_anime"]
[keyframe name=background_anime_1]

[frame p=50% x=-640]

[frame p=100% x=0]

[endkeyframe]

[kanim layer=base keyframe=background_anime_1 time=100000 easing=linear count=infinite]
[endmacro]


[macro name="stand_anime"]
[keyframe name=stand_anime_1]

[frame p=25% x=100 y=0 rotate=-30deg scale=2]

[frame p=50% x=50 y=0 rotate=0deg scale=1]

[frame p=75% x=-100 y=0 rotate=30deg scale=2]

[frame p=100% x=0 y=0 rotate=0deg scale=1]

[endkeyframe]

[kanim layer=0 keyframe=stand_anime_1 time=200000 easing=linear count=infinite]
[endmacro]
