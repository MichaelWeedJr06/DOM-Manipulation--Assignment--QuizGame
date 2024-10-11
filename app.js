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
let QuestionList = [];
QuestionList.push(...questions);

let answers = document.querySelectorAll(".answer");
let answeredCorrect = document.getElementById("num");
const next = document.getElementById("next");
let Count = document.getElementById("corr");
After = document.querySelector(".after");
let text = document.getElementsByClassName("Text")[0];
let nextButton = document.getElementById("next");
nextButton.addEventListener("click", Next);
let correctCount = 0;
let correctAnswerIndex;
let Index = 0;
let image = document.getElementsByTagName("img")[0];
let question = document.getElementsByClassName("question")[0];
for (let i = 0; i < answers.length; i++) {
  answers[i].addEventListener("click", OnClick);
  answers[i].classList.add("answerss");
}
function OnClick() {
  After.style.display = "block";
  //After.classList.toggle("win");
  if (QuestionList.length == 0) {
    for (let i = 0; i < answers.length; i++) {
      answers[i].style.display = "none";
      question.innerText = "Quiz Done!!!!";
    }
  }
  if (this.innerText === QuestionList[Index].answs[correctAnswerIndex]) {
    text.innerText = "Correct";
    this.classList.add("correct");
    correctCount += 1;
    answeredCorrect.innerText = correctCount;

    QuestionList.splice(Index, 1);
  } else {
    this.classList.add("wrong");
    for (let i = 0; i < answers.length; i++) {
      if (
        answers[i].innerText == QuestionList[Index].answs[correctAnswerIndex]
      ) {
        QuestionList.splice(Index, 1);
        answers[i].classList.add("correct");
      } else {
        text.innerText = "Wrong";
        QuestionList.splice(Index, 1);
      }
    }
  }
  for (let i = 0; i < answers.length; i++) {
    answers[i].classList.remove("answerss");
    answers[i].disabled = true;
  }
}
function CleanButtons() {
  for (let i = 0; i < answers.length; i++) {
    answers[i].classList.remove("correct");
    answers[i].classList.remove("wrong");
  }
}

function Next() {
  SetScreen();
}

function SetScreen() {
  After.style.display = "none";

  //After.classList.toggle("after");
  for (let i = 0; i < answers.length; i++) {
    answers[i].disabled = false;
  }
  CleanButtons();
  question = Math.floor(Math.random() * QuestionList.length);
  Index = question;
  correctAnswerIndex = QuestionList[Index].correctAnswer;
  question.innerText = QuestionList[Index].question;
  image.src = QuestionList[Index].img;
  for (let i = 0; i < QuestionList[question].answs.length; i++) {
    answers[i].innerText = QuestionList[question].answs[i];
  }
}
answeredCorrect.innerText = correctCount;
SetScreen();
