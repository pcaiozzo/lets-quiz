//references to html variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');



//Functions

function makeQuiz(){
  // variable to store HTML output
  const output = [];

// each question
myQuestions.forEach(
  (currentQuestion, questionNumber) => {

    // variable to store list of answers
    const answers = [];

    // for each available answer
    for(letter in currentQuestion.answers){

      // HTML radio button
      answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
    }

    // adding this question and the answers to output
    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
    );
  }
);
// combine output list into string of HTML and put on the page
quizContainer.innerHTML = output.join(' ');
}

function showResults(){}

//End of functions

//display quiz right when page loads
makeQuiz();

// on submit, show results
submitButton.addEventListener(' click ', showResults);

//Questions section
const myQuestions = [
{
  question: "question here",
  answers: {
    a: "one",
    b: "two",
    c: "three"
  },
  correctAnswer: "c"
},

{
  question: "question here",
  answers: {
    a: "one",
    b: "two",
    c: "three"
  },
  correctAnswer: "c"
},

{
  question: "question here",
  answers: {
    a: "one",
    b: "two",
    c: "three"
  },
  correctAnswer: "c"
},

{
  question: "question here",
  answers: {
    a: "one",
    b: "two",
    c: "three"
  },
  correctAnswer: "c"
},

{
  question: "question here",
  answers: {
    a: "one",
    b: "two",
    c: "three"
  },
  correctAnswer: "c"
},

];