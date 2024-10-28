let numeroRandomReceptor = 0
let numeroRandomEmisor = 0
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    numeroRandomReceptor = receivedNumber
    if (numeroRandomEmisor > numeroRandomReceptor) {
        basic.showIcon(IconNames.Happy)
    } else if (numeroRandomEmisor < numeroRandomReceptor) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendString("Hola, mon!")
})
radio.onReceivedString(function on_received_string(receivedString: string) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    numeroRandomEmisor = randint(1, 6)
    radio.sendNumber(numeroRandomEmisor)
    if (numeroRandomEmisor > numeroRandomReceptor) {
        basic.showIcon(IconNames.Happy)
    } else if (numeroRandomEmisor < numeroRandomReceptor) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
    
})
