var timerEl = document.querySelector("#timer");
var startEl = document.querySelector(".content");

var startButton = document.querySelector(".start-button");

var quizEl = document.querySelector("#quizContainer");
var quizQuestion = document.querySelector("#quizQuestion");
var resultMessage = document.querySelector("#resultMsg");

var highScoreEl = document.querySelector("#highScores");
var saveScoreEl = document.querySelector("#saveScores");

var timeLeft = 20;
function setTime() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft === -1) {
      timerEl.textContent = 0;
      alert("You have run out of time!");
      clearInterval(timerInterval);
    }
  }, 1000);
}

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
    answers: ["a. .Java", "b. .js", "c. .javascript"],
    correctAnswer: "b. .js",
  },

  {
    question: "Which fuction is used to parse a string into integer?",
    answers: ["a. Parse", "b. Int.Parse", "c. None"],
    correctAnswer: "c. None",
  },
];

quizSet[currentIndex];

function showQuiz() {
  let question = document.querySelector("#question");
  let div = document.createElement("div");

  div.textContent = quizSet[currentIndex].question;
  question.appendChild(div);

  let quizAnswers = document.querySelector("#quizAnswers");

  let li;

  for (let i = 0; i < quizSet[currentIndex].answers.length; i++) {
    li = document.createElement("li");
    li.textContent = quizSet[currentIndex].answers[i];
//error message -- li.dataset is nont a function
    li.dataset.correctAnswer =
      quizSet[currentIndex].answers[i] === quizSet[currentIndex].correctAnswer;

    li.addEventListener("click", function (event) {
      // alert("click works");
      let isCorrectAnswer = event.target.dataset.correctAnswer;

      let line = document.querySelector("#line");
      let hr = document.createElement("hr");
      let messageEl = document.querySelector("#message");
      let resultMsg = document.createElement("p");
      line.appendChild(hr);
      messageEl.appendChild(resultMsg);

      let correctMessage = document.createTextNode("Correct!");
      let incorrectMessage = document.createTextNode("Incorrect!");

      let currentScore = 0;

      if (isCorrectAnswer) {
        currentScore += 5;
        resultMsg.appendChild(correctMessage);

      } else {
        timeLeft = timeLeft - 5;
        resultMsg.appendChild(incorrectMessage);
      }
     //need to hide current quiz --- which is at quizSet[currentIndex];
      showQuiz();
    });

    quizAnswers.appendChild(li);
  }

  currentIndex++;
}

//recording score
//   localStorage.setItem('score', 'highscore');

//retirieve score and post to Highscore
//   let scoreHistory = localStorage.getItem('highscore');

//clear score
//   localStorage.clear
//
