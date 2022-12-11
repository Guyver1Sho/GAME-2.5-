//IMAGE FADE///
/*------------------------------------*/
const Blackbox = document.getElementsByClassName("Blackbox");
const screenFade = document.getElementsByClassName("screenfade");

var playing = false;

const tl = new TimelineMax({
    onComplete: function () {
        playing = false;
    },
});

tl.fromTo(
    Blackbox,
    0,
    { opacity: 0 },
    { opacity: 1, ease: Power1.easeInOut }
).fromTo(Blackbox, 1, { opacity: 1 }, { opacity: 0, ease: Power1.easeInOut });

// document.getElementsByClassName("btn").addEventListener("click", playTL);

document.getElementById("option-buttons").addEventListener("click", playTL);

function playTL() {
    if (!playing) {
        playing = true;
        tl.progress(0).play();
    }
}

/*------------------------------------*/
//SCREEN FADE///
/*------------------------------------*/

var blaying = false;

const yl = new TimelineMax({
    onComplete: function () {
        blaying = false;
    },
});

yl.fromTo(
    screenFade,
    0,
    { opacity: 0 },
    { opacity: 1, ease: Power1.easeInOut }
).fromTo(screenFade, 1, { opacity: 1 }, { opacity: 0, ease: Power1.easeInOut });

document.getElementById("option-buttons").addEventListener("click", () => {
    playYL();
});

function playYL() {
    if (!blaying) {
        blaying = true;
        yl.progress(0).play();
    }
}

function fade() {
    screenFade[0].style.display = "none";
}

// setTimeout(function fade() {
//     document.getElementById("screenfade").innerHTML = "";
// }, delayInMilliseconds);

// if (
//     Object.keys(state).includes("keypad") &&
//     Object.values(state).includes(true)
// ) {
//     playYL;
// }
