const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;
let quizScore = 0;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
  quizScore = 0;
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonElement.appendChild(button);
  });
}

function resetState() {
  clearStatusElement(document.body);
  nextButton.classList.add("hide");
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;

  setStatusClass(document.body, correct);
  Array.from(answerButtonElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }

  if (correct === "true") {
    quizScore++;
  }
  document.getElementById("right-answers").innerText = quizScore;
}

function setStatusClass(element, correct) {
  clearStatusElement(element);
  if (correct === "true") {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusElement(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "Which keyword is used to declare a block-scoped variable?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: true },
      { text: "const", correct: false },
      { text: "define", correct: false },
    ],
  },
  {
    question: "Which one of these is a javascript framework?",
    answers: [
      { text: "Python", correct: false },
      { text: "Django", correct: false },
      { text: "React", correct: true },
      { text: "Eclipse", correct: false },
    ],
  },
  {
    question: "Who is the prime minister of India?",
    answers: [
      { text: "Rahul Gandhi", correct: false },
      { text: "Narendra Modi", correct: true },
      { text: "Manmohan Singh", correct: false },
      { text: "Indira Gandhi", correct: false },
    ],
  },
];
