let Le = 0
let Te = 0
let Ti = 0
DHT11.setPin(DigitalPin.P3)
radio.setTransmitPower(7)
radio.setGroup(10)
basic.forever(function () {
    Ti = input.temperature()
    Te = DHT11.temperature()
    Le = DHT11.humidity()
    radio.sendString("" + Ti + "," + Te + "," + Le + ",")
    basic.pause(5000)
})
