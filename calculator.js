// Select input fields and buttons
const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const result = document.querySelector("#result");

let num1 = 0;
let num2 = 0;

console.log("Calculator initialized!");

// Update `num1` and `num2` when inputs change
number1.addEventListener("input", (event) => {
    num1 = parseFloat(event.target.value); // Default to 0 if input is invalid
});

number2.addEventListener("input", (event) => {
    num2 = parseFloat(event.target.value); // Default to 0 if input is invalid
});

// Arithmetic functions
function add() {
    result.textContent = `Result: ${num1 + num2}`;
}

function subtract() {
    result.textContent = `Result: ${num1 - num2}`;
}

function multiply() {
    result.textContent = `Result: ${num1 * num2}`;
}

function divide() {
    if (num2 === 0) {
        result.textContent = "Error: Division by zero is not allowed.";
    } else {
        result.textContent = `Result: ${num1 / num2}`;
    }
}

// Attach event listeners to buttons
addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtract);
multiplyButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);