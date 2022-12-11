"use strict";

///ALRIGHT HENRY LISTEN UP - YOU NEED TO FIGURE OUT A WAY OF CREATING A ROOM TRACKER! - A WAY OF CONVERTING THE INDEX INTO A STRING WHICH IS STORED SOMEWHERE
///THEN YOU CAN GET THE CODE TO LOOK AT THE ROOM TRACKER AND DO STUFF BASED OFF THAT!!!!

const textElement = document.getElementById("text");
const imgElement = document.getElementById("room-image");
const optionButtonsElement = document.getElementById("option-buttons");
const button3 = document.getElementById("TEST");
const inventory = document.getElementById("inventory");
const itemContainer = document.getElementById("imageContainer");
const itemText = document.getElementById("itemtext");
const itemText2 = document.getElementById("itemtext2");
const itemText3 = document.getElementById("itemtext3");
const x = document.getElementById("Music");
const imageSection = document.querySelectorAll(".image-section");
const screenContainer = document.querySelectorAll(".screencontainer");
const keypad = document.querySelectorAll(".keypad");
const blackBox = document.querySelectorAll(".Blackbox");
const textSection = document.querySelectorAll(".text");

let textArrayIteration = 1;

///ROOM TRACKER///

let roomTracker = 1;

///object.assign copies the ENTIRE object

// function check5() {

//ROOM OBJECT ARRAY - EACH ELEMENT OF ARRAY IS AN OBJECT - PLAYER MOVE

// const roomTracker2 =
// Object.assign(roomTracker, textNodes);

// get roomId(){
//     if(typeof this.roomTracker.id === 'number') };

// {roomTracker.id.assign(textNodes.id)};

///ROOM IMAGE ARRAY///

const roomImages = [
    {
        imgIndex: 1,
        imgURL: "image1.jpg",
    },
    {
        imgIndex: 2,
        imgURL: "image2.jpg",
    },
    {
        imgIndex: 3,
        imgURL: "image3.jpg",
    },
    {
        imgIndex: 4,
        imgURL: "image4.jpg",
    },
    {
        imgIndex: 6,
        imgURL: "image6.jpg",
    },
    {
        imgIndex: 8,
        imgURL: "image8.jpg",
    },
];

///ITEM IMAGE ARRAY///

const itemImages = [
    {
        imgIndex: 1,
        imgURL: "test.jpg",
    },
    {
        imgIndex: 2,
        imgURL: "gun.png",
    },
    {
        imgIndex: 3,
        imgURL: "uniform.png",
    },
];

let indexFunctions = [
    {
        index: 1,
        crackedit() {
            console.log("crackedit!");
        },
    },
];

///test/////

let retreatMessage =
    "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

// Write your code below

// let takeOffMessage = "Spim... Borp... Glix... Blastoff!";

const alienShip = {
    retreat() {
        console.log(retreatMessage);
    },
    takeOff() {
        console.log("Spim... Borp... Glix... Blastoff!");
    },
};

// EUREKKAA!!!!!!
alienShip.retreat();
alienShip.takeOff();
indexFunctions[0].crackedit();

// function showTextNode(textNodeIndex) {
//     const textNode = textNodes.find(
//         (textNode) => textNode.id === textNodeIndex
//     );

// function lol() {
//     if (textNodes.find == 2) {
//         console.log("woooooo");
//     }
// }

function lol() {
    if (textNodes.id == 2) {
        console.log("woooooo");
    }
}

// (textNode) => textNode.id

////if current array option == 2 execute bla bla

///GAME////

let state = {};

let items = {};

let fadeMode = {};

let playerpsiPowers = [];

let psiLevel = { psiLevel: 5 };

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

// WORKING!!!!!!!
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

//PUSH INDEX OF THE ARRAY INTO ANOTHER ARRAY

// function c{
//     playerpsiPower.push(psiPowers.slice(1));
// }

// Array.prototype.slice()!!!!!

// HMMM INTERESTING
const psiEntries = Object.entries(psiPowers);

// https://stackoverflow.com/questions/43249813/how-to-sum-two-object-values-in-javascript

function usepsiPower() {
    if (psiLevel.psiLevel - psiPowers[0]._psiCost <= -1) {
        return "your psiLevel is too low";
    } else {
        return "cast succesful";
    }
}

const robot = {
    model: "1E78V2",
    energyLevel: 100,
    provideInfo() {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
    },
};

const test = document.querySelectorAll(".text");

///KEYPAD VISIBILITY////
/*------------------------------------*/

//fade mode: true and fade mode: false - set every other option as fade:mode false - transitions with transition type 1, 2, 3,
// transtion type: 1 = regular transition, transition type 2 = whole screen fade, transion type 3 = completely different
//let transion type = {};
//text node 1
//bla
//bla
//transion type:1
//or
//transion (type:1)
//if (
//Object.keys(state).includes("transion type") &&
//Object.values(state).includes("1")

