radio.onReceivedString(function (receivedString) {
    if (receivedString == "Forward") {
        ServoLite.forward()
    } else if (receivedString == "Stop") {
        ServoLite.stop()
    } else if (receivedString == "Backward") {
        ServoLite.backward()
    } else if (receivedString == "Stop") {
        ServoLite.stop()
    } else if (receivedString == "Left") {
        ServoLite.left()
    } else if (receivedString == "Stop") {
        ServoLite.stop()
    } else if (receivedString == "Right") {
        ServoLite.right()
    } else if (receivedString == "Stop") {
        ServoLite.stop()
    } else if (receivedString == "LEDs On") {
        rotate = 1
    } else if (receivedString == "LEDs Off") {
        rotate = 0
    }
})
let rotate = 0
rotate = 0
radio.setGroup(1)
let PixelArray = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
PixelArray.showRainbow(1, 360)
basic.showLeds(`
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    . . . . .
    `)
basic.forever(function () {
    if (rotate == 1) {
        PixelArray.rotate(1)
        PixelArray.show()
        basic.pause(50)
    }
})
