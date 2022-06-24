let numContainer = document.getElementById("num");
let value = 0;

let btnInc = document.querySelector(".incrementa");
let btnDec = document.querySelector(".decrementa");
let btnReset = document.querySelector(".reset");

btnInc.addEventListener("click", () => {
    value++;
    numContainer.textContent = value;
    Color();
});

btnDec.addEventListener("click", () => {
    value--;
    numContainer.textContent = value;
    Color();
});

btnReset.addEventListener("click", () => {
    value = 0;
    numContainer.textContent = value;
    Color();
});

function Color() {
    if (numContainer.innerHTML > 0) {
        numContainer.style.color = "green";
    } else if (numContainer.innerHTML < 0) {
        numContainer.style.color = "red";
    } else {
        numContainer.style.color = "white";

    }
}