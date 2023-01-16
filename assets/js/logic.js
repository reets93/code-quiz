var startButton = document.querySelector("#start");
var timerElement = document.querySelector("#time");
var displayQuestions = document.querySelector("#questions")
var submit = document.querySelector("#submit")
var startScreen = document.querySelector("#start-screen")
// var QTitle = document.querySelector("#question-title")
var answerChoice = document.querySelector("#choices.button")

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
    var qNumber = 0;
    var currentQ = "";
    currentQ = quizQuestions[qNumber].question;
    const QTitle = document.createElement("h2");
    const qNode = document.createTextNode(currentQ) // displays the question in title area
    QTitle.appendChild(qNode);
    const QElement = document.getElementById("question-title")
    QElement.appendChild(QTitle);


    
    // iterates through the question answer and displays as separate buttons
    for (i = 0; i < quizQuestions[qNumber].answers.length; i++) {
        // append answers to separate buttons
        const ansButton = document.createElement("button");
        const aNode = document.createTextNode(quizQuestions[qNumber].answers[i]);
        const ansElement = document.getElementById("choices");
        ansButton.appendChild(aNode);
        ansElement.appendChild(ansButton);
        ansElement.style = "display:inline-block;; margin: 5px; cursor: pointer; font-size: 100%; border-radius: 5px; padding: 2px 10px; color: white; border: 0; transition: background-color 0.1s;"
        console.log(ansElement);
        console.log(i)
    }

    // validation
    // onclick(if (qNumber = 9){
    //     show result page
    // } else {
    //         if (selectedbutton ==true) {
    //          qnumber = qnumber +1
    //          add 'correct' message
    //          }else {
    //           q number = qnumber +1
    //          add 'incorrect' message
    //          secondsLeft -10
    // })}
}

    // below is needed as it is only stored locally above. if stored globally above then it all goes wrong. 

    const ansButton = document.createElement("button");
    const ansElement = document.getElementById("choices");
    ansElement.onclick = function validate(event) {
        console.log("testing this works")
        console.log(ansElement)
        // if (ansElement == quizQuestions[qNumber].correctAnswer) {
        //     console.log("this is the correct answer")
        // } else {
        //     console.log("this is the wrong answer")
        // }
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
