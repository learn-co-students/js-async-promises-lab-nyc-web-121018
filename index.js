const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question){
  let questionHtml =
  `${question.questionText}`

  document.querySelector('.question-container').innerText = questionHtml
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(question)
    }, time)
  })

}

function removeQuestion() {
  return new Promise(function(){
    let container = document.querySelector('.question-container')
    container.innerHTML = ''
  })
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons() {
  return document.querySelector('.true-false-list').children
}

function toggleTrueAndFalseButtons() {
  buttons = document.querySelector('.true-false-list').children


  for (let button of buttons){
    if (button.classList.contains('hide')) {
      button.classList.remove('hide')
    } else {
      button.classList += ' hide'
    }
  }
}


document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed")


    let btn = document.querySelector('a')
    return btn.addEventListener('click', function(e) {
      console.log('hello')
      toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
    })



});
