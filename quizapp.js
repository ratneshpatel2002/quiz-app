
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        correct: 0
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Saturn", "Jupiter", "Uranus"],
        correct: 2
    },
    {
        question: "What is the smallest country in the world?",
        options: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
        correct: 0
    }
];

var questionText = document.getElementById("question-text");
var options = document.querySelectorAll(".option");
var resultText = document.getElementById("result-text");

var currentQuestion = 0;


function displayQuestion() {
  
    var question = quizData[currentQuestion];
    questionText.textContent = question.question;
    options.forEach((option, index) => {
        option.textContent = question.options[index];
    });
}


function checkAnswer(event) {
    var userAnswer = event.target.textContent;
    var correctAnswer = quizData[currentQuestion].options[quizData[currentQuestion].correct];
   
    if (userAnswer === correctAnswer) {
        resultText.textContent = "Correct!";
    } else {
        resultText.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        displayQuestion();
    } else {
        resultText.textContent = "Quiz complete!";
    }
}


document.querySelectorAll(".option").forEach(option => {
    option.addEventListener("click", checkAnswer);
});


displayQuestion();