const quizData = [
    {
        question: 'What is my name?',
        a: 'Chinonso',
        b: 'Emeka',
        c: 'Asake',
        d: 'Baby',
        correct: 'd'
    },
    {
        question: 'What is my favorite programming language?',
        a: 'Java',
        b: 'C',
        c: 'Javascript',
        d: 'Python',
        correct: 'c'  
    },
    {
        question: 'Who is the president of the United states?',
        a: 'Davido',
        b: 'Joe Biden',
        c: 'Asake',
        d: 'Goodluch Jonathan',
        correct: 'b'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Object notation',
        c: 'Application programming interface',
        d: 'Cascading Style sheet',
        correct: 'a'
    }
]

const quizScore = document.getElementById('quiz')
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitButton = document.getElementById('submit')
const answerEls = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
   
};

function getSelected(){
    let answer = undefined;
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
           answer =  answerEl.id;
        }
    });


    return answer;
}

function deselectAnswers(){
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}



submitButton.addEventListener('click', () => {

    const answer = getSelected();
    console.log(answer)


    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            //show results
            quizScore.innerHTML = `<h2>You have answered ${score}/${quizData.length} questions correctly</h2> <button onclick="location.reload();">Reload</button>`;
        }
    }

});

