const quizfrom = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');

const correctAnswers = ['a', 'b', 'b', 'a', 'b', 'c', 'b', 'a', 'c', 'c']

quizfrom.addEventListener('submit, e=>'); {
    e.preventDefault();

    let score = 0;
    const.userAnswers =[quizfrom.q1.value,quizFrom.q2.value]
    userAnswers.forEach(answer, index) ; {
        if (answer === correctAnswers[index]){
        score += 1;
        }
    };
    resultDiv.dispatchEvent.innerHTML= 'Your score is ${score}/${correctAnswers.length}';
})
