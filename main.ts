let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.rotate(1)
    strip.show()
})
