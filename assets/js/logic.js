var startButton = document.querySelector("#start");
var timerElement = document.querySelector("#time");
var displayQuestions = document.querySelector("#questions")
var submit = document.querySelector("#submit")
var startScreen = document.querySelector("#start-screen")
// var QTitle = document.querySelector("#question-title")
var answerChoice = document.querySelector("#choices")
var endScreen = document.querySelector("#end-screen")
var finalScore = document.querySelector("#final-score")


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
    // does this need to be a whole while-loop, for-loop or an if loop (ifqNumber =10 then go to end screen, otherwise do the following)limited to up to question 10 and at last question goes to end screen?
    //start with index 0; 
    for (x = 0; x < quizQuestions.length; x++) { // remove loop just to have one displayed. 
        // how to get it so it only shows one q&a at a time rather than all together at once?
        var qNumber = 0 + x; // 0+x for loops
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

// TO DO:
// tidy up the loop / if statement for the whole questions loop -> make sure that they clear each time, but display the next one
// event listener results button to get to the high scores page
// display highest score from local storage


//add a 'correct' message at the bottom of the answers
function correct() {
    const correctMessage = document.createElement("h3");
    correctMessage.textContent = "Well done! That's correct"
    displayQuestions.appendChild(correctMessage);
    correctMessage.style = "color: green"
    console.log(correctMessage)
}

//add an 'incorrect' message at the bottom of the answers
function incorrect() {
    secondsLeft = secondsLeft - 10
    const incorrectMessage = document.createElement("h3");
    incorrectMessage.textContent = "That's incorrect"
    displayQuestions.appendChild(incorrectMessage);
    incorrectMessage.style = "color: red"
    console.log(incorrectMessage)
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
submit.addEventListener("submit", submitResults)
function submitResults(event) {
    // event.preventDefault()
    // localStorage.setItem("initials");
    location.href = "https://www.google.com"
};

function resultsBoard() {

    //event listener? go to highscores
};