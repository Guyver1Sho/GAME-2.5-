//THIS IS A RECURSIVE FUNTION! 

const text = ["websites", "illustrations", "pancakes"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

var counter = 1;


function type() {
    // while (textElement.innerText.length < 1)
        while (counter <5) {
            counter++
            window.setTimeout(type, 1000);
        console.log("working")
//     if (count === textElement.length) {
//         count = 0;
// }
// currentText = text[count];
// currentText = textElement[count];
// currentText = textElement.textContent[count];
// currentText = textElement.innerText.textContent;
currentText = textElement.innerText;
// letter = currentText.slice(0, ++index);

//not working as intended
// letter = textElement.innerText.slice(0, ++index);
letter = textElement.innerText.slice(0);

// document.querySelector(".text").textContent = letter;
// textElement.innerText.textContent = letter;
textElement.innerText = letter;
// if (letter.length === currentText.length) {
if (letter.length === textElement.innerText.length) {
    // count++;
    index = 0;
}

setTimeout(type, 400);
}}

// (); 