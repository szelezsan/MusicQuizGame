/* List of questions */
const questions = [
    {
        question: 'What is the best selling album of all time from 1976 to 2018?',
        answers: [
            {text: 'Thrillers', correct: true},
            {text: 'Back in Black', correct: false},
            {text: 'Abbey Road', correct: false}
        ]
    },
    {
        question: 'Who is the lead singer of the British pop rock band Coldplay?',
        answers: [
            {text: 'Guy BerryMan', correct: false},
            {text: 'Chris Martin', correct: true},
            {text: 'Will Champion', correct: false}
        ]
    },
    {
        question: 'Who is the frontman of the band 30 Seconds to Mars?',
        answers: [
            {text: 'Mike Shinoda', correct: false},
            {text: 'Gerard Way', correct: false},
            {text: 'Jared Leto', correct: true}
        ]
    },
    {
        question: 'The band Muse released their first album, Showbiz, in what year?',
        answers: [
            {text: '2001', correct: false},
            {text: '2002', correct: false},
            {text: '1999', correct: true}
        ]
    },
    {
        question: 'Which rap group released the album "Straight Outta Compton"?',
        answers: [
            {text: 'Beastie Boys', correct: false},
            {text: 'Run-D.M.C.', correct: false},
            {text: 'N.W.A', correct: true},
        ]
    },
    {
        question: '"Some people call me the space cowboy" is the first line from what song?',
        answers: [
            {text: 'Fly like an Eagle', correct: false},
            {text: 'The Joker', correct: true},
            {text: 'Fandago', correct: false}
        ]
    },
    {
        question: 'Who was featured in the song "Words" by Feint?',
        answers: [
            {text: 'Anna Yvette', correct: false},
            {text: 'Veela', correct: false},
            {text: 'Laura Brehm', correct: true}
        ]
    },
    {
        question: 'From which country did the song "Gangnam Style" originate from?',
        answers: [
            {text: 'South Korea', correct: true},
            {text: 'North Korea', correct: false},
            {text: 'China', correct: false}
        ]
    },
    {
        question: 'Which 80s band is fronted by singer/guitarist Robert Smith?',
        answers: [
            {text: 'New Order', correct: false},
            {text: 'The Cure', correct: true},
            {text: 'The Smiths', correct: false}
        ]
    },
    {
        question: 'Which group performs the song "Crash into Me"?',
        answers: [
            {text: 'Phish', correct: false},
            {text: 'The Greatful Dead', correct: false},
            {text: 'Dave Matthews Band', correct: true}
        ]
    },
]

/* Starting game */
var startButton = document.getElementById('start-btn')
const nextButton =document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement= document.getElementById('answer-buttons')


/* Shuffling question, so they will be presented in different orders each time */
let shuffledQuestions, currentQuestionIndex

/* Starting game, by pressing Start button */
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
        const button= document.createElement('button')
        button.innerText= answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct= answer.correct
    }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        (answerButtonsElement.removeChild(answerButtonsElement.firstChild))
}

function selectAnswer(e) {
    const selectedButton= e.target
    const correct=  selectedButton.dataset.correct
    setStatus(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    });
    if (shuffledQuestions.length > currentQuestionIndex +1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText= 'Restart';
        startButton.classList.remove('hide');
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
}