
window.addEventListener('DOMContentLoaded', function(){
    'use strict';
//Функционал кнопок
    btnChoice.addEventListener('click', choiceOneCity);
    btnAllCities.addEventListener('click', choiceAllCities);
    btnSortDownA.addEventListener('click', sortCitiesDownA);
    btnSortUpA.addEventListener('click', sortCitiesUpA);
    btnSortDownPeople.addEventListener('click', sortCitiesDownPeople);
    btnSortUpPeople.addEventListener('click', sortCitiesUpPeople);
  
    choiceCiyOnClickCity();
    choiceCiyOnClickNumbers()

});

const cities = document.querySelector('.cities'); //Таблица с городами 
const btnChoice = document.querySelector('.panel__btn-choice'); //Кнопка Выбрать город
const btnAllCities = document.querySelector('.panel__btn-all-citie'); //Кнопка ВСЕ ГОРОДА
const btnSortDownA = document.querySelector('.panel__btn-one'); //Кнопка сортировать А-Я
const btnSortUpA = document.querySelector('.panel__btn-two'); //Кнопка сортировать Я-А
const btnSortDownPeople = document.querySelector('.panel__btn-three'); //Кнопка сортировать по уменьшению численности
const btnSortUpPeople = document.querySelector('.panel__btn-four'); //Кнопка сортировать по увеличению численности
const input = document.getElementById('input'); //Инпут для ввода города
const citiesArray = ['Токио', 'Дели', 'Шанхай', 'Сан-Паулу', 'Мехико']; //Маcсив из названий городов, которые могут быть выбраны
const date = document.querySelector('.date');//блок, куда выводим дату
const hours = document.querySelector('.hours');//блок, куда выводим время
const dayWeek =  document.querySelector('.dayWeek');//блок, куда выводим день недели



const dataArray = JSON.parse(datajson); //достаем данные по времени из формата JSON

// Вывод времени, даты, дня недели moment.js
//Задаю локализацию moment.js
moment.locale('ru', {
    months : 'Января_Февраля_Марта_Апреля_Мая_Июня_Июля_Авгуса_Сентября_Октября_Ноября_Декабря'.split('_'),
    weekdays : 'Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота'.split('_'),

});
let getTimeZoneOfsset = ''; // getTimeZoneofsset выбранного города

//Функци  вызывается при клике на кнопку Выбрать
    function choiceOneCity() {

        for (let i=0; i < citiesArray.length; i++){

            if(input.value == citiesArray[i] ) {
              
                cities.style.opacity = '0';
                cities.style.scale = '0';
                cities.style.visibility = 'hidden';
                // infoCity.classList.remove('hidden');

                //Получаем getTimeZoneofsset выбранного города из, нужен для посекундного вывода времени
                let timeZone = new Date().getTimezoneOffset(); // Разница в минутах между utc и местным часовым поясом пользователя
                let time = new Date().getTime(); //Таймстамп пользователя в мс         
                let deltaTimeZone = timeZone - dataArray[i]; // Разница в часовых поясах пользователя и выбранного города
                let timeCity = time + (deltaTimeZone*60*1000); //Время в выбранном городе в таймстампе
                let nowDateCity = new Date(timeCity);//Дата и время в выбранном городе 
                date.textContent = moment(nowDateCity).format('D. MM. YYYY');
                hours.textContent = moment(nowDateCity).format('HH:mm:ss');
                dayWeek.textContent = moment(nowDateCity).format('dddd');
                getTimeZoneOfsset = dataArray[i];
            }


            //Функция для вывода времени и даты, обновляется каждую секунду
         
        
        }

    
    input.value = '';

}

const intervalId = setInterval(function() {
    let timeZone = new Date().getTimezoneOffset(); // Разница в минутах между utc и местным часовым поясом пользователя
    let time = new Date().getTime(); //Таймстамп пользователя в мс         
    let deltaTimeZone = timeZone - getTimeZoneOfsset; // Разница в часовых поясах пользователя и выбранного города
    let timeCity = time + (deltaTimeZone*60*1000); //Время в выбранном городе в таймстампе
    let nowDateCity = new Date(timeCity); //Дата и время в выбранном городе 
    date.textContent = moment(nowDateCity).format('D. MM. YYYY');
    hours.textContent = moment(nowDateCity).format('HH:mm:ss');
    dayWeek.textContent = moment(nowDateCity).format('dddd');
}, 1000)


function choiceAllCities() {
    cities.style.visibility = 'visible';
    cities.style.opacity = '1';
    cities.style.scale = '1';
    // infoCity.classList.add('hidden');
   input.value = '';

}

//Функция сортировки городов по алфавиту от A-Я
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
//Функция сортировки городов по алфавиту от Я-А
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

//Функция сортировки городов по численности населения от большего к меньшему
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
//Функция сортировки городов по численности населения от меньшего к большему
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










  
 

  
   
const tableCities = document.querySelectorAll('.table__cities'); //Коллекция ячеек в таблице с городами
const tableNumbers = document.querySelectorAll('.table__numbers'); //Коллекция ячеек в таблице с численностью населения

function choiceCiyOnClickCity() {

    for (let i =0; i < tableCities.length; i++){

        tableCities[i].addEventListener('click', function(event){

            if(event.target == tableCities[i]){
              
                cities.style.opacity = '0';
                cities.style.scale = '0';
                cities.style.visibility = 'hidden';
                // infoCity.classList.remove('hidden');

                //Получаем getTimeZoneofsset выбранного города из, нужен для посекундного вывода времени
                let timeZone = new Date().getTimezoneOffset(); // Разница в минутах между utc и местным часовым поясом пользователя
                let time = new Date().getTime(); //Таймстамп пользователя в мс         
                let deltaTimeZone = timeZone - dataArray[i]; // Разница в часовых поясах пользователя и выбранного города
                let timeCity = time + (deltaTimeZone*60*1000); //Время в выбранном городе в таймстампе
                let nowDateCity = new Date(timeCity);//Дата и время в выбранном городе 
                date.textContent = moment(nowDateCity).format('D. MM. YYYY');
                hours.textContent = moment(nowDateCity).format('HH:mm:ss');
                dayWeek.textContent = moment(nowDateCity).format('dddd');
                getTimeZoneOfsset = dataArray[i];
            }


            //Функция для вывода времени и даты, обновляется каждую секунду
            const intervalId = setInterval(function() {
                let timeZone = new Date().getTimezoneOffset(); // Разница в минутах между utc и местным часовым поясом пользователя
                let time = new Date().getTime(); //Таймстамп пользователя в мс         
                let deltaTimeZone = timeZone - getTimeZoneOfsset; // Разница в часовых поясах пользователя и выбранного города
                let timeCity = time + (deltaTimeZone*60*1000); //Время в выбранном городе в таймстампе
                let nowDateCity = new Date(timeCity); //Дата и время в выбранном городе 
                date.textContent = moment(nowDateCity).format('D. MM. YYYY');
                hours.textContent = moment(nowDateCity).format('HH:mm:ss');
                dayWeek.textContent = moment(nowDateCity).format('dddd');
            }, 1000)

        })
    }
  
    input.value = '';
   
}



function choiceCiyOnClickNumbers() {

    for (let i =0; i < tableNumbers.length; i++){

        tableNumbers[i].addEventListener('click', function(event){

            if(event.target== tableNumbers[i]){
              
                cities.style.opacity = '0';
                cities.style.scale = '0';
                cities.style.visibility = 'hidden';
                // infoCity.classList.remove('hidden');

                //Получаем getTimeZoneofsset выбранного города из, нужен для посекундного вывода времени
                let timeZone = new Date().getTimezoneOffset(); // Разница в минутах между utc и местным часовым поясом пользователя
                let time = new Date().getTime(); //Таймстамп пользователя в мс         
                let deltaTimeZone = timeZone - dataArray[i]; // Разница в часовых поясах пользователя и выбранного города
                let timeCity = time + (deltaTimeZone*60*1000); //Время в выбранном городе в таймстампе
                let nowDateCity = new Date(timeCity);//Дата и время в выбранном городе 
                date.textContent = moment(nowDateCity).format('D. MM. YYYY');
                hours.textContent = moment(nowDateCity).format('HH:mm:ss');
                dayWeek.textContent = moment(nowDateCity).format('dddd');
                getTimeZoneOfsset = dataArray[i];
            }


            //Функция для вывода времени и даты, обновляется каждую секунду
            const intervalId = setInterval(function() {
                let timeZone = new Date().getTimezoneOffset(); // Разница в минутах между utc и местным часовым поясом пользователя
                let time = new Date().getTime(); //Таймстамп пользователя в мс         
                let deltaTimeZone = timeZone - getTimeZoneOfsset; // Разница в часовых поясах пользователя и выбранного города
                let timeCity = time + (deltaTimeZone*60*1000); //Время в выбранном городе в таймстампе
                let nowDateCity = new Date(timeCity); //Дата и время в выбранном городе 
                date.textContent = moment(nowDateCity).format('D. MM. YYYY');
                hours.textContent = moment(nowDateCity).format('HH:mm:ss');
                dayWeek.textContent = moment(nowDateCity).format('dddd');
            }, 1000)

        })
    }
  
    input.value = '';
   
}


