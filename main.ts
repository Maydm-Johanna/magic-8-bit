input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("E D G A F C5 - - ", 292), music.PlaybackMode.InBackground)
    led.stopAnimation()
    basic.showString("Hmmm")
    basic.showString("" + (text_list[randint(0, 5)]))
})
let text_list: string[] = []
basic.showString("Ask and shake!")
text_list = [
"Yes",
"No",
"Ask again",
"Maybe",
"1% chance",
"I'll say yes if you give me $5"
]
