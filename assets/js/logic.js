var startButton = document.querySelector("#start");
var timerElement = document.querySelector("#time");
var displayQuestions = document.querySelector("#questions")
var submit = document.querySelector("#submit")
var startScreen = document.querySelector("#start-screen")
var QTitle = document.querySelector("h2")
var answerChoice = document.querySelector("#choices")

var secondsLeft = 71;


// A start button that when clicked a timer starts and the first question appears.
startButton.addEventListener("click", startQuiz)
function startQuiz(event) {
    startTimer();
    startScreen.className = "hide";
    displayQuestions.className = "visible"
    iterateQs() // this displays the answers at least.
    // displayQuestions.textContent = iterateQs()     // this does not display the questions.   
    // displayQuestions.setAttribute("display", "block")
    // displayQuestions.textContent = "testing"
}
// or displayquestions.textcontent = the iterate function?;

function iterateQs() {
    for (i = 0; i < quizQuestions.length; i++) {
        QTitle = quizQuestions[i].question;
        answerChoice = quizQuestions[i].answers;
        // QTitle.classList.add("h2")
        // answerChoice.classList.add("button choices")
        displayQuestions.textContent = QTitle + answerChoice //shows them both. Need to style them now and get them to only show up one at a time
        console.log(QTitle)
        console.log(answerChoice)
// append questiontitle to question div?
// create button element 
// link to answers 
// append to body
        // set the stylings for questions and answers --> will this make them visible?

        // alert(quizQuestions[i].question); // this works, so i know this for loop will function.
        //display question
        //display answer buttons (style with choices / button classes)
    }
}

function startTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerElement.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            // endQuiz()
        }
    }, 1000)

};


//event listener --> endQuiz based on submit button.
function endQuiz(event) {
    // enter initials + submit
    event.preventDefault()
    // display score - end-screen class = visible?

};

function resultsBoard() {
    //event listener? go to highscores
};


// list of questions
// go through them in a loop 
// chosen answer --> create a variable where the index selected goes into it. then do an if loop to see if chosen answer and correct answer are equal. 
// correctAnswer --> proceed to next question
// incorrectAnswer --> deduct time 
// if (chosen answer !== correctAnswer) {
    // secondsLeft -10;
// }

// append list items/answers? style as buttons 
