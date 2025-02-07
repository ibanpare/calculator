let firstNumber = "";
let operator = "";
let secondNumber = "";
const screen = document.querySelector("#screen");
const buttons = document.querySelectorAll(".button");

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
    a = parseFloat(a);
    b = parseFloat(b);
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

function updateScreen(content) {
  if (screen.innerText.includes(".") && content == ".") {
    screen.innerText = screen.innerText;
  } else if (content == "+/-") {
    if (screen.innerText[0] == "-")
      screen.innerText = screen.innerText.slice(1);
    else screen.innerText = `-${screen.innerText}`;
  } else {
    screen.innerText += content;
  }
}

function cleanScreen() {
    screen.innerText = "";
}

function storeOperator(clickedOperator) {
  operator = clickedOperator;
  firstNumber = screen.innerText;
  cleanScreen();
}

function runCalculator() {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.innerText == "+") storeOperator("+");
      else if (e.target.innerText == "-") storeOperator("-");
      else if (e.target.innerText == "/") storeOperator("/");
      else if (e.target.innerText == "X") storeOperator("X");
      else if (e.target.innerText == "AC") cleanScreen();
      else if (e.target.innerText == "%") {
        let newNumber = parseFloat(screen.innerText) / 100;
        cleanScreen();
        updateScreen(newNumber);
      } else if (e.target.innerText == "+/-") updateScreen("+/-");
      else if (e.target.innerText == "=") {
        if (firstNumber == "") return;
        else {
          secondNumber = screen.innerText;
          cleanScreen();
          updateScreen(operate(firstNumber, secondNumber, operator));
          firstNumber = "";
          secondNumber = "";
          operator = "";
        }
      } else {
        updateScreen(e.target.innerText);
      }
    });
  });
}

runCalculator();

/* 

MANCA COMPORTAMENTO DA ATTUARE DOPO IL RISULTATO, C'è solo il problema della digit che si accoda al risultato.

*/