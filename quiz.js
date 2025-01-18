function checkAnswer() {

  let correctAnswer = "4";

  const user = document.querySelector('input[name="quiz"]:checked'); 
  let userAnswer = user.value;

  const tab = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
      tab.textContent = "Correct! Well done.";
    } else {
      tab.textContent = "That's incorrect. Try again!";
    }
}


const eventlisten = document.getElementById("submit-answer");

eventlisten.addEventListener("click", checkAnswer);