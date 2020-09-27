var timerEl = document.querySelector("#timer");
var defaultEl = document.querySelector("#default");

var startButton = document.querySelector(".start-button");

var quizEl = document.querySelector("#quizContainer");
var resultMessage = document.querySelector("#resultMsg");

var highscoreEl = document.querySelector("#highScores");
var highscoreEl = document.querySelector("#saveScores");

//My timer ----- start on button "Start" click
// after click- hide button and direction to start quizz

startButton.addEventListener("click", setTime);
    var timeLeft = 10;
    function setTime() {
        var timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft;
        
            if(timeLeft === 0) {
            clearInterval(timerInterval);
            // sendMessage();
            }
        }, 1000);
    }

//Need to start after button click
function toggleMessage(show){
    if(show) {
        defaultEl.classList.remove("hidden");
    }else{
        defaultEl.classList.add("hidden");
    }
      
 }

let currentIndex = 0;

let quizAnswer = [
    {
      question: "Who invented JavaScript?",
      answers: [
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      ]
      correctAnswer: "c"
    },

    {
      question: "Which one of these is a JavaScript package manager?",
      answers: [
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      ] 
      correctAnswer: "c"
    },
        /*additional questions
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

  quizAnswer[currentIndex];
  function startQuiz(){

    



  }



    //Sample Quiz Questions - should appear after button start quiz click.
    //multiple choice need to have event listener


  //recording score
  localStorage.setItem('score', 'highscore');

  //retirieve score and post to Highscore
  let scoreHistory = localStorage.getItem('highscore');

  //clear score
  localStorage.clear()