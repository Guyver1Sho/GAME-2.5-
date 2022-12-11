let lightUpGreen = document.getElementById("LEDGREEN");
let dimRed = document.getElementById("LEDRED");

var inputLabel = document.getElementById("keypadinputLabel");

function lightSwitch() {
    lightUpGreen.classList.toggle("on");
    dimRed.classList.toggle("off");
}

function depress(obj) {
    this.style.backgroundImage = "url(button-depress.jpg)";
}

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

function pushBtn(obj) {
    var pushed = obj.innerHTML;

    if (pushed == "=") {
        //calculate
        inputLabel.innerHTML = eval(inputLabel.innerHTML);
    } else if (pushed == "Clear") {
        //All Clear
        inputLabel.innerHTML = "0";
    } else {
        if (inputLabel.innerHTML == "0") {
            inputLabel.innerHTML = pushed;
        } else {
            inputLabel.innerHTML += pushed;
        }

        if (inputLabel.innerHTML == "1234") lightSwitch();
    }
}
