var lightBulb = document.getElementById('lightBulb')
var isBroken = false

function On(){
    if (isBroken == false) {
        lightBulb.src = 'images/light_bulb_on.svg'
    }
}

function Off(){
    if (isBroken == false) {
        lightBulb.src = 'images/light_bulb_off.svg'
    }
}

function ToBroke(){
    lightBulb.setAttribute('src', 'images/light_bulb_broken.svg')
    isBroken = true
}