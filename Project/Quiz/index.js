
function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionByIndex = function() {
  return this.questions[this.questionIndex];
}

Quiz.prototype.checkOptionWithAnswer = function(answer) {
  if(this.getQuestionByIndex().isCorrectAnswer(answer)) {
      this.score++;
  }

  this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
  return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
  return this.answer === choice;
}


function loadQuestions() {
  if(quiz.isEnded()) {
      showScores();
  }
  else {
      // show question
      var element = document.getElementById("question");
      element.innerHTML = quiz.getQuestionByIndex().text;

      // show options
      var choices = quiz.getQuestionByIndex().choices;
      for(var i = 0; i < choices.length; i++) {
          var element = document.getElementById("choice" + i);
          element.innerHTML = choices[i];
          handleOptionButton("btn" + i, choices[i]);
      }

      showProgress();
  }
};

function handleOptionButton(id, choice) {
  var button = document.getElementById(id);
  button.onclick = function() {
      quiz.checkOptionWithAnswer(choice);
      loadQuestions();
  }
};


function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
  var gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + ".And mark percentage is: "+(quiz.score/questions.length*100)+"%"+"</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
  new Question("JavaScript supports", ["Functions", "XHTML","CSS", "HTML"], "Functions"),
  new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
  new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
  new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
  new Question("JavaScript is a ", ["Language", "Programming Language", "Development", "All"], "Programming Language")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
loadQuestions();