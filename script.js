let firstNumber = "";
let operator = "";
let secondNumber = "";
const screen = document.querySelector("#screen");
const buttons = document.querySelectorAll(".button");
const clearButton = document.querySelector("#clear");

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
  switch (operator) {
    case "+":
      return roundNumber(add(a, b));
    case "-":
      return roundNumber(subtract(a, b));
    case "X":
      return roundNumber(multiply(a, b));
    case "/":
      return roundNumber(divide(a, b));
  }
}

function roundNumber(number) {
  if (!Number.isInteger(number)) return number.toFixed(4);
  else return number;
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
      else if (e.target.innerText == "AC") {
        cleanScreen();
        firstNumber = "";
        secondNumber = "";
        operator = "";
      } else if (e.target.innerText == "⌫") {
        screen.innerText = screen.innerText.slice(
          0,
          screen.innerText.length - 1
        );
      } else if (e.target.innerText == "%") {
        let newNumber = parseFloat(screen.innerText) / 100;
        cleanScreen();
        updateScreen(newNumber);
      } else if (e.target.innerText == "+/-") updateScreen("+/-");
      else if (e.target.innerText == "=") {
        if (firstNumber == "" || operator == "" || screen.innerText == "")
          return;
        else {
          secondNumber = screen.innerText;
          cleanScreen();
          updateScreen(operate(firstNumber, secondNumber, operator));
          firstNumber = screen.innerText;
          secondNumber = "";
          operator = "";
        }
      } else {
        if (firstNumber) {
          if (firstNumber == screen.innerText) cleanScreen();
          updateScreen(e.target.innerText);
        } else {
          updateScreen(e.target.innerText);
        }
      }
    });
  });
}

runCalculator();