///I need to change these to reflect the fact im only dealing with the fade - seperate them out - so check for fade and 2nd check for keypad visability
function check() {
    if (
        Object.keys(state).includes("keypad") &&
        state.keypad === true
        // Object.values(state).includes(true)
    ) {
        console.log("test");
        imageSection[0].style.display = "none";
        textSection[0].style.display = "none";
        // test[0].style.display = "none";
        screenContainer[0].style.display = "none";
        blackBox[0].style.display = "none";
        keypad[0].style.display = "block";
    }
}
///NESTED IF STATEMENTS!!!!
function check2() {
    if (
        Object.keys(state).includes("keypad") &&
        state.keypad === false
        // Object.values(state).includes(false)
    ) {
        console.log("test2");
        imageSection[0].style.display = "block";
        test[0].style.display = "block";
        blackBox[0].style.display = "block";
        textSection[0].style.display = "flex";
        screenContainer[0].style.display = "block";
        keypad[0].style.display = "none";
    }
}

function check3() {
    if (Object.values(fadeMode).includes(1)) {
        screenFade[0].style.display = "block";
        setTimeout(function () {
            fade();
        }, 2000);
    }
}

// let forDeletion = [keypad]

// function filteredArray(){state.filter(function(e) { return e === 'keypad' })}

/*------------------------------------*/

///INVENTORY///
/*------------------------------------*/

function pullValue() {
    var node = document.createElement("P");
    var textNodeItems = Object.values(items);
    var textNode = document.createTextNode(textNodeItems);
    node.appendChild(textNode);
    document.getElementById("inventory").appendChild(node);
    console.log(this);

    if (inventory.innerHTML.indexOf("test") !== -1) {
        var a = document.createElement("div");
        a.id = "Div1";
        a.setAttribute("class", "Div1");
        var iconUrl = document.createElement("img");
        iconUrl.src = "bla.jpg";
        a.append(itemText);
        a.append(iconUrl);
        inventory.appendChild(a);
        a.onmouseover = function both() {
            reveal();
            bloop();
        };

        a.onmouseout = function both() {
            reveal();
            bloop();
        };
        function bloop() {
            a.classList.toggle("Div1-on");
        }

        node.style.display = "none";
    }

    if (inventory.innerHTML.indexOf("gun") !== -1) {
        var b = document.createElement("div");
        b.id = "Div2";
        var iconUrl2 = document.createElement("img");
        iconUrl2.src = "gun.png";
        b.append(itemText2);
        b.append(iconUrl2);
        inventory.appendChild(b);
        b.onmouseover = function () {
            reveal2();
        };
        b.onmouseout = function () {
            reveal2();
        };
        node.style.display = "none";
    }

    if (inventory.innerHTML.indexOf("uniform") !== -1) {
        var c = document.createElement("div");
        c.id = "Div3";
        c.setAttribute("id", "Div3");
        var iconUrl3 = document.createElement("img");
        iconUrl3.src = "uniform.png";
        inventory.appendChild(iconUrl3);
        c.append(itemText3);
        c.append(iconUrl3);
        inventory.appendChild(c);
        c.onmouseover = function () {
            reveal3();
        };
        c.onmouseout = function () {
            reveal3();
        };
        node.style.display = "none";
    }
}

function reveal() {
    var x = itemText;
    x.classList.toggle("itemtext-on");
}

function reveal2() {
    var z = itemText2;
    z.classList.toggle("itemtext-on");
}

function reveal3() {
    var y = itemText3;
    y.classList.toggle("itemtext-on");
}

/*------------------------------------*/

///GAME ENGINE///
/*------------------------------------*/

function startGame() {
    state = {};
    items = {};
    fadeMode = {};
    showTextNode(1);
}

///Lexical context?
function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(
        (textNode) => textNode.id === textNodeIndex
    );

    roomTracker = textNode.id;

    textElement.innerText = textNode.text;

    const roomImage = roomImages.find(
        (roomImage) => roomImage.imgIndex === textNode.room_id
    );

    imgElement.src = roomImage.imgURL;

    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    ///READ UP ON FOR EACH!!!
    textNode.options.forEach((option) => {
        if (showOption(option)) {
            const button = document.createElement("button");
            button.innerText = option.text;
            button.classList.add("btn");
            button.addEventListener(
                "click",
                () => selectOption(option),
                console.log(this)
            );
            optionButtonsElement.appendChild(button);
        }
    });
}

function check5() {
    if (roomTracker === 2) console.log("woooooo room 2");
}

// function showTextNode(textNodeIndex) {
//     const textNode = textNodes.find(
//         (textNode) => textNode.id === textNodeIndex
//     );

