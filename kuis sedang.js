const SIBI_QUIZ_SEDANG = [
    {
        question: "1. Kalimat apa ini?",
        media: "<video width='320' height='240' controls><source src='(Sedang) Siapa itu.mp4' type='video/mp4'></video>",
        answers: ['Siapa dia', 'Siapa ini', 'Siapa kamu', 'Siapa itu'],
    },
    {
        question: "2. Kalimat apa ini?",
        media: "<video width='320' height='240' controls><source src='(Sedang) Belajar.mp4' type='video/mp4'></video>",
        answers: ['Belajar', 'Mengajar', 'Diajar', 'Pelajar'],
    },
    {
        question: "3. Membentuk kata apa ini?",
        media: "<video width='320' height='240' controls><source src='(Sedang) Saya makan.mp4' type='video/mp4'></video>",
        answers: ['Dia Makan', 'Saya Masak', 'Saya Makan', 'Dia Makan'],
    },
    {
        question: "4. Membentuk kata apa ini?",
        media: "<video width='320' height='240' controls><source src='(sedang) ayah saya membaca.mp4' type='video/mp4'></video>",
        answers: ['Ayah saya membaca', 'Kakek saya membaca', 'Ayah saya menulis', 'Kakek saya menulis'],
    },
    {
        question: "5. Membentuk kata apa ini?",
        media: "<video width='320' height='240' controls><source src='(sedang) ibu memasak.mp4' type='video/mp4'></video>",
        answers: ['ibu membaca', 'istri memasak', 'ibu memasak', 'istri membaca'],
    }
];

const CORRECT_ANSWER_SEDANG = [3, 0, 2, 0, 2];
let userAnswers = [];

document.addEventListener("DOMContentLoaded", function() {
    setupQuestions();
});

function setupQuestions() {
    const quizContainer = document.getElementById('quiz-container');
    SIBI_QUIZ_SEDANG.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question-block');
        
        const media = question.media;
        const questionText = `<p>${question.question}</p>${media}`;
        questionElement.innerHTML = questionText;

        const optionsContainer = document.createElement('div');
        optionsContainer.classList.add('options-container');

        question.answers.forEach((answer, idx) => {
            const button = document.createElement('button');
            button.classList.add('option');
            button.innerText = answer;
            button.onclick = () => selectAnswer(index, idx, button);
            optionsContainer.appendChild(button);
        });

        questionElement.appendChild(optionsContainer);
        quizContainer.appendChild(questionElement);
    });
}

function selectAnswer(questionIndex, selectedOption, button) {
    userAnswers[questionIndex] = selectedOption;

    // Remove the selected class from all buttons in the current question
    const currentQuestionButtons = button.parentElement.querySelectorAll('button');
    currentQuestionButtons.forEach(btn => btn.classList.remove('selected'));

    // Add the selected class to the clicked button
    button.classList.add('selected');
}

function submitQuiz() {
    localStorage.setItem('quizResults', JSON.stringify(userAnswers));
    window.location.href = "lihat jawaban sedang.html";
}