let displayValue = "Start typing";
const display = document.querySelector("#display");
display.textContent = displayValue;

const buttons = document.querySelectorAll(".buttons div p");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        updateDisplay(button.textContent);
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
function updateDisplay(content) {
    displayValue = content;
    display.textContent = displayValue;
}