//IF EXPRESSION LEFT IS TRUE IT RETURNS THE FIRST EXPRESSIN ELSE IT RETURNS EXPRESSION 2 - WAY MORE CONCISE THAN WRITING IF / ELSE
function showOption(option) {
    return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
    const nextTextNodeId = option.nextText;

    if (nextTextNodeId <= 0) {
        return startGame();
    }

    state = Object.assign(state, option.setState);

    // !!!!!!!!VERY IMPORTANT!!!!!!!!!!!
    ///transion = Object.assign(transion, option.setTransion);

    items = Object.assign(items, option.setItems);

    psiLevel = Object.assign(psiLevel, option.setpsiLevel);

    fadeMode = Object.assign(fadeMode, option.setfadeMode);

    playerpsiPowers = Object.assign(playerpsiPowers, option.setplayerpsiPowers);

    // Deletes all the states each time an option is chosen?
    // only here incase the user creates a state WITHOUT a value
    Object.keys(state).forEach(
        (key) => state[key] === undefined && delete state[key]
    );

    showTextNode(nextTextNodeId);
}

function vanish() {
    A.style.visibility = "hidden";
}

var A = document.querySelector("#TEST");

// indexFunctions[0].crackedit();

/////!!!!!Ahhh i dunno anymore!!!! - BREAKING

//GAME TEXT NODES///

const textNodes = [
    {
        id: 1,
        room_id: 1,
        text: '"ZZZZzzzzZZZZZZzzzzzzzzzzZZZZZZZZZZZZZ"',

        options: [
            {
                text: "Wake up",
                setfadeMode: { fade: 2 },
                nextText: 2,
            },
        ],
    },

    {
        id: 2,
        room_id: 2,
        text: 'You wake up in your bunk. \n"I dont feel good this morning....i need to get out of bed."',

        options: [
            {
                text: "Look at alarm clock",
                setState: { test: true },
                setState: { dog: undefined },
                setItems: { item1: "test", weight: 10 },
                setfadeMode: { fade: 2 },
                setpsiLevel: { psiLevel: 10 },
                ahhh() {
                    console.log("ahhh");
                },
                nextText: 3,
            },
            {
                text: "Get out of bed",
                setfadeMode: { fade: 2 },
                nextText: 4,
            },
        ],
    },

    {
        id: 3,
        room_id: 3,
        text: "Its 3:34am",
        options: [
            {
                text: "Get out of bed",
                setState: { gun: true },
                setItems: { item2: "gun", weight: 20 },
                setfadeMode: { fade: 2 },
                nextText: 4,
            },
        ],
    },

    {
        id: 4,
        room_id: 4,

        text: "Its dark, the automatic lights should have come on...",
        options: [
            {
                text: "look at keypad",
                setState: { keypad: true },
                setfadeMode: { fade: 1 },
                nextText: 8,
            },
            {
                text: "Pick up fireball",

                ///Not working - not sure why?

                // function pickUp () {playerpsiPower.push(psiPowers.name);},
                // setplayerpsiPowers: { fireball: true },

                setfadeMode: { fade: 2 },
                nextText: 5,
            },

            {
                text: "Put your uniform on",
                setfadeMode: { fade: 2 },
                setState: { uniform: true },
                setItems: { item3: "uniform" },
                nextText: 5,
            },
            {
                text: "Open door and \nleave your cell",
                setfadeMode: { fade: 2 },
                setState: { door: true },
                nextText: 6,
            },
        ],
    },
    {
        id: 5,
        room_id: 4,
        text: "This thing is hot!",
        options: [
            {
                text: "Look at Keypad",
                setfadeMode: { fade: 1 },
                setState: { keypad: true },
                nextText: 8,
            },
            {
                text: "Look out window",
                setfadeMode: { fade: 2 },
                nextText: 7,
            },

            {
                text: "Open door and \nleave your cell",
                setState: { door: true },
                setfadeMode: { fade: 2 },
                nextText: 6,
            },
        ],
    },

    {
        id: 6,
        room_id: 6,
        text: "Am i dressed?",
        options: [
            {
                text: "Oh shit i need to put my uniform on! - go back",
                setfadeMode: { fade: 2 },
                requiredState: (currentState) => !currentState.uniform,
                nextText: 4,
            },
            {
                text: "Walk through door",
                requiredState: (currentState) => currentState.uniform,
                setfadeMode: { fade: 2 },
                nextText: 7,
            },
        ],
    },

    {
        id: 8,
        room_id: 8,
        text: "Looking at Keypad",
        options: [
            {
                text: "Look away from Keypad",
                setState: { keypad: false },
                setfadeMode: { fade: 1 },
                nextText: 4,
            },
        ],
    },
];

// if (nextTextNodeId <= 0) {
//     return startGame();
// }

// function powers() {
//     if (textElement.includes("ZZZZzzzzZZZZZZzzzzzzzzzzZZZZZZZZZZZZZ") !== -1) {
//         textNodes[0].options[0].ahhh();
//     }
// }

/////AHHHHH BIT LOST WITH THIS//////
function powers() {
    if (option.Text.values) {
        textNodes[0].options[0].ahhh();
    }
}

/////THIS SHOULD WORK!!!!
function check4() {
    if (textElement.innerText.includes("This thing is hot!")) {
        pushpsiPowers();
    }
}

// textElement.innerText

// window.onload = textNodes.options.jesus();
