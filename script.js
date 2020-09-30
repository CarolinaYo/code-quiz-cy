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

//hidden not working

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
    startQuiz();
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

function startQuiz() {
  let question = document.querySelector("#question");
  let div = document.createElement("div");

  div.textContent = quizSet[currentIndex].question;
  question.appendChild(div);

  let quizAnswers = document.querySelector("#quizAnswers");

  let score;
  let newScore;

  let li;
  let line = document.querySelector("#line");
  let hr = document.createElement("hr");
  let messageEl = document.querySelector("#message");
  let resultMsg = document.createElement("p");

  for (let i = 0; i < quizSet[currentIndex].answers.length; i++) {
    li = document.createElement("li");
    li.textContent = quizSet[currentIndex].answers[i];
    quizAnswers.appendChild(li);

    quizAnswers.addEventListener("click", function () {
      if (quizAnswers != correctAnswer) {
        line.appendChild(hr);

        resultMsg.textContent = "Incorrect!";
        messageEl.appendChild(resultMsg);
        timeLeft = timeLeft - 10;
      } else {
        line.appendChild(hr);
        resultMsg.textContent = "Correct!";
        messageEl.appendChild(resultMsg);
        score = score + 1;
        newScore = score;
      }
    });
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
