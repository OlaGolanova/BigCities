
window.addEventListener('DOMContentLoaded', function(){
    'use strict';
//Функционал кнопок
    btnChoice.addEventListener('click', choiceOneCity);
    btnAllCities.addEventListener('click', choiceAllCities);
    btnSortDownA.addEventListener('click', sortCitiesDownA);
    btnSortUpA.addEventListener('click', sortCitiesUpA);
    btnSortDownPeople.addEventListener('click', sortCitiesDownPeople);
    btnSortUpPeople.addEventListener('click', sortCitiesUpPeople);
  
    choiceCiyOnClickCity();//Функция выводит информацию о городе, при клике на название города
    choiceCiyOnClickNumbers();//Функция выводит информацию о городе, при клике на количество населения в городе

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
const hours = document.querySelector('.currenttime');//блок, куда выводим время
const dayWeek =  document.querySelector('.day-of-week');//блок, куда выводим день недели
const tableCities = document.querySelectorAll('.table__cities'); //Коллекция ячеек в таблице с городами
const tableNumbers = document.querySelectorAll('.table__numbers'); //Коллекция ячеек в таблице с численностью населения
const citycard = document.querySelector('.citycard');

const facts = document.querySelector('.citycard__item.info'); //div с информацией о городах

const dateArray = JSON.parse(datejson); //достаем данные по времени из формата JSON
const infoArray = JSON.parse(infoCities);



// Вывод времени, даты, дня недели moment.js
//Задаю локализацию moment.js
moment.locale('ru', {
    months : 'Января_Февраля_Марта_Апреля_Мая_Июня_Июля_Авгуса_Сентября_Октября_Ноября_Декабря'.split('_'),
    weekdays : 'Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота'.split('_'),

});
let getTimeZoneOfsset; // getTimeZoneofsset выбранного города

//Функция  вызывается при клике на кнопку Выбрать
    function choiceOneCity() {

        for (let i=0; i < citiesArray.length; i++){

            if(input.value == citiesArray[i] ) {

                getInfo(infoArray[i]);


                cities.classList.add('hidden');
                citycard.classList.remove('hidden');

                getTimeZoneOfsset = dateArray[i];
                getDate();//Функция выводит время на экран
               




                
            }
        }
  
    input.value = '';
}


//Функция для вывода информации о городе
function getInfo(elem) {
    facts.innerHTML = "";
    
    facts.insertAdjacentHTML("beforeEnd", `<p class="country">Страна: ${elem.country}</p>
    <p class="language">Язык: ${elem.language}</p>
    <p class="populationDensity">Плотность населения: ${elem.populationDensity}</p>
    <p class="sights">Достопримечательности: ${elem.sights}</p>
    <p class="funFacts">${elem.funFacts}</p>`)
}


//Выводит дату и время при загрузке страницы
function getDate(){
    //Получаем getTimeZoneofsset выбранного города из, нужен для посекундного вывода времени
    let timeZone = new Date().getTimezoneOffset(); // Разница в минутах между utc и местным часовым поясом пользователя
    let time = new Date().getTime(); //Таймстамп пользователя в мс         
    let deltaTimeZone = timeZone - getTimeZoneOfsset; // Разница в часовых поясах пользователя и выбранного города
    let timeCity = time + (deltaTimeZone*60*1000); //Время в выбранном городе в таймстампе
    let nowDateCity = new Date(timeCity);//Дата и время в выбранном городе 
    date.textContent = moment(nowDateCity).format('D. MM. YYYY');
    hours.textContent = moment(nowDateCity).format('HH:mm');
    dayWeek.textContent = moment(nowDateCity).format('dddd');

}



//При клике на город выходит информация о нем
function choiceCiyOnClickCity() {

    for (let i =0; i < tableCities.length; i++){

        tableCities[i].addEventListener('click', function(event){

            if(event.target == tableCities[i]){

                cities.classList.add('hidden');
                citycard.classList.remove('hidden');


                getTimeZoneOfsset = dateArray[i];
                getDate();//Функция выводит время на экран
                getInfo(infoArray[i]);







            }
        })
    }
    input.value = '';
}

//При клике на численность города выходит информация о городе
function choiceCiyOnClickNumbers() {

    for (let i =0; i < tableNumbers.length; i++){

        tableNumbers[i].addEventListener('click', function(event){

            if(event.target== tableNumbers[i]){
              
                cities.classList.add('hidden');
                citycard.classList.remove('hidden');


                getTimeZoneOfsset = dateArray[i];
                getDate();//Функция выводит время на экран
                getInfo(infoArray[i]);







            }
        })
    } 
    input.value = '';
}





//Функция для вывода времени и даты, обновляется каждую секунду-время меняется, как часы.    
const intervalId = setInterval(function() {
    let timeZone = new Date().getTimezoneOffset(); // Разница в минутах между utc и местным часовым поясом пользователя
    let time = new Date().getTime(); //Таймстамп пользователя в мс         
    let deltaTimeZone = timeZone - getTimeZoneOfsset; // Разница в часовых поясах пользователя и выбранного города
    let timeCity = time + (deltaTimeZone*60*1000); //Время в выбранном городе в таймстампе
    let nowDateCity = new Date(timeCity); //Дата и время в выбранном городе 
    date.textContent = moment(nowDateCity).format('D. MM. YYYY');
    hours.textContent = moment(nowDateCity).format('HH:mm');
    dayWeek.textContent = moment(nowDateCity).format('dddd');
}, 1000)



//Функция вызывается при нажатие на кнопку Все города
function choiceAllCities() {
    cities.classList.remove('hidden');
    citycard.classList.add('hidden');
    input.value = '';
}



//Функция сортировки городов по алфавиту от A-Я, вызывается при нажатии на кнопку A-Я
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
//Функция сортировки городов по алфавиту от Я-А, вызывается при нажатии на кнопку Я-А
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

//Функция сортировки городов по численности населения от большего к меньшему, вызывается при нажатии на соответствующую кнопку 
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
//Функция сортировки городов по численности населения от меньшего к большему,  вызывается при нажатии на соответствующую кнопку 
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

