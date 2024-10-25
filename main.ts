/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Francisco Rocco Allegri
 * Created on: Oct 2024
 * This program sets neopixels to red if the distance sensed is 10cm, else they are set to green. This program only uses an If, Else satement
*/

let neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
let distanceToObject: number = 0

basic.clearScreen()
neopixelStrip.clear()
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {

    neopixelStrip.clear()
    neopixelStrip.show()
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

if ( distanceToObject < 10) {
    
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.show()
    basic.pause(2000)
    neopixelStrip.clear()
    neopixelStrip.show()

} else {

    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.show()
    basic.pause(2000)
    neopixelStrip.clear()
    neopixelStrip.show()

}

})
