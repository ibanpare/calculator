let firstNumber = "";
let operator = "";
let secondNumber = "";
const screen = document.querySelector("#screen");
const digits = document.querySelectorAll(".digit");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

function recordClickedDigits() {
    digits.forEach((button) => {
        button.addEventListener("click", (e) => {
            screen.textContent += e.target.textContent;
        })
    })
}

recordClickedDigits();

/* 
da sistemare

puoi mettere due virgole e bisogna evitarlo
css dello screen incluso flexbox
move to step 6 of exercise after
*/