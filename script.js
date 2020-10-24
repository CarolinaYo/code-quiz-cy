var timerEl = document.querySelector("#timer");
var startEl = document.querySelector(".content");

var startButton = document.querySelector(".start-button");

var quizEl = document.querySelector("#quizContainer");
var quizQuestion = document.querySelector("#quizQuestion");
var resultMessage = document.querySelector("#resultMsg");

var saveScoreEl = document.querySelector("#endOfQuiz");
var initialsEl = document.querySelector("#initials");
var currentScoreEl = document.querySelector("#currentScore");
var saveScoreEl = document.querySelector("#saveScore");

var highScoreEl = document.querySelector("#displayHighScore");
var displayScoresEl = document.querySelector(".displayScores");
var returnToQuizEl = document.querySelector("#returnToQuiz");
var clearScoreEl = document.querySelector("#clearScores");

var timeLeft = 60;
function setTime() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;

    
    //******************************************
    if (timeLeft === -1) {
      timerEl.textContent = 0;

      // alert("You have run out of time!");
      //function endOfGame; ***** need to build!

      clearInterval(timerInterval);
    }
  }, 1000);
}
//****************************************
function toggleMessage(show) {
  if (show) {
    startEl.classList.remove("hidden");
  } else {
    startEl.classList.add("hidden");
  }
}

function initialize() {
  startButton.addEventListener("click", function () {
    toggleMessage(false);
    setTime();
    showQuiz();
  });
}
initialize();

let currentIndex = 0;

let quizSet = [
  {
    question: "JavaScript file has an extension of?",
    answers: [".Java", ".js", ".javascript"],
    correctAnswer: 1,
  },

  {
    question: "Which fuction is used to parse a string into integer?",
    answers: ["Parse", "Int.Parse", "None"],
    correctAnswer: 2,
  },
];

// quizSet[currentIndex];
let currentScore = 0;

function showQuiz() {
  let question = document.querySelector("#question");
  let div = document.createElement("div");

  if (currentIndex < quizSet.length) {
    div.textContent = quizSet[currentIndex].question;
    question.appendChild(div);
  
    let quizAnswers = document.querySelector("#quizAnswers");
  
    let li;
    quizAnswers.innerHTML="";
  
    for (let i = 0; i < quizSet[currentIndex].answers.length; i++) {
      li = document.createElement("li");
      // li.textContent = quizSet[currentIndex].answers[i];
      
      li.textContent = (i + 1) + '. ' + quizSet[currentIndex].answers[i];
      //error message --
      li.dataset.correctAnswer = (i === quizSet[currentIndex].correctAnswer);
  
      li.addEventListener("click", function (event) {
        // console.log('Before correctAnswer: ', event.target.dataset.correctAnswer);
        // console.log('After correctAnswer: ', !!event.target.dataset.correctAnswer);
        let isCorrectAnswer = event.target.dataset.correctAnswer;
  
        let line = document.querySelector("#line");
        let hr = document.createElement("hr");
        let messageEl = document.querySelector("#message");
        let resultMsg = document.createElement("p");
        line.appendChild(hr);
        messageEl.appendChild(resultMsg);
  
        let correctMessage = document.createTextNode("Correct!");
        let incorrectMessage = document.createTextNode("Incorrect!");
  
        if (isCorrectAnswer) {
          console.log('correct answer');
          currentScore += 5;
          resultMsg.appendChild(correctMessage);
        } else {
          console.log('wrong answer');
          timeLeft = timeLeft - 10;
          resultMsg.appendChild(incorrectMessage);
        }
  
        console.log("is correct answer: ", isCorrectAnswer);
        //**********************************************
        //need to hide current quiz --- which is at quizSet[currentIndex];
        //need time delay;
        setTimeout(showQuiz(), 2000);
        
      });
  
      quizAnswers.appendChild(li);
    }
  
    currentIndex++;
    //show the next quiz
    toggleMessage(true);
  }

}

// End of game message
function endOfGame() {
  //display currentScore
 currentScoreEl.textContent = currentScore;

  //take initial
  //On event click, save initial and score to local storage and hide and cal finalPage
  // need click listener------>
  let scoreInfo = currentScore + initialsEl;
  localStorage.setItem('saveScore', 'scoreInfo');
  toggleMessage(true);
  finalDisplay();
}

function finalDisplay() {
  toggleMessage(false);
  //retrieve score and post to Highscore
    let scoreHistory = localStorage.getItem('saveScore');
//  display scoreHistory
displayScoresEl.texContent= scoreHistory;
 
//on click returnToQuiz button call ----->
//need click listener
  // function initialize();


//on click clearScore---------->
//need click listerner

  //clear score
    localStorage.clear;
  //
}
