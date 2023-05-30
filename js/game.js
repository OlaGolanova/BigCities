

// Массивы
const gameArray = JSON.parse(gamejson); //вопросы
const answerArray = JSON.parse(answerjson); //ответы
const explanationsArray = JSON.parse(explanations); //пояснения
//
const btnTruth = document.querySelector('.green'),
      btnLie = document.querySelector('.red'),
      btnForward = document.querySelector('.white'),
      gameQuestion = document.querySelector('.game__question'),
      btnStart = document.querySelector('.start'),
      btnAgain = document.querySelector('.again'),
      main = document.querySelector('.main'),
      count = document.querySelector('.count'),
      wrap = document.querySelector('.game__wrap'),
      answerTrue = document.querySelector('.answer-true'),
      answerFalse = document.querySelector('.answer-false'),
      answer = document.querySelector('.answer'),
      span = document.querySelector('span'),
      wrapAnswer = document.querySelector('.wrap__answer'), 
      divResult = document.querySelector('.result');
let elem2;
let elem;
let result = 0;
const gameArrayNew = [],
      answerArrayNew = [],
      explanationsArrayNew = [];

window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    btnStart.addEventListener('click', startGame);
    btnAgain.addEventListener('click', startGameAgain);
    btnTruth.addEventListener('click', trueAnswer);
    btnLie.addEventListener('click', falseAnswer);
    btnForward.addEventListener('click', getNextQuestion);
    animationLoadBtn();

});

function getNewArrays(){
    for (let i =0; i < gameArray.length; i++) {
        gameArrayNew.push(gameArray[i]);
    };
    for (let i =0; i < answerArray.length; i++) {
        answerArrayNew.push(answerArray[i]);
    };
    for (let i =0; i < explanationsArray.length; i++) {
        explanationsArrayNew.push(explanationsArray[i]);
    };
};
 function startGame(){
    getNewArrays();
    let elem = gameArrayNew.shift();
    gameQuestion.textContent = elem;

    btnTruth.classList.remove('hidden');
    btnLie.classList.remove('hidden');
    gameQuestion.classList.remove('hidden');
    count.classList.remove('hidden');
    divResult.classList.add('hidden');
    wrap.classList.add('hidden');
};
function startGameAgain(){
    startGame();
    result = 0;
    span.textContent = 1;
    
};
function trueAnswer(){
    btnTruth.classList.add('hidden');
    btnLie.classList.add('hidden');
    btnForward.classList.remove('hidden');
    answer.classList.remove('hidden');

    let elem = explanationsArrayNew.shift();
    answer.textContent = elem;

    elem2 = answerArrayNew.shift();

    if (elem2 == 'true') {
        answerTrue.classList.remove('hidden');
        result += 1;
    } else if(elem2 == 'false') {
        answerFalse.classList.remove('hidden');
    }
    animation();
};
function falseAnswer(){
    btnTruth.classList.add('hidden');
    btnLie.classList.add('hidden');
    btnForward.classList.remove('hidden');
    answer.classList.remove('hidden');

    let elem = explanationsArrayNew.shift();
    answer.textContent = elem;

    elem2 = answerArrayNew.shift();

    if (elem2 == 'false') {
        answerFalse.classList.remove('hidden');
        result = result + 1;
    } else if (elem2 == 'true') {
        answerTrue.classList.remove('hidden');
    }
    animation();
};
function getNextQuestion() {
    let elem = gameArrayNew.shift();
    gameQuestion.textContent = elem;

    btnTruth.classList.remove('hidden');
    btnLie.classList.remove('hidden');
    btnForward.classList.add('hidden');
    answerFalse.classList.add('hidden');
    answerTrue.classList.add('hidden');
    answer.classList.add('hidden');
    span.textContent = Number(span.textContent) + 1;

    if (elem == null) {
        btnTruth.classList.add('hidden');
        btnLie.classList.add('hidden');
        gameQuestion.classList.add('hidden');
        count.classList.add('hidden');
        wrap.classList.remove('hidden');
        btnStart.classList.add('hidden');
        btnAgain.classList.remove('hidden');
        divResult.classList.remove('hidden');
        divResult.innerHTML = `Верно ${result}/10`;
}};
function animation() {
    gsap.from(".wrap__answer", {
      opacity: 0.1,
      yPercent: -50,
      duration: 1.2,
    });
  };
  
  function animationLoadBtn() {
    gsap.to(".start", {
      opacity: 1,
      scale: 1
    });
    gsap.to(".main", {
        opacity: 1,
        scale: 1
      });
  }