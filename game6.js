let textArrayIteration = 1;

///ROOM IMAGE ARRAY///

let roomTracker = 1;

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

///ITEM IMAGE ARRAY//////

//FOR EACH ITEM I NEED TO CREATE AN IMAGE + TEXT ENTRY FOR IT TO FILL.ETC///

///AN IF FUNCTION - IF AN ITEM IS ADDED TO THE PLAYER INVENTORY - CREATE A NEW DIV WHICH REFERENCES ALL THE CRITIERA OF THE OBJECT

///GAME////

// let healthbar = { healthlevel: 10 };

let state = {};

// let items = {};

let fadeMode = {};

// I think this has to be square brackets as it is an object and the array bits have to be pushed in

let playerpsiPowers = [];

let playeritems = [];

let psiLevel = { psiLevel: 5 };

///HEALTH BAR////
/*------------------------------------*/

///KEYPAD VISIBILITY////
/*------------------------------------*/

function check() {
    if (
        Object.keys(state).includes("keypad") &&
        state.keypad === true
        // Object.values(state).includes(true)
    ) {
        console.log("test");
        imageSection[0].style.display = "none";
        // textSection[0].style.display = "none";
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
        // test[0].style.display = "block";
        blackBox[0].style.display = "block";
        // textSection[0].style.display = "flex";
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

///INVENTORY///
/*------------------------------------*/

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

    playeritems = Object.assign(playeritems, option.setplayeritems);

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

function powers() {
    if (option.Text.values) {
        textNodes[0].options[0].ahhh();
    }
}

/////THIS SHOULD WORK!!!!
function check4() {
    if (textElement.innerText.includes("This thing is hot!")) {
        pushpsiPowers();
        nextPower1();
        disable();
    }

    function disable() {
        check4 = function () {};
    }
}

////////////////////TEST///////////////////////////

startGame();
