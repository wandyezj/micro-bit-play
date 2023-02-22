// Sleep (do nothing) for number of milliseconds.
function sleep (milliseconds: number) {
    stamp = control.millis()
    // current time - previous time = time passed
    while (control.millis() - stamp < milliseconds) {
        control.waitMicros(1000)
    }
}
// turns pin 0 on and off with a half second delay.
function pulse_pin_0 () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    sleep(500)
    pins.digitalWritePin(DigitalPin.P0, 0)
    sleep(500)
}
let stamp = 0
// version number
// 
// tell designs apart, and when they are loaded.
basic.showNumber(3)
basic.forever(function () {
    pulse_pin_0()
})
