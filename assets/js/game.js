const startQuizButton = document.getElementById("startQuizButton");
const answersContainer = document.getElementById("answersContainer");
const questionTitle = document.getElementById("question");
const answerButton1 = document.getElementById("answerButton1");
const answerButton2 = document.getElementById("answerButton2");
const answerButton3 = document.getElementById("answerButton3");
const answerButton4 = document.getElementById("answerButton4");
const solutionAnswer = document.getElementById("solutionAnswer");
const timerEl = document.querySelector("#timer");
const introductionSection = document.getElementById("introduction")

const myQuestions = {
  1: {
    question: "How old are you?",
    choices: ["12", "14", "15", "27"],
    answer: 3,
  },
  2: {
    question: "What is your name?",
    choices: ["bob", "frank", "gary", "sam"],
    answer: 2,
  },
  3: {
    question: "Where do you live?",
    choices: ["US", "Brazil", "Africa", "China"],
    answer: 0,
  },
};
let currentQuestion = 1;
let score = 0;
let scores = [];
let timeLeft = 75;

function answerQuestion(choice) {
  if (choice === myQuestions[currentQuestion].answer) {
    solutionAnswer.innerHTML = "CORRECT";
    score = score + 1;
  } else {
    solutionAnswer.innerHTML = "WRONG";
  }

  currentQuestion++;

  if (currentQuestion > 3) {
    console.log("DONE");
    scores.push(score);
  } else {
    populateQuestion();
  }
}

function populateQuestion() {
  questionTitle.innerHTML = myQuestions[currentQuestion].question;
  answerButton1.innerHTML = myQuestions[currentQuestion].choices[0];
  answerButton2.innerHTML = myQuestions[currentQuestion].choices[1];
  answerButton3.innerHTML = myQuestions[currentQuestion].choices[2];
  answerButton4.innerHTML = myQuestions[currentQuestion].choices[3];
  timerClock ();
}

function showAnswer() {
  answersContainer.style.display = "block";
}

function hideStartQuizButton() {
  startQuizButton.style.display = "none";
  introductionSection.style.display = "none";

}

function timerClock () {
  var timer = setInterval(function (){
    if(timeLeft <=0){
      clearInterval(timer);
      timerEl.innerHTML = "0";
      endGame(timeLeft);
    } else if (timeLeft === "done"){
      clearInterval(timer);
      timerEl.innerHTML = "0";
    } else {
      timerEl.innerHTML = timeLeft + "s";
    }
    timeLeft -= 1;
  }, 1000);
}

startQuizButton.addEventListener("click", showAnswer);
startQuizButton.addEventListener("click", hideStartQuizButton);
startQuizButton.addEventListener("click", populateQuestion);
answerButton1.addEventListener("click", () => {
  answerQuestion(0);
});
answerButton2.addEventListener("click", () => {
  answerQuestion(1);
});
answerButton3.addEventListener("click", () => {
  answerQuestion(2);
});
answerButton4.addEventListener("click", () => {
  answerQuestion(3);
});
