const questions = [
    {
        question: "Wie heißt dieser Roboter?",
        options: ["NAO", "Pepper", "Turtlebot", "Panda"],
        answer: "Pepper"
    },
    {
        question: "Was ist eine Abkürzung für HTML?",
        options: ["Hyper Text Markup Language", "High Tech Machine Learning", "Happy Time with Monkeys", "Hello To My Land"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Für was steht 'KI'?",
        options: ["Künstliche Intelligenz", "Kluge Innovation", "Kreative Idee", "Kollektive Intuition"],
        answer: "Künstliche Intelligenz"
    },
    {
        question: "Was ist ein Algorithmus?",
        options: ["Ein großer Computer", "Eine spezielle Rechenoperation", "Ein bestimmtes Programm", "Eine mathematische Formel"],
        answer: "Eine spezielle Rechenoperation"
    },
    {
        question: "Was bedeutet 'HTTP'?",
        options: ["HyperText Transfer Protocol", "Highway To The Planet", "Halt Time, Please", "Help The Technology Progress"],
        answer: "HyperText Transfer Protocol"
    },
    {
        question: "Was ist ein 'Byte'?",
        options: ["Eine Verbindung im Internet", "Eine Art von Programmiersprache", "Eine Maßeinheit für Daten", "Ein kleines Insekt"],
        answer: "Eine Maßeinheit für Daten"
    },
    {
        question: "Was ist ein Betriebssystem?",
        options: ["Eine Software, die den Betrieb eines Computers ermöglicht", "Ein Computer für den Betrieb", "Ein elektronisches Handbuch", "Ein Bürogebäude für Computersysteme"],
        answer: "Eine Software, die den Betrieb eines Computers ermöglicht"
    },
    {
        question: "Was ist ein 'Router'?",
        options: ["Ein elektronisches Werkzeug", "Ein Gerät zur Datenübertragung zwischen Computernetzwerken", "Ein Programm zum Zeichnen von Linien", "Ein Bestandteil eines Autos"],
        answer: "Ein Gerät zur Datenübertragung zwischen Computernetzwerken"
    },
    {
        question: "Was ist 'Open Source Software'?",
        options: ["Software, deren Quellcode öffentlich zugänglich ist", "Software, die nur mit einem speziellen Schlüssel geöffnet werden kann", "Eine besonders teure Software", "Eine Software nur für staatliche Organisationen"],
        answer: "Software, deren Quellcode öffentlich zugänglich ist"
    },
    {
        question: "Was bedeutet 'URL'?",
        options: ["Universal Research Link", "Uniform Resource Locator", "Unique Radio Location", "Ultimate Reality Location"],
        answer: "Uniform Resource Locator"
    }
];

var currentQuestion = 0;
var score = 0;

var questionElement = document.getElementById('question');
var optionsElement = document.getElementById('options');
var resultElement = document.getElementById('result');
var nextButton = document.getElementById('nextButton');

function displayQuestion() {
    questionElement.innerHTML = questions[currentQuestion].question;

    var options = questions[currentQuestion].options;
    for (var i = 0; i < options.length; i++) {
        var optionButton = document.getElementById('option' + i);
        optionButton.innerHTML = options[i];
        optionButton.onclick = function(optionIndex) {
            return function() {
                checkAnswer(optionIndex);
            };
        }(i);
    }
}

function checkAnswer(optionIndex) {
    var selectedOption = questions[currentQuestion].options[optionIndex];
    var correctAnswer = questions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
        score++;
        resultElement.innerHTML = 'Richtig!';
    } else {
        resultElement.innerHTML = 'Falsch!';
    }
    nextButton.disabled = false;
    disableOptions();
}

function disableOptions() {
    for (var i = 0; i < 4; i++) {
        var optionButton = document.getElementById('option' + i);
        optionButton.disabled = true;
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
        resultElement.innerHTML = '';
        nextButton.innerHTML = 'Nächste Frage';
        nextButton.disabled = true;
        enableOptions();
    } else {
        endQuiz();
    }
}

function enableOptions() {
    for (var i = 0; i < 4; i++) {
        var optionButton = document.getElementById('option' + i);
        optionButton.disabled = false;
    }
}

function endQuiz() {
    optionsElement.style.display = "none";
    questionElement.innerHTML = 'Quiz beendet! Du hast ' + score + ' von ' + questions.length + ' Fragen richtig beantwortet.';
    resultElement.innerHTML = '';
    nextButton.innerHTML = 'Spiel neustarten';
    nextButton.onclick = resetQuiz;
}

function resetQuiz() {
    optionsElement.style.display = "block";
    currentQuestion = 0;
    score = 0;
    displayQuestion();
    nextButton.innerHTML = 'Nächste Frage';
    nextButton.onclick = nextQuestion;
    enableOptions();
}

displayQuestion();
