///CORE GAME///
const textElement = document.getElementById("text");
const imgElement = document.getElementById("room-image");
const optionButtonsElement = document.getElementById("option-buttons");
const optionButton1 = document.getElementById("button1");
const optionButton2 = document.getElementById("button2");
const optionButton3 = document.getElementById("button3");
const optionButton4 = document.getElementById("button4");
const button3 = document.getElementById("TEST");
const inventory = document.getElementById("inventory");
const itemContainer = document.getElementById("imageContainer");
// const x = document.getElementById("Music");
const imageSection = document.querySelectorAll(".image-section");
const screenContainer = document.querySelectorAll(".screencontainer");
const keypad = document.querySelectorAll(".keypad");
const blackBox = document.querySelectorAll(".Blackbox");
const textSection = document.querySelectorAll(".text");

//INVENTORY///
const itemText = document.getElementById("itemtext");
const itemText2 = document.getElementById("itemtext2");
const itemText3 = document.getElementById("itemtext3");

//PSI-INVENTORY///
const psiButtonElement = document.getElementById("psiButton");
const psiInventory = document.getElementById("psi-inventory");
const inventoryButtonElement = document.getElementById("inventoryButton");
const psi = document.querySelector(".psi-links");
const psiLinks = document.querySelectorAll(".psi-links li");
const back = document.getElementById("back");
const next = document.getElementById("Next");

//ITERATORS//

let t = 0;
let Z = 0;

//HEALTHBAR CONST//

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = (canvas.width = 420);
const height = (canvas.height = 70);

canvas.style.zIndex = "100";

// canvas.style.marginTop = window.innerHeight / 2 - height / 2 + "px";

let health = 100;
const healthBarWidth = 320;
const healthBarHeight = 30;
const x = width / 2 - healthBarWidth / 2;
const y = height / 2 - healthBarHeight / 2;

class HealthBar {
    constructor(x, y, w, h, maxHealth, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.maxHealth = maxHealth;
        this.maxWidth = w;
        this.health = maxHealth;
        this.color = color;
    }

    show(context) {
        context.lineWidth = 4;
        context.strokeStyle = "#333";
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.w, this.h);
        context.strokeRect(this.x, this.y, this.maxWidth, this.h);
    }

    updateHealth(val) {
        if (val >= 0) {
            this.health = val;
            this.w = (this.health / this.maxHealth) * this.maxWidth;
        }
    }
}

const healthBar = new HealthBar(
    x,
    y,
    healthBarWidth,
    healthBarHeight,
    health,
    "green"
);

const frame = function () {
    context.clearRect(0, 0, width, height);
    healthBar.show(context);
    requestAnimationFrame(frame);
};

canvas.onclick = function () {
    health -= 10;
    healthBar.updateHealth(health);
};

frame();
