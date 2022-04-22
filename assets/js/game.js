//references to html variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');



//Functions

function makeQuiz(){}

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