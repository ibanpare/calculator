let displayValue = "Start typing";
let calculationValue = "";
const display = document.querySelector("#display");
display.textContent = displayValue;

const buttons = document.querySelectorAll(".buttons div p");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
            updateDisplay(button.textContent);
            calculationValue += button.textContent;
        if(parseInt(button.textContent) === "NaN") {
            updateDisplay(button.textContent);
            calculationValue.push(button.textContent);
        };
    });
  });

const add = (a, b) => a + b;
const subtract = (a, b) => a -b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a/b;

function operate(a, b, operand) {
    if (operand === "+") return add(a, b);
    if (operand === "-") return subtract(a, b);
    if (operand === "X") return multiply(a, b);
    if (operand === "/") return divide(a, b);
}

//updates the display, need to add clear logic
// also needs to respect numbers higher than 10 .-.
function updateDisplay(content) {
    displayValue += content;
    display.textContent = displayValue;
}

function clearDisplay() {
    displayValue = "";
    display.textContent = displayValue;
}

// pseudocode
// con ogni click
// se click non è NaN
// display = i vari click 
// calculation value = il numero che si forma, il parseInt di display
// altrimenti se click è Nan
// prendi calcvalue e lo tieni da parte
// ricevi il secondo calcvalu



