///PSI POWERS////

const psiPowers = [
    {
        _name: "fireBall",
        imgURL: "fireBall.jpg",
        _psiCost: 10,
        _damage: 10,
        _special: "Causes damage over time",
        _image: "bla.jpg",
        _text: "A long ranged pyrotechnic \n attack",
        soundEffect: function () {
            console.log("BRRRRR");
        },
    },

    {
        _name: "frost",
        imgURL: "frost.jpg",
        _psiCost: 10,
        _damage: 10,
        _special: "Causes slow effect over time",
        _image: "uniform.png",
        _text: "A long ranged freezing \n attack",
        soundEffect: function () {
            console.log("BRRRRR");
        },
    },

    {
        _name: "Lightning",
        imgURL: "Lightning.jpg",
        _psiCost: 10,
        _damage: 10,
        _special: "Causes damage over time",
        _image: "gun.png",
        _text: "A short ranged shock \n attack",
        soundEffect: function () {
            console.log("BRRRRR");
        },
    },
];

let psipowerimage = document.getElementById("psipowerimage");
let psipowertext = document.getElementById("psipowertext");

function pushpsiPowers() {
    playerpsiPowers.push(psiPowers[0]);
    console.log("fireball!");
}

function pushpsiPowers2() {
    playerpsiPowers.push(psiPowers[1]);
    console.log("freeze!");
}

function pushpsiPowers3() {
    playerpsiPowers.push(psiPowers[2]);
    console.log("BZZZZZ");
}

const psiEntries = Object.entries(psiPowers);

function usepsiPower() {
    if (psiLevel.psiLevel - psiPowers[0]._psiCost <= -1) {
        return "your psiLevel is too low";
    } else {
        return "cast succesful";
    }
}
