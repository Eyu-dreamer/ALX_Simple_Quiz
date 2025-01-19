// Function Declaration
function checkAnswer() {
    // Step 1: Define the correct answer
    const correctAnswer = "4";

    // Step 2: Retrieve the user's answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 3: Check if an option is selected
    if (selectedOption) {
        const userAnswer = selectedOption.value; // Get the value of the selected option

        // Step 4: Compare user's answer with the correct answer
        const feedbackElement = document.getElementById("feedback");
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        // Handle the case when no option is selected
        document.getElementById("feedback").textContent =
            "Please select an answer before submitting.";
    }
}

// Step 5: Add event listener to the submit button
document
    .getElementById("submit-answer")
    .addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default form submission
        checkAnswer(); // Call the checkAnswer function
    });