

/* List of questions */
const questions = [
    {
        question: 'What is the best selling album of all time from 1976 to 2018?',
        answers: ['Thrillers', 'Back in Black', 'Abbey Road'],
        correctAnswer: 0
    },
    {
        question: 'Who is the lead singer of the British pop rock band Coldplay?',
        answers: ['Guy BerryMan', 'Chris Martin', 'Will Champion'],
        correctAnswer: 1
    },
    {
        question: 'Who is the frontman of the band 30 Seconds to Mars?',
        answers: ['Mike Shinoda', 'Gerard Way', 'Jared Leto'],
        correctAnswer: 2
    },
    {
        question: 'The band Muse released their first album, Showbiz, in what year?',
        answers: ['2001', '2002', '1999'],
        correctAnswer: 2
    },
    {
        question: 'Which rap group released the album "Straight Outta Compton"?',
        answers: ['Beastie Boys', 'Run-D.M.C.', 'N.W.A'],
        correctAnswer: 2
    },
    {
        question: '"Some people call me the space cowboy" is the first line from what song?',
        answers: ['Fly like an Eagle', 'The Joker', 'Fandago'],
        correctAnswer:1
    },
    {
        question: 'Who was featured in the song "Words" by Feint?',
        answers: ['Anna Yvette', 'Veela', 'Laura Brehm'],
        correctAnswer: 2
    },
    {
        question: 'From which country did the song "Gangnam Style" originate from?',
        answers: ['South Korea', 'North Korea', 'China'],
        correctAnswer:1
    },
    {
        question: 'Which 80s band is fronted by singer/guitarist Robert Smith?',
        answers: ['New Order', 'The Cure', 'The Smiths'],
        correctAnswer: 1
    },
    {
        question: 'Which group performs the song "Crash into Me"?',
        answers: ['Phish', 'The Greatful Dead', 'Dave Matthews Band'],
        correctAnswer:2
    },
]

/* Starting game */
const startButton = document.getElementById('start-btn');
const nextButton =document.getElementById('next-btn');
const questionContainer= document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement= document.getElementById('answer-buttons');



/* Shuffling question, so they will be presented in different orders each time */
let currentQuestionIndex;
let correctAnswer;

/* Starting game, by pressing Start button */
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame(){
    /* Hiding Start button after starting the game */
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    currentQuestionIndex= 0;
    answeeCorrect = 0;
    setNextQuestion()
}

function setNextQuestion(){
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}


function showQuestion(question) {
    questionElement.innerText = question.question;

    question.answer.forEach((answer, index ) => {
        const button= document.createElement('button');
        button.innerText= answer;
        button.classList.add('btn');

        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    
}

function selectAnswer(e) {
    const selectedButton= e.target
    const selectedAnswer= Array.from(answerButtonsElement.children).indexOf(selectedButton);

    const question= questions[currentQuestionIndex];
    if (selectAnswer ===question.correctAnswer) {
        selectedButton.classList.add("correct");
        answerCorrect++;
    }else {
        selectedButton.classList.add('wrong');
    }
}}

Array.from(answerButtonsElement.children).forEach((button) =>{
    button.disabled =true;
    if (button.classList.contains('correct')){
        button.style.backgroundColor = "green";
    } else {
        button.style.backgroundColor = 'red';
    }
});

if (currentQuestionIndex === questions.lenght - 1) {
    nextButton.innerText = "Finish";
}

if (currentQuestionIndex === -1) {
    nextButton.innerText = "Finish";
    nextButton.classList.remove('hide');
} else {
    nextButton.classList.remove('hide');
}