const submitAnswer = document.querySelector("#submit-answer");
const choice1 = document.querySelector("#choice1");
const choice2 = document.querySelector("#choice2");
const choice3 = document.querySelector("#choice3");
const feedback = document.querySelector("#feedback");
let correctAnswerChecked;

// Function to handle checkbox change (for choice1)
function checkboxChange1(event) {
    correctAnswerChecked = event.target.checked ? true : false;
}

// Function to handle checkbox change (for choice2)
function checkboxChange2(event) {
    correctAnswerChecked = event.target.checked ? false : false;
}

// Function to handle checkbox change (for choice3)
function checkboxChange3(event) {
    correctAnswerChecked = event.target.checked ? false : false;
}

// Attach event listeners to each checkbox
choice1.addEventListener("change", checkboxChange1);
choice2.addEventListener("change", checkboxChange2);
choice3.addEventListener("change", checkboxChange3);

// Event listener for the submit button
submitAnswer.addEventListener("click", () => {
    feedback.innerHTML = correctAnswerChecked ?
        "Correct! Well done." :
        "That's incorrect. Try again!";
});