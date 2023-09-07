let inp = document.querySelector(".inpColor");
let pbCol = document.querySelector(".pbSetColor");
let bdy = document.querySelector("body");

let inpColorValue = document.querySelector(".inpColorValue");
let inpColorPicker = document.querySelector(".inpColorPicker");
pbCol.textContent = "Tryk mig for at set color";

function setBackgroundColor() {
    let col = inp.value;
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
}

function useColorPicker() {
    let col = inpColorPicker.value
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
}

pbCol.addEventListener('click', setBackgroundColor);
inpColorPicker.addEventListener('input', useColorPicker);

