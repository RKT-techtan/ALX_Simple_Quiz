//(1.)////////tick
function checkAnswer() {
    const correctAnswer = "4";
    //(2.)tick
    //(a)
    const answer = document.querySelector('name="quiz"');
    console.log()

    //example//
const paras = document.getElementsByClassName('p');
console.log(paras);
console.log(paras[1]);
    //example end//

    //(b.))////
    let userAnswer = answer.value;
//3///////tick
        if (userAnswer === correctAnswer) {
          feedback.textContent = "Correct! Well done."; 

          //change the textContent of the 
          //element with the ID feedback to "Correct! Well done.".

        } else {
          feedback.textContent = "That's incorrect. Try again!";
        }
//(4.)/////tick
document.getElementById = 'submit-answer';

submitButton.addEventListener("click", checkAnswer);
}