let Le = 0
let Te = 0
let Ti = 0
DHT11.setPin(DigitalPin.P3)
radio.setTransmitPower(7)
radio.setGroup(152)
basic.forever(function () {
    basic.showString("Ti")
    Ti = input.temperature()
    basic.showString("" + (Ti))
    basic.showString("Te")
    Te = DHT11.temperature()
    basic.showString("" + (Te))
    basic.showString("Le")
    Le = DHT11.humidity()
    basic.showString("" + (Le))
    radio.sendNumber(0)
    radio.sendString("" + Ti + "," + Te + "," + Le + ",")
    basic.pause(5000)
})
