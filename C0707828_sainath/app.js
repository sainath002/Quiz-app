function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Which one is not an object oriented programming language?", ["Java", "C#","C++", "C"], "C"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("There are ____ main components of object oriented programming.", ["1", "6","2", "4"], "4"),
    new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework"),
    new Question("fullform of OOP is ____",["object oriented programming", "obstacle oriented programming", "oriented object programming", "one object programming"],"object oriented programming"),
    new Question("Which of the following jQuery method sets the text of an element?",["setText( val )", "setContent( val )", "The text( val )", "None of the above."], "The text( val )"),
    new Question("Which built-in method returns the character at the specified index?  ",["characterAt()", "getCharAt()", " charAt()", "None of the above."], "charAt()"),
    new Question("Which built-in method sorts the elements of an array? ",["changeOrder(order)", "order()", "sort()", "None of the above."], "sort()"),
    new Question(" Which of the following jQuery method removes all child nodes from the set of matched elements? ",["delete( )", " remove( expr )", " empty( ) ", "None of the above"], "empty( ) "),
    new Question(" Which of the following jQuery method sets the width property of an element? ",["setCSSWidth( value )", "setWidth( value)", " width( value ) ", "None of the above"], " width( value ) "),
    new Question("  Which of the following jQuery method setups global settings for AJAX requests? ",[" jQuery.ajax( options )", " jQuery.ajaxSetup( options ) ", "serialize( )", "None of the above"], " jQuery.ajaxSetup( options ) "),
    new Question(" Which of the following jQuery method removes all child nodes from the set of matched elements?  ",[" delete( )", " empty( )", "remove( expr )", "None of the above"], " empty( )"),
    new Question(" Which of the following jQuery method stops the rest of the event handlers from being executed?",["preventDefault( )", "stopImmediatePropagation()", "stopPropagation( )", "None of the above."], "stopImmediatePropagation()"),
    new Question("Which of the following jQuery method returns true if the specified class is present on at least one of the set of matched elements?  ",["hasCSSClass( class )", "hasstyleClass( class )", "hasClass( class )", "None of the above"], "hasClass( class )"),
    
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





