

/* List of questions */
const questions = [
    {
        question: 'What is the best selling album of all time from 1976 to 2018?',
        answers: ['Thriller', 'Back in Black', 'Abbey Road'],
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
        correctAnswer:0
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

/* Setting values */
const startButton = document.getElementById('start-btn');
const nextButton =document.getElementById('next-btn'); 
const questionContainer= document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement= document.getElementById('answer-buttons');
const finishButtonElement= document.getElementById('finish-btn');

let currentQuestionIndex;
let correctAnswer;
let score= 0;

/* Starting game, by pressing Start button */
startButton.addEventListener('click', startGame)(
    nextButton.classList.add('hide')
);

function startGame(){
    /* Hiding Start button after starting the game */
    startButton.classList.add("hide");
    
    finishButtonElement.classList.add('hide');

    nextButton.classList.add('hide');
    
    questionContainer.classList.remove("hide");
    currentQuestionIndex= 0;
    correctAnswer = 0;
    score= 0;
    console.log("startGame")
    setNextQuestion();
}


function setNextQuestion(){
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}


function showQuestion(question) {
   console.log("showQuestion")
   resetState();
   let currentQuestion = questions[currentQuestionIndex];
   let questionNo =currentQuestionIndex +1;
   questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach((answer, index ) => {
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
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}


function selectAnswer(e) {
    const selectedButton= e.target
    const selectedAnswer= Array.from(answerButtonsElement.children).indexOf(selectedButton);

    const question= questions[currentQuestionIndex];
    
    if (selectedAnswer ===question.correctAnswer) {
        selectedButton.classList.add("correct");
        correctAnswer++;
        score++;
        console.log(score);
        nextButton.classList.remove("hide");
        
    }else {
        selectedButton.classList.add('wrong');
        nextButton.classList.remove('hide');
    }

    

    nextButton.style.display = "block";
    nextButton.addEventListener("click", handleNextButton);
}


if (currentQuestionIndex === questions.length) {
    finishButtonElement.classList.remove('hide');
} else {
    nextButton.classList.remove('hide');
}

function showScore() {
    resetState();
    finishButtonElement.classList.remove('hide');
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    

    finishButtonElement.style.display = "block";
    finishButtonElement.addEventListener("click", startGame);
} 

function handleNextButton(){
    nextButton.removeEventListener("click", handleNextButton);
    console.log("nextbutton");
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore()
    }
}

startGame();


