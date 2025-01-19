// Arithmetic Functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Error: Division by zero";
    }
    return number1 / number2;
}

// Helper Function to Get Input Values
function getInputValues() {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    return { number1, number2 };
}

// Helper Function to Display Result
function displayResult(result) {
    document.getElementById("calculation-result").textContent = result;
}

// Event Listener Setup
function setupEventListeners() {
    const operations = [
        { id: "add", func: add },
        { id: "subtract", func: subtract },
        { id: "multiply", func: multiply },
        { id: "divide", func: divide },
    ];

    operations.forEach((operation) => {
        document
            .getElementById(operation.id)
            .addEventListener("click", function() {
                const { number1, number2 } = getInputValues();
                const result = operation.func(number1, number2);
                displayResult(result);
            });
    });
}

// Initialize Calculator
setupEventListeners();