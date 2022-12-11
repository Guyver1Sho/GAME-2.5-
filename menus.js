optionButtonsElement.addEventListener("click", () => {
    // deleteValue2();
    pullItem();
    check();
    check2();
    check3();
    check4();
    check5();
    type();
});

// optionButton4.addEventListener("click", () => {
//     // deleteValue2();
//     check4();
// });

psiButtonElement.addEventListener("click", () => {
    psiOn();
    play();
    // disablePsi();
    console.log("working");

    // document.getElementById("psiButton").disabled = true;
});

inventoryButtonElement.addEventListener("click", () => {
    inventoryOn();
    play();
    console.log("working");

    // document.getElementById("inventoryButton").disabled = true;
});

function inventoryOn() {
    inventory.classList.toggle("inventory");
    psiInventory.classList.toggle("psi-links");
    // if (psiInventory.classList.contains("psi-links-active")) {
    enablePsi();
    disableInventory();
}

function psiOn() {
    psiInventory.classList.toggle("psi-links");
    inventory.classList.toggle("inventory");
    // first1();
    play();
    // if (inventory.classList.contains("inventory-active")) {
    enableInventory();
    disablePsi();
}

// (first1 is not firing because of playerpsi thingy not being definded)

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

function disablePsi() {
    psiButtonElement.disabled = true;
}

function disableInventory() {
    inventoryButtonElement.disabled = true;
}

function enablePsi() {
    psiButtonElement.disabled = false;
}

function enableInventory() {
    inventoryButtonElement.disabled = false;
    console.log("working");
}

// if ((psiInventory.classList = "psi-links-active"))
