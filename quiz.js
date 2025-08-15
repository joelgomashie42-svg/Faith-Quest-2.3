const quizData = [
    { question: "Who led the Israelites out of Egypt?", options: ["Moses", "David", "Elijah", "Joshua"], answer: "Moses" },
    { question: "What is the first book of the Bible?", options: ["Genesis", "Exodus", "Leviticus", "Numbers"], answer: "Genesis" }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById("quiz-container");
loadQuestion();

function loadQuestion() {
    const q = quizData[currentQuestion];
    quizContainer.innerHTML = `<h2>${q.question}</h2>` +
        q.options.map(opt => `<button class="option" onclick="selectAnswer('${opt}')">${opt}</button>`).join("");
    
    updateProgressBar();
}

function selectAnswer(answer) {
    if (answer === quizData[currentQuestion].answer) score++;
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        localStorage.setItem("score", score);
        localStorage.setItem("totalQuestions", quizData.length);
        window.location.href = "results.html";
    }
}

function updateProgressBar() {
    document.getElementById("progress-bar").style.width =
        ((currentQuestion / quizData.length) * 100) + "%";
}
