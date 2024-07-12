const SIBI_QUIZ_SULIT = [
    {
        question: "1. Kalimat apa ini?",
        media: "<video width='320' height='240' controls><source src='(Sulit) Membacakan.mp4' type='video/mp4'></video>",
        answers: ['Membacakan', 'Membacalah', 'Menuliskan', 'Menulislah'],
    },
    {
        question: "2. Kalimat apa ini?",
        media: "<video width='320' height='240' controls><source src='(Sulit) pagi ini aku belajar.mp4' type='video/mp4'></video>",
        answers: ['Siang ini aku bermain', 'Pagi ini aku belajar', 'Siang ini aku belajar', 'Pagi ini aku bermain'],
    },
    {
        question: "3. Membentuk kata apa ini?",
        media: "<video width='320' height='240' controls><source src='(Sulit) Berapa harga rumah itu.mp4' type='video/mp4'></video>",
        answers: ['Bagaimana rumah itu', 'Berapa rumah itu', 'dimana rumah itu', 'Berapa harga rumah itu'],
    },
    {
        question: "4. Membentuk kata apa ini?",
        media: "<video width='320' height='240' controls><source src='(Sulit) Dimana Rumah makan itu.mp4' type='video/mp4'></video>",
        answers: ['Dimana makanan itu', 'Dimana rumah makan itu', 'Dimana rumah mu', 'Dimana rumah ayahmu'],
    },
    {
        question: "5. Membentuk kata apa ini?",
        media: "<video width='320' height='240' controls><source src='(Sulit) Selamat ulang tahun kakak dan adik.mp4' type='video/mp4'></video>",
        answers: ['Selamat ulang tahun adik dan kakak', 'Selamat hari raya adik dan kakak', 'Selamat jalan kakak dan adik', 'Selamat ulang tahun kakak dan adik'],
    }
];

const CORRECT_ANSWER_SULIT = [0, 1, 3, 1, 3];
let userAnswers = [];

document.addEventListener("DOMContentLoaded", function() {
    setupQuestions();
});

function setupQuestions() {
    const quizContainer = document.getElementById('quiz-container');
    SIBI_QUIZ_SULIT.forEach((question, index) => {
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
    window.location.href = "lihat jawaban sulit.html";
}