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
    //start with index 0; 
    var qNumber = 0;
    var currentQ = "";
    currentQ = quizQuestions[qNumber].question;
    const QTitle = document.createElement("h2"); 
    const node = document.createTextNode(currentQ) // displays the question 
    QTitle.appendChild(node);
    const QElement = document.getElementById("question-title")
    QElement.appendChild(QTitle); //
    console.log(qNumber)

    // below only gives one answer. - either all answers in one button, or just one answer in one button
    for (let i = 0; i < quizQuestions[qNumber].answers.length; i++) {
        // append answer to button
        const ansButton = document.createElement("button");
        const node2 = document.createTextNode(quizQuestions[qNumber].answers[i])        
        const ansElement = document.getElementById("choices")
        ansButton.appendChild(node2);            
        ansElement.appendChild(ansButton);
        ansElement.style = "display:inline-block;; margin: 5px; cursor: pointer; font-size: 100%; border-radius: 5px; padding: 2px 10px; color: white; border: 0; transition: background-color 0.1s;"
        console.log(ansElement)    
        
        ansElement.addEventListener("click", validate)

        }
        
        let i=0
        const node2 = document.createTextNode(quizQuestions[qNumber].answers[i])        
        function validate() {
                if (node2.textContent == quizQuestions[qNumber].correctAnswer) {
                    console.log("this shows correct answer)")
                } else {
                    console.log("this is not the right answer")
                }
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
