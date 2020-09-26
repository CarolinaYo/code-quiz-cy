var scoreEl = document.querySelector("#score");
var timerEl = document.querySelector("#timer");
var directionEl = document.querySelector(".quiz-direction");
var quizEl = document.querySelector(".quiz");
var startButton = document.querySelector(".start-button");

var resultsContainer = document.querySelector(".results");

//My timer ----- start on button "Start" click
// after click- hide button and direction

startButton.addEventListener("click", setTime);
    var timeLeft = 10;
    function setTime() {
        var timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Timer: " + timeLeft;
        
            if(timeLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
            }
        }, 1000);
    }

//Sample Quiz Questions - should appear after button start quiz click.
//multiple choice need to have event listener

quizEl = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },

    /*additional questions
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
    */

  ];