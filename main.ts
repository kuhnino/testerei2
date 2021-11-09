radio.onReceivedString(function (receivedString) {
    EID = receivedString.charAt(0)
    if (SID != EID) {
        radio.sendString(receivedString)
        basic.showString(receivedString)
    }
})
let Le = 0
let Te = 0
let Ti = 0
let EID = ""
let SID = ""
DHT11.setPin(DigitalPin.P3)
radio.setTransmitPower(7)
radio.setGroup(10)
SID = "A"
EID = "B"
basic.forever(function () {
    Ti = input.temperature()
    Te = DHT11.temperature()
    Le = DHT11.humidity()
    radio.sendString("" + SID + "," + Ti + "," + Te + "," + Le)
    basic.showString("" + SID + "," + Ti + "," + Te + "," + Le)
    basic.pause(5000)
})
