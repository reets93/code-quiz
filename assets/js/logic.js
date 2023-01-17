var startButton = document.querySelector("#start");
var timerElement = document.querySelector("#time");
var displayQuestions = document.querySelector("#questions")
var submit = document.querySelector("#submit")
var startScreen = document.querySelector("#start-screen")
// var QTitle = document.querySelector("#question-title")
var answerChoice = document.querySelector("#choices")


var secondsLeft = 71;


// A start button that when clicked a timer starts and the first question appears.
startButton.addEventListener("click", startQuiz)
function startQuiz(event) {
    startTimer();
    startScreen.className = "hide";
    displayQuestions.className = "visible";
    iterateQs()
}

//displays the questions and answers
function iterateQs() {
    // does this need to be a whole for loop limited to up to question 10 and at last question goes to end screen?
    //start with index 0; 
    var qNumber = 0;
    var currentQ = "";
    currentQ = quizQuestions[qNumber].question;
    const QTitle = document.createElement("h2");
    const node = document.createTextNode(currentQ) // displays the question 
    QTitle.appendChild(node);
    const QElement = document.getElementById("question-title")
    QElement.appendChild(QTitle);

    // this for-loop is to create the answers for quizQuestion[qNumber] on separate buttons
    for (let i = 0; i < quizQuestions[qNumber].answers.length; i++) {
        // append answer to button
        const ansButton = document.createElement("button");
        const node2 = document.createTextNode(quizQuestions[qNumber].answers[i])
        const ansElement = document.getElementById("choices")
        ansButton.appendChild(node2);
        ansElement.appendChild(ansButton);
        ansElement.className = "answerOption"
        ansElement.style = "display:inline-block;; margin: 5px; cursor: pointer; font-size: 100%; border-radius: 5px; padding: 2px 10px; color: white; border: 0; transition: background-color 0.1s;"
    }

    var answerOption = document.querySelector(".answerOption")
    answerOption.addEventListener("click", function validate(event) {
        console.log(event.target.textContent)
        if (event.target.textContent == quizQuestions[qNumber].correctAnswer) {
            qNumber = qNumber+1;
            console.log("correct");
            console.log(qNumber)
        } else {
            qNumber = qNumber+1;
            console.log("incorrect")
            secondsLeft-10 //not working - fix
            console.log(qNumber)
            console.log(secondsLeft)
        }
    })

    // validation
    // onclick(if (qNumber = 9){
    //     show result page
    // } else {
    //         if (the selected button == correctAnswer) {
    //          qnumber = qnumber +1
    //          add 'correct' message
    //          }else {
    //           q number = qnumber +1
    //          add 'incorrect' message
    //          secondsLeft -10
    // })}
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