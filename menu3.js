const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

optionButtonsElement.addEventListener("click", () => {
    deleteValue2();
    pullValue();
    check();
    check2();
    check3();
    check4();
    check5();
    type();
});

burger.addEventListener("click", () => {
    toggleFlag ? first() : second();
    toggleFlag = !toggleFlag;
    console.log("working");
});

let toggleFlag = true;

function first() {
    nav.classList.toggle("nav-active");
    deleteValue2();
    if ("nav-active") pullValue();

    ///Burger Animation///
    burger.classList.toggle("toggle");
}

///DELETE ITEMS WHEN OFF SCREEN///
/*------------------------------------*/
function second() {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
    deleteValue();
}

var delayInMilliseconds = 1000;

var delayInMilliseconds2 = 5000;

setTimeout(function deleteValue() {
    document.getElementById("inventory").innerHTML = "";
}, delayInMilliseconds);

function deleteValue2() {
    document.getElementById("inventory").innerHTML = "";
}

/*------------------------------------*/
