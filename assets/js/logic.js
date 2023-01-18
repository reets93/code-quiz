var startButton = document.querySelector("#start");
var timerElement = document.querySelector("#time");
var displayQuestions = document.querySelector("#questions")
var submit = document.querySelector("#submit")
var startScreen = document.querySelector("#start-screen")
var answerChoice = document.querySelector("#choices")
var endScreen = document.querySelector("#end-screen")
var finalScore = document.querySelector("#final-score")
var qTitle = document.querySelector('#question-title')

var secondsLeft = 71;

// A start button that when clicked a timer starts and the first question appears.
startButton.addEventListener("click", startQuiz)
function startQuiz(event) {
    startTimer();
    startScreen.className = "hide";
    displayQuestions.className = "visible";
    iterateQs()
}

var qNumber = 0;
var currentQ = "";

//displays the questions and answers
function iterateQs() {
    //start with index 0; 
    // for (x = 0; x < quizQuestions.length; x++) { // remove loop just to have one displayed. 
    // how to get it so it only shows one q&a at a time rather than all together at once?
if (qNumber>quizQuestions.length){
    endQuiz()
} else if (secondsLeft==0) {
    endQuiz()
} else {
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
        // ansElement.style = "display:inline-block;; margin: 5px; cursor: pointer; font-size: 100%; border-radius: 5px; padding: 2px 10px; color: white; border: 0; transition: background-color 0.1s;"
    }

    var answerOption = document.querySelector(".answerOption")
    answerOption.addEventListener("click", function validate(event) {
        console.log(event.target.textContent)
        if (event.target.textContent == quizQuestions[qNumber].correctAnswer) {
            // qNumber = qNumber + 1; // this is stored locally so not updating var qNumber = 0 when loops over
            console.log("correct");
            console.log(qNumber);
            correct()
        } else {
            // qNumber = qNumber + 1;
            console.log("incorrect");
            secondsLeft - 10;
            console.log(qNumber);
            console.log(secondsLeft);
            incorrect();
        }
    })
}
}

//add a 'correct' message at the bottom of the answers
function correct() {
    const correctMessage = document.createElement("h3");
    correctMessage.textContent = "Well done! That's correct"
    displayQuestions.appendChild(correctMessage);
    correctMessage.style = "color: green"
    console.log(correctMessage)
    qNumber = qNumber+1
    qTitle.innerHTML = ""
    answerChoice.innerHTML = ""
    iterateQs()
}

//add an 'incorrect' message at the bottom of the answers
function incorrect() {
    secondsLeft = secondsLeft - 10
    const incorrectMessage = document.createElement("h3");
    incorrectMessage.textContent = "That's incorrect"
    displayQuestions.appendChild(incorrectMessage);
    incorrectMessage.style = "color: red"
    console.log(incorrectMessage)
    qNumber = qNumber+1
    qTitle.innerHTML = ""
    answerChoice.innerHTML = ""
    iterateQs()
}

// timer function 
function startTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerElement.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endQuiz()
        }
    }, 1000)

};


//event listener --> endQuiz based on submit button.
function endQuiz(event) {
    displayQuestions.className = "hide";
    endScreen.className = "visible"
    finalScore.textContent = secondsLeft
    // enter initials + submit
}


// end screen submit     
submit.addEventListener("click", submitResults)
function submitResults(event) {
    event.preventDefault()
    window.location.href = "highscores.html"
    // resultsBoard()
};

function resultsBoard() {


};

//addeventlistener     
// clear highscores --> localStorage.clear()


// TO DO
// * fix loop for properly displaying questions / answers
// * local storage for initials 
// * retrieve from local storage on highscores 
// * append result to scoreboard
// * clear highscores button --> addeventlistener. clear