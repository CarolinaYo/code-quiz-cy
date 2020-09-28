var timerEl = document.querySelector("#timer");
var defaultEl = document.querySelector(".default-container");

var startButton = document.querySelector(".start-button");

var quizEl = document.querySelector("#quizContainer");
var quizQuestion = document.querySelector("#quizQuestion");
var resultMessage = document.querySelector("#resultMsg");

var highScoreEl = document.querySelector("#highScores");
var saveScoreEl = document.querySelector("#saveScores");


var timeLeft = 10;
    function setTime() {
        var timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft;
        
        if(timeLeft < 0) {
        alert("You have run out of time!");
        clearInterval(timerInterval);

        }
    }, 1000);
}

//Need to start after button click
//hidden not working

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
        startQuiz();

    });
  }  
  initialize();


let currentIndex = 0;

let quizSet = [
    {
      question: "Who invented JavaScript?",
      answers: [
         "a. Douglas Crockford",
         "b. Sheryl Sandberg",
         "c. Brendan Eich",
      ],
      correctAnswer: "c. Brendan Eich"
    },

    {
      question: "Which one of these is a JavaScript package manager?",
      answers: [
         "a. Node.js",
         "b. TypeScript",
         "c. npm",
      ],
        correctAnswer: "c. npm"
    },
     
  ];


  quizSet[currentIndex];

  function startQuiz(){

 
    let question = document.querySelector("#question");
    let div = document.createElement("div");

    div.textContent = quizSet[currentIndex].question;
    question.appendChild(div);
    
    
    let quizAnswers = document.querySelector("#quizAnswers");
    
    let li;
    for (let i = 0; i < quizSet[currentIndex].answers.length; i++) {
        li = document.createElement("li");
        li.textContent = quizSet[currentIndex].answers[i];
        quizAnswers.appendChild(li);
     }

    // quizAnswers.addEventListener("click");
        
        // if (e.target.li === correctAnswer) {
        //     resultMessage = "Correct!";
           
        // }else{
        //     resultMessage = "Incorrect!";
        //     timeLeft = timeLeft - 5;
        // }

    // });

//  function startQuiz(show){
//     if(show) {
//         quizEl.classList.remove("hidden");
//     }else{
//         quizEl.classList.add("hidden");
//     }
      
//  }

    currentIndex++;
  }






  //recording score
//   localStorage.setItem('score', 'highscore');

  //retirieve score and post to Highscore
//   let scoreHistory = localStorage.getItem('highscore');

  //clear score
//   localStorage.clear
// 