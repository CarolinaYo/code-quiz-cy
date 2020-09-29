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
        
        if(timeLeft === -1) {

        timerEl.textContent = 0;
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
      question: "JavaScript file has an extension of?",
      answers: [
         "a. .Java",
         "b. .js",
         "c. .javascript",
      ],
      correctAnswer: 1
    },

    {
      question: "Which fuction is used to parse a string into integer?",
      answers: [
         "a. Parse",
         "b. Int.Parse",
         "c. None",
      ],
        correctAnswer: 3
    },
     
  ];


  quizSet[currentIndex];

  function startQuiz(){

 
    let question = document.querySelector("#question");
    let div = document.createElement("div");

    div.textContent = quizSet[currentIndex].question;
    question.appendChild(div);
    
    
    let quizAnswers = document.querySelector("#quizAnswers");

    let score;
    let newScore;

    let li;
    
    for (let i = 0; i < quizSet[currentIndex].answers.length; i++) {
        li = document.createElement("li");
        li.textContent = quizSet[currentIndex].answers[i];
        quizAnswers.appendChild(li);
        
        let line = document.querySelector("#line");
        let messageEl = document.querySelector("#message")
        
        quizAnswers.addEventListener("click", function(e){
              
              if (e.target.li === quizSet[correctAnswer]) {
                let hr = document.createElement("hr");
                line.appendChild(hr);
                let resultMsg = document.createElement("p");
                resultMsg.textContent = "Correct!";
                messageEl.appendChild(resultMsg);
                score = score + 10;
                newScore = score;
                 
              }else{
                let hr = document.createElement("hr");
                line.appendChild(hr);
                let resultMsg = document.createElement("p");
                resultMsg.textContent = "Incorrect!";
                messageEl.appendChild(resultMsg);
                timeLeft = timeLeft - 5;
                
              }
      
      
          })

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