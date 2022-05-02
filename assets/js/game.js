//Varibles
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
const enterIntialsPrompt = document.getElementById("enterIntialsPrompt");
const submitButton = document.getElementById("submit");
const inputBox = document.getElementById("inputBox");
const scoresContainer = document.getElementById("scoresContainer");
const questionsContainer = document.getElementById("questionsContainer");
const highScoresContainer = document.getElementById("highScoresContainer");
const header = document.getElementById("header");


//Section for the questions
const myQuestions = {
  1: {
    question: "Commonly used data types DO NOT include?",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: 2,
  },
  2: {
    question:
      "The condition in an if / else statement is enclosed within _____.",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: 2,
  },
  3: {
    question: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "Unumbers and strings",
      "other arrays",
      "booleans",
      "square brackets",
    ],
    answer: 3,
  },
  4: {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: 2,
  },
  5: {
    question:
      "A very useful tool during development and debugging of printing content to the debugger is: ",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: 3,
  },
};

//the let section
let currentQuestion = 1;
let score = 0;
let scores = [];
let timeLeft = 75;

//Functions
function answerQuestion(choice) {
  if (choice === myQuestions[currentQuestion].answer) {
    solutionAnswer.innerHTML = "Correct";
    score = score + 1;
  } else {
    timeLeft -= 10;
    solutionAnswer.innerHTML = "Wrong";
  }

  currentQuestion++;

  if (currentQuestion > Object.keys(myQuestions).length) {
    scores.push(score);
    timeLeft = 0;
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
}

function showAnswer() {
  answersContainer.style.display = "block";
}

function hideStartQuizButton() {
  startQuizButton.style.display = "none";
  introductionSection.style.display = "none";
  timerClock();
}

function timerClock() {
  const timer = setInterval(() => {
    if (timeLeft <= 0){
      clearInterval(timer);
      timerEl.innerHTML = "0";
      endGame(timeLeft);
    } else {
      timerEl.innerHTML = timeLeft + "s";
    }
    timeLeft -= 1;
  }, 1000);
}

function endGame() {
questionTitle.innerHTML = "All Done!";
introductionSection.innerHTML = "Your final score is: " + score + ".";
enterIntialsPrompt.style.display = "inline";
inputBox.style.display = "inline";
submitButton.style.display = "inline";

introductionSection.style.display = "block";
answersContainer.style.display = "none";
}

function submitInitials() {
  const initials = inputBox.value;
  const data = {
    initials: initials,
    score: score
  };
  let currentHighScores = window.localStorage.getItem("scores");
  currentHighScores = currentHighScores === null ? [] : JSON.parse(currentHighScores);
  currentHighScores.push(data);
  window.localStorage.setItem("scores", JSON.stringify(currentHighScores));
showHighScores();
}

function showHighScores() {
  header.style.visibility = "hidden";
questionsContainer.style.display = "none";
highScoresContainer.style.display = "block";
let currentHighScores = window.localStorage.getItem("scores");
currentHighScores = currentHighScores === null ? [] : JSON.parse(currentHighScores);
currentHighScores.sort((a, b) => { return b.score - a.score });
currentHighScores.forEach((element, index) => {
  scoresContainer.innerHTML += ' <div class="score">' + (index + 1) + '. ' + element.initials + ' - ' + element.score + '</div>';
});
}

//addEventListener section
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
submitButton.addEventListener("click", submitInitials);