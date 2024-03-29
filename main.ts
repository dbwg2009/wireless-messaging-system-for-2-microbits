enum RadioMessage {
    message1 = 49434,
    test = 2239
}
radio.onReceivedNumber(function (receivedNumber) {
    recieve(receivedNumber)
})
function pin_1_pressed () {
    p0_pressed = 1
    send_message_number = -1
    ScrolText.showString(
    "choose your message using A, then press B, Then A To Send",
    SCROLL_DIR.LEFT,
    SCROLL_ROTATE.SR_0,
    70
    )
}
input.onButtonPressed(Button.A, function () {
    button_A_pressed()
})
function sendable_messages_list (text_num: number) {
    send_messages = text_num
    if (text_num == 0) {
        Message_to_send("Hello")
    } else if (text_num == 1) {
        Message_to_send("Goodbye")
    } else if (text_num == 2) {
        Message_to_send("How Are You?")
    } else if (text_num == 3) {
        Message_to_send("Great")
    } else if (text_num == 4) {
        Message_to_send("Good")
    } else if (text_num == 5) {
        Message_to_send("Okay")
    } else if (text_num == 6) {
        Message_to_send("Bad")
    } else if (text_num == 7) {
        Message_to_send("Terrible")
    } else if (text_num == 8) {
    	
    } else {
    	
    }
}
function button_A_pressed () {
    basic.clearScreen()
    if (p0_pressed == 1) {
        send_message_number += 1
        basic.showNumber(send_message_number)
    } else if (a_button == 1) {
        for (let index = 0; index < 3; index++) {
            music.playMelody("C5 A F D C E G B ", 500)
        }
        music.playTone(988, music.beat(BeatFraction.Breve))
        music.setVolume(255)
        music.playTone(698, music.beat(BeatFraction.Breve))
        music.playTone(131, music.beat(BeatFraction.Breve))
        music.setVolume(127)
        radio.sendNumber(send_messages)
        send_message_number = 0
        a_button = 0
        p0_pressed = 0
    }
}
input.onPinPressed(TouchPin.P2, function () {
    control.reset()
})
function Message_to_send (Message: string) {
    p0_pressed = 0
    a_button = 1
    send_message_number = -1
    basic.showString(Message)
    basic.pause(100)
}
input.onButtonPressed(Button.B, function () {
    button_b_pressed()
})
input.onPinPressed(TouchPin.P1, function () {
    pin_1_pressed()
})
function button_b_pressed () {
    if (p0_pressed == 1) {
        sendable_messages_list(send_message_number)
    } else {
        basic.clearScreen()
    }
}
function recieve (received_number: number) {
    basic.showLeds(`
        . . . . #
        # . . # #
        # # # # .
        # . . # .
        # . . # .
        `)
    for (let index = 0; index < 4; index++) {
        music.playMelody("E F G F B A D C ", 500)
    }
    music.playTone(988, music.beat(BeatFraction.Breve))
    basic.clearScreen()
    if (received_number == 0) {
        basic.showString("Hello")
    } else if (received_number == 1) {
        basic.showString("Goodbye")
    } else if (received_number == 2) {
        basic.showString("How are you?")
    } else if (received_number == 3) {
        basic.showString("Great")
    } else if (received_number == 4) {
        basic.showString("Good")
    } else if (received_number == 5) {
        basic.showString("Okay")
    } else if (received_number == 6) {
        basic.showString("Bad")
    } else if (received_number == 7) {
        basic.showString("Terrible")
    } else {
    	
    }
}
let a_button = 0
let send_messages = 0
let p0_pressed = 0
let send_message_number = 0
radio.setGroup(158)
send_message_number = -1
basic.clearScreen()
