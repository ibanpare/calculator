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

function updateScreen(content) {
    if(screen.textContent.includes(".") && (content == ".")) {
        screen.textContent = screen.textContent;
    } else
    {screen.textContent += content;}
}

function recordClickedDigits() {
    digits.forEach((button) => {
        button.addEventListener("click", (e) => updateScreen(e.target.textContent))
    })
}

recordClickedDigits();

/* 
Make the calculator work! You’ll need to store the first and second numbers input by the user and then operate() on them when the user presses the = button, according to the operator that was selected between the numbers.

You should already have the code that can populate the display, so once operate has been called, update the display with the result of the operation.

This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.


SE CLICCHI UNO TRA +, -, ecc
CONSERVA I CONTENUTI DELLO SCHERMO IN VARIABILE FIRST NUMBER
CONSERVA +, -, ecc IN OPERATOR
PULISCI SCHERMO
CONTINUA A REGISTRARE DIGITS E RIEMPIRE SCHERMO
FINCHE CLICCHI =
LI SALVA SCHERMO IN SECOND NUMBER
PULISCI SCHERMO
CHIAMA FUNZIONE IN BASE A OPERATOR
RIEMPI SCHERMO CON RISULTATO


BISOGNA FARE REFACTOR DI RECORD CLICKED DIGITS e FARLO SU TUTTI I BOTTONI, CON VARI CASI
AGGIORNANDO VARIABIL
*/