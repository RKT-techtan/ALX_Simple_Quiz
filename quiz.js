function checkAnswer() {

    const correctAnswer = "4";

    const answer = document.querySelector('name="quiz"');
    console.log()

    let userAnswer = answer.value;
        if (userAnswer === correctAnswer) {
          const feedback = document.getElementById("Correct! Well done.");
        } else {
          const feedback = document.getElementById("That's incorrect. Try again!");
        }

        const submitButton = document.getElementById('submit-answer'); 
        submitButton.addEventListener("click", checkAnswer);
}