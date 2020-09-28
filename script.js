var timerEl = document.querySelector("#timer");
var defaultEl = document.querySelector("#default");

var startButton = document.querySelector(".start-button");

var quizEl = document.querySelector("#quizContainer");
var resultMessage = document.querySelector("#resultMsg");

var highscoreEl = document.querySelector("#highScores");
var highscoreEl = document.querySelector("#saveScores");

//My timer ----- start on button "Start" click
// after click- hide button and direction to start quizz


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

  function initialize(){
    startButton.addEventListener("click", function(){
        toggleMessage(false);
        
        setTime();
        

        // startQuiz();

    });
  }  
  initialize();


let currentIndex = 0;

let quizAnswer = [
    {
      question: "Who invented JavaScript?",
      answers: [
         "Douglas Crockford",
         "Sheryl Sandberg",
         "Brendan Eich",
      ],
      correctAnswer: "Brendan Eich"
    },

    {
      question: "Which one of these is a JavaScript package manager?",
      answers: [
         "Node.js",
         "TypeScript",
         "npm",
      ],
        correctAnswer: "npm"
    },
        /*additional questions
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
         "Angular",
         "jQuery",
         "RequireJS",
         "ESLint",
      },
      correctAnswer: "ESLint"
    }
    */

  ];


  quizAnswer[currentIndex];
  function startQuiz(){

    currentIndex++;
  }






//   //recording score
//   localStorage.setItem('score', 'highscore');

//   //retirieve score and post to Highscore
//   let scoreHistory = localStorage.getItem('highscore');

//   //clear score
//   localStorage.clear()