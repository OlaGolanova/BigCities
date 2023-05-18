
window.addEventListener('DOMContentLoaded', function(){
    'use strict';
//Функционал кнопок
    btnChoice.addEventListener('click', choiceOneCity);
    btnAllCities.addEventListener('click', choiceAllCities);
    btnSortDownA.addEventListener('click', sortCitiesDownA);
    btnSortUpA.addEventListener('click', sortCitiesUpA);
    btnSortDownPeople.addEventListener('click', sortCitiesDownPeople);
    btnSortUpPeople.addEventListener('click', sortCitiesUpPeople);
    



    //Здесь только вызываем функции


    });

const cities = document.querySelector('.cities'); //Таблица с городами 
const btnChoice = document.querySelector('.panel__btn-choice'); //Кнопка Выбрать город
const btnAllCities = document.querySelector('.panel__btn-all-citie'); //Кнопка ВСЕ ГОРОДА
const btnSortDownA = document.querySelector('.panel__btn-one'); //Кнопка сортировать А-Я
const btnSortUpA = document.querySelector('.panel__btn-two'); //Кнопка сортировать Я-А
const btnSortDownPeople = document.querySelector('.panel__btn-three'); //Кнопка сортировать по уменьшению численности
const btnSortUpPeople = document.querySelector('.panel__btn-four'); //Кнопка сортировать по увеличению численности
const input = document.getElementById('input'); //Инпут для ввода города




function choiceOneCity() {
    if (input.value != '' ) {
        cities.classList.add('hidden');
        // infoCity.classList.remove('hidden');
    }

}

function choiceAllCities() {
    cities.classList.remove('hidden');
    // infoCity.classList.add('hidden');
   input.value = '';
}


function sortCitiesDownA() {
    btnSortDownA.classList.add('btn-active');
    btnSortDownA.classList.add('active-svg-btn');
    btnSortUpA.classList.remove('btn-active');
    btnSortUpA.classList.remove('active-svg-btn');
    btnSortUpPeople.classList.remove('btn-active');
    btnSortUpPeople.classList.remove('active-svg-btn');
    btnSortDownPeople.classList.remove('btn-active');
    btnSortDownPeople.classList.remove('active-svg-btn');
}

function sortCitiesUpA() {
    btnSortUpA.classList.add('btn-active');
    btnSortUpA.classList.add('active-svg-btn');
    btnSortDownA.classList.remove('btn-active');
    btnSortDownA.classList.remove('active-svg-btn');
    btnSortUpPeople.classList.remove('btn-active');
    btnSortUpPeople.classList.remove('active-svg-btn');
    btnSortDownPeople.classList.remove('btn-active');
    btnSortDownPeople.classList.remove('active-svg-btn');
}

function sortCitiesDownPeople() {
    btnSortDownPeople.classList.add('btn-active');
    btnSortDownPeople.classList.add('active-svg-btn');
    btnSortUpPeople.classList.remove('btn-active');
    btnSortUpPeople.classList.remove('active-svg-btn');
    btnSortUpA.classList.remove('btn-active');
    btnSortUpA.classList.remove('active-svg-btn');
    btnSortDownA.classList.remove('btn-active');
    btnSortDownA.classList.remove('active-svg-btn');
}

function sortCitiesUpPeople() {
    btnSortUpPeople.classList.add('btn-active');
    btnSortUpPeople.classList.add('active-svg-btn');
    btnSortDownPeople.classList.remove('btn-active');
    btnSortDownPeople.classList.remove('active-svg-btn');
    btnSortUpA.classList.remove('btn-active');
    btnSortUpA.classList.remove('active-svg-btn');
    btnSortDownA.classList.remove('btn-active');
    btnSortDownA.classList.remove('active-svg-btn');
}




//Задаю локализацию moment.js
moment.locale('ru', {
  months : 'Января_Февраля_Марта_Апреля_Мая_Июня_Июля_Авгуса_Сентября_Октября_Ноября_Декабря'.split('_'),
  weekdays : 'Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота'.split('_'),
 
});

// //Часы выводят время каждую секунду
// const date = document.querySelector('.date');
// const hours = document.querySelector('.hours');

let newDate = new Date();
//   date.textContent = moment(newDate).format('dddd D MMMM YYYY');
//   hours.textContent = moment(newDate).format('HH:mm:ss');
  console.log(moment(newDate).format('dddd D MMMM YYYY'));


// const intervalId = setInterval(function() {
//   let now = new Date();
//   date.textContent = moment(now).format('dddd D MMMM YYYY');
//   hours.textContent = moment(now).format('HH:mm:ss'); 
// }, 1000)