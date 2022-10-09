// Quiz
//  -> score
//  -> questions
//  -> index
//  -> getQuestion(index);
//  -> checkOptionWithAnswer();
//  -> isFinished();

// --------------------------------
// Question
//   -> text
//   -> choices
//   -> answer
//   -> isCorrectAnswer(choice)

// --------------------------------

function Quiz(questions) {
  this.score = 0;
  this.questions = questions; //[Q1, Q2,...]
  this.questionIndex = 0; //0
}

//Get me the Question by Index
Quiz.prototype.getQuestionByIndex = function () {
  return this.questions[this.questionIndex];
};

//Verify the answer with option and goto next question.
Quiz.prototype.checkOptionWithAnswer = function (answer) {
  if (this.getQuestionByIndex().isCorrectAnswer(answer)) {
    this.score++;
  }
  this.questionIndex++;
};

//Checks wether the questions got over or not.
Quiz.prototype.isFinished = function () {
  return this.questionIndex === this.questions.length;
};

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
  return this.answer === choice;
};

function showScores() {
  var quizElement = document.getElementById("quiz");
//   console.log("quiz.score : ", quiz.score);
//   console.log("quiz.length : ", quiz.length);
  var resPercentage = (quiz.score / questions.length) * 100;
  var result = `<h1> Result </h1>
        <h2 id='score'> Your Scores: ${quiz.score} and mark percentage is ${resPercentage}% </h2>`;
  quizElement.innerHTML = result;
}

function loadQuestions() {
  if (quiz.isFinished()) {
    showScores();
  } else {
    // show question
    var questionElement = document.getElementById("question");
    var questionLoaded = quiz.getQuestionByIndex();
    questionElement.innerHTML = questionLoaded.text;

    //show options
    var choices = questionLoaded.choices;
    for (let idx = 0; idx < choices.length; idx++) {
      var choiceElement = document.getElementById("choice" + idx);
      choiceElement.innerHTML = choices[idx];

      var btnElement = document.getElementById("btn" + idx);
      btnElement.onclick = () => {
        quiz.checkOptionWithAnswer(choices[idx]);
        loadQuestions();
      };
    }
    showProgress();
  }
}

function showProgress() {
  var currQuestIndex = quiz.questionIndex + 1;
  var progressElement = document.getElementById("progress");
  progressElement.innerHTML = `Question ${currQuestIndex} of ${quiz.questions.length}`;
}

var questions = [
  new Question(
    "Who is the best Batsmen in India?",
    ["Virat", "Rahul", "Dhawan", "Rishabh"],
    "Virat"
  ),
  new Question(
    "Which language got maximum follwers?",
    ["JavaScript", "Java", "Phython", "Go"],
    "JavaScript"
  ),
  new Question(
    "What is the national animal of India?",
    ["Tiger", "Lion", "Elephat", "Cheetha"],
    "Tiger"
  ),
  new Question(
    "Which of the following is used in pencil?",
    ["Graphite", "Magnesium", "Iron", "Calcium"],
    "Graphite"
  ), 
  new Question(
    "What does JSON stand for ?",
    [
      "Java Simple Object Notation",
      "JavaScript Object Notation",
      "Java Semi Object Notation",
      "None of the above",
    ],
    "JavaScript Object Notation"
  ),
];

var quiz = new Quiz(questions);
loadQuestions();
