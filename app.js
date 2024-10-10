let answers = document.querySelectorAll(".answer");
let QuestionList = [];
let answeredCorrect = document.getElementsByClassName("num");
const next = document.getElementById("next");
let Count = document.getElementById("corr");
After = document.querySelector(".after");
let text = document.getElementsByClassName("Text");
let nextButton = document.getElementById("next");
nextButton.addEventListener("click", Next);
let correctCount = 0;
let correctAnswerIndex = 0;
let Index = 0;
let image = document.getElementsByTagName("img")[0];
let question = document.getElementsByClassName("question")[0];
function OnClick() {
  if (this.innerText == QuestionList[Index].answs[correctAnswerIndex]) {
    After.classList.toggle("win");
    text.innerText = "Correct";
    correctCount += 1;
    correctCount += parseInt(answeredCorrect.innerHTML);
    answeredCorrect.innerText = toString(correctCount);
    index = QuestionList.indexOf(Index);
    QuestionList.pop(index, 1);
  } else {
    this.backgroundColor = "red";
    After.classList.toggle("win");
    text.innerText = "Wrong";
    index = QuestionList.indexOf(Index);
    QuestionList.pop(index, 1);
  }
  for (let i = 0; i < answers.length; i++) {
    answers[i].disabled = true;
  }
}
for (let i = 0; i < answers.length; i++) {
  answers[i].addEventListener("click", OnClick);
}
function Next() {
  SetScreen();
}
const questions = [
  {
    question: "Who is this guy?",
    correctAnswer: 0,
    img: "./media/Bob-Ross.jpg",
    answs: ["Bob Ross", "billy", "heather", "Rob"],
  },
  {
    question: "What is david Goggins known for?",
    img: "./media/David_Goggins.jpg",
    correctAnswer: 3,
    answs: [
      "A Opera Singer",
      "A Marine",
      "A Painter",
      "Being a Navy Seal and a runner.",
    ],
  },
  {
    question: "What is Fran Lebowitz known for?",
    img: "./media/Fran_Lebowitz.jpg",
    correctAnswer: 0,
    answs: [
      "Being an author.",
      "Baking",
      "Being rich",
      "Being a general in the Military",
    ],
  },
  {
    question: "Who is this guy?",
    img: "./media/frank-sinatra.jpg",
    correctAnswer: 0,
    answs: ["Frank Sinatra", "Master Cheif from Halo", "Bob Ross", "Mr. Klins"],
  },
  {
    question: "Who is this?",
    img: "./media/Preston.jpg",
    correctAnswer: 2,
    answs: ["Logan", "Aiden", "Preston", "Michael"],
  },
];
for (let i = 0; i < questions.length; i++) {
  QuestionList.push(...questions);
}

function SetScreen() {
  After.classList.toggle("after");
  for (let i = 0; i < answers.length; i++) {
    answers[i].disabled = false;
  }
  question = Math.floor(Math.random() * QuestionList.length);
  Index = question;
  correctAnswerIndex = QuestionList[question].correctAnswer;
  question.innerText = QuestionList[question].question;
  image.src = QuestionList[question].img;
  for (let i = 0; i < QuestionList[question].answs.length; i++) {
    answers[i].innerText = QuestionList[question].answs[i];
  }
}

SetScreen();
