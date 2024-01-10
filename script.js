/* Starting game */
const startButton = document.getElementById('start-btn')
const nextButton =document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement= document.getElementById('answer-buttons')


/* Shuffling question, so they will be presented in different orders each time */
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', ()=> {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    /* Hiding Start button after starting the game */
    startButton.classList.add('hide')
    /*Shuffling questions in random orders*/
    shuffledQuestions = questions.sort(() => Math.random()- .5)
    currentQuestionIndex= 0
    questionContainerElement.classList.remove('hide')
    /* Setting up showing next question */
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button= dosument.createElement('button')
        button.innerText= answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct= answer.correct
    }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        (answerButtonsElement.removeChild(answerButtonsElement.firstChild))
}

function selectAnswer(){
    const selectButton= e.target
    const correct=  selectedButton.dataset.correct
    setStatus(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.lenght > currentQuestionIndex +1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText= 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

/* List of questions */
const questions = [
    {
        question: 'What is the best selling album of all time from 1976 to 2018',
        answers: [
            {text: 'Thrillers', correct: true},
            {text: 'Back in Black', correct: false},
            {text: 'Abbey Road', correct: false}
        ]
    },
    {
        question: 'What is the best selling album of all time from 1976 to 2018',
        answers: [
            {text: 'Thrillers', correct: true},
            {text: 'Back in Black', correct: false},
            {text: 'Abbey Road', correct: false}
        ]
    },
    {
        question: 'What is the best selling album of all time from 1976 to 2018',
        answers: [
            {text: 'Thrillers', correct: true},
            {text: 'Back in Black', correct: false},
            {text: 'Abbey Road', correct: false}
        ]
    },
    {
        question: 'What is the best selling album of all time from 1976 to 2018',
        answers: [
            {text: 'Thrillers', correct: true},
            {text: 'Back in Black', correct: false},
            {text: 'Abbey Road', correct: false}
        ]
    },
    {
        question: 'What is the best selling album of all time from 1976 to 2018',
        answers: [
            {text: 'Thrillers', correct: true},
            {text: 'Back in Black', correct: false},
            {text: 'Abbey Road', correct: false}
        ]
    },
    {
        question: 'What is the best selling album of all time from 1976 to 2018',
        answers: [
            {text: 'Thrillers', correct: true},
            {text: 'Back in Black', correct: false},
            {text: 'Abbey Road', correct: false}
        ]
    },
    {
        question: 'What is the best selling album of all time from 1976 to 2018',
        answers: [
            {text: 'Thrillers', correct: true},
            {text: 'Back in Black', correct: false},
            {text: 'Abbey Road', correct: false}
        ]
    },
    {
        question: 'What is the best selling album of all time from 1976 to 2018',
        answers: [
            {text: 'Thrillers', correct: true},
            {text: 'Back in Black', correct: false},
            {text: 'Abbey Road', correct: false}
        ]
    },
    {
        question: 'What is the best selling album of all time from 1976 to 2018',
        answers: [
            {text: 'Thrillers', correct: true},
            {text: 'Back in Black', correct: false},
            {text: 'Abbey Road', correct: false}
        ]
    },
    {
        question: 'What is the best selling album of all time from 1976 to 2018',
        answers: [
            {text: 'Thrillers', correct: true},
            {text: 'Back in Black', correct: false},
            {text: 'Abbey Road', correct: false}
        ]
    },
]}