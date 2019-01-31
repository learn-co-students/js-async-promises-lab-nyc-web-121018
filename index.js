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
    setTimeout((x)=> {resolve(x)}, time)
  })
}

function removeQuestion() {
  qContainer.innerHTML = ''
  return new Promise((resolve, reject) => {

  })
}

function askQuestionThenRemoveQuestion(time) {
  // console.log(time);
  // appendQuestion(question)
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(removeQuestion())}, time)
  // })
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons() {
  return buttons = document.querySelector('.true-false-list').querySelectorAll('.btn')
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(function(btn) {
    // btn.classList.toggle("hide")

    if (btn.className.includes('hide') === false) {
      btn.classList.add('hide')
      console.log('add hide');
    } else {
      btn.classList.remove('hide')
      console.log('remove hide');
    }
  })
}

function displayQuestionOnClick(time) {
  // askQuestionThenRemoveQuestion(time)
  // toggleTrueAndFalseButtons()
  let btn = document.querySelector('a')
  return btn.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
 })

}
