const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

let qContainer = document.querySelector('.question-container')
// qContainer.innerHTML =

function  appendQuestion(q) {
  qContainer.innerHTML = q.questionText
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise((resolve, reject) => {
    setTimeout(()=> {resolve()}, time)
  })
}

function removeQuestion() {
  qContainer.innerHTML = ''
  return new Promise((resolve, reject) => {

  })
}

function askQuestionThenRemoveQuestion(time) {
  // console.log(time);
  appendQuestion(question)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(removeQuestion())
    }, time)
  })
}

function trueAndFalseButtons() {
  return document.querySelector('.true-false-list').querySelectorAll('.btn')
}

function toggleTrueAndFalseButtons() {
  if (trueAndFalseButtons()[0].className.includes('hide') && trueAndFalseButtons()[1].className.includes('hide')) {
    trueAndFalseButtons().forEach(btn => btn.classList.remove('hide'))
  } else {
    trueAndFalseButtons().forEach(btn => btn.classList.add('hide'))
  }
}

function displayQuestionOnClick(time) {
  askQuestionThenRemoveQuestion(time)
  toggleTrueAndFalseButtons()

}
