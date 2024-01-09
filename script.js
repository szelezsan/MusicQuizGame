/* Starting game */
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement= document.getElementById('answer-buttons')


/* Shuffling question, so they will be presented in different orders each time */
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame(){
    startButton.classList.add('hide')
    /*Shuffling questions in random orders*/
    shuffledQuestions = questions.sort(() => Math.random()- .5)
    currentQuestionIndex= 0
    questionContainerElement.classList.remove('hide')
    /* Setting up showing next question */
    setNextQuestion()
}

function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer(){

}

/* List of questions */
const questions = [
    {
        question: 'What is the best selling album of all time from 1976 to 2018';
        answers: [
            {text: 'Thrillers', correct: true}
            {text: 'Back in Black', correct: false}
            {text: 'Abbey Road', correct: false}
        ]
    }
]