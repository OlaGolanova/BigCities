const cities = document.querySelector('.cities'); //Таблица с городами 
const btnChoice = document.querySelector('.panel__btn-choice'); //Кнопка Выбрать город
const btnAllCities = document.querySelector('.panel__btn-all-citie'); //Кнопка ВСЕ ГОРОДА
const btnSortDownA = document.querySelector('.panel__btn-one'); //Кнопка сортировать А-Я
const btnSortUpA = document.querySelector('.panel__btn-two'); //Кнопка сортировать Я-А
const btnSortDownPeople = document.querySelector('.panel__btn-three'); //Кнопка сортировать по уменьшению численности
const btnSortUpPeople = document.querySelector('.panel__btn-four'); //Кнопка сортировать по увеличению численности
const input = document.getElementById('input'); //Инпут для ввода города
const citiesArray = ['Токио', 'Дели', 'Шанхай', 'Сан-Паулу', 'Мехико', 'Каир', 'Дакка', 'Мумбаи', 'Пекин', 'Осака']; //Маcсив из названий городов, которые могут быть выбраны
const populationArray = ['37435191', '29399141', '26317104', '21846507', '21671908', '20484965', '20283552', '20185064', '20035455', '19222665']; //массив из численнности населения
const date = document.querySelector('.date');//блок, куда выводим дату
const hours = document.querySelector('.currenttime');//блок, куда выводим время
const dayWeek =  document.querySelector('.day-of-week');//блок, куда выводим день недели
const tableCities = document.querySelectorAll('.table__cities'); //Коллекция ячеек в таблице с городами
const tableNumbers = document.querySelectorAll('.table__numbers'); //Коллекция ячеек в таблице с численностью населения
const citycard = document.querySelector('.citycard');
const facts = document.querySelector('.citycard__item.info'); //div с информацией о городах
const table = document.querySelector('table'); 

window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    
   //При загрузке страницы заносятся города в таблицу
    setTableInfo(); 
   //Кнопки
    btnChoice.addEventListener('click', choiceOneCity);
    btnAllCities.addEventListener('click', choiceAllCities);

    //Кнопки для сортировки
    btnSortDownA.addEventListener('click', sortCitiesDownA);
    btnSortUpA.addEventListener('click', sortCitiesUpA);
    btnSortDownPeople.addEventListener('click', sortCitiesDownPeople);
    btnSortUpPeople.addEventListener('click', sortCitiesUpPeople);
    
    animationLoad();
    choiceCityOnClickCity();//Функция выводит информацию о городе, при клике на название города
    choiceCityOnClickNumbers();//Функция выводит информацию о городе, при клике на количество населения в городе
   

});

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
    function choiceOneCity(event) {
        event.preventDefault();
        for (let i=0; i < citiesArray.length; i++){
      

            if (input.value == citiesArray[i] ) {
                cities.classList.add('hidden');
                citycard.classList.remove('hidden');
                disableBtn();
                animation();

                getTimeZoneOfsset = dateArray[i];
                getDate();//Функция выводит время на экран
               
                getInfo(infoArray[i]);

           



                
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
//Функция для вывода времени и даты, обновляется каждую секунду-время меняется, как часы.    
const intervalId = setInterval(function() {
    getDate();
}, 1000)
//При клике на город выходит информация о нем
function choiceCityOnClickCity() {

    for (let i =0; i < tableCities.length; i++){
      

        tableCities[i].addEventListener('click', function(event){

            if(event.target == tableCities[i]){
                cities.classList.add('hidden');
                citycard.classList.remove('hidden');
                disableBtn();
                animation();

                getTimeZoneOfsset = dateArray[i];
                getDate();//Функция выводит время на экран

                getInfo(infoArray[i]);








            }
        })
    }
    input.value = '';
}

//При клике на численность города выходит информация о городе
function choiceCityOnClickNumbers() {

    for (let i =0; i < tableNumbers.length; i++){

        tableNumbers[i].addEventListener('click', function(event){

            if(event.target== tableNumbers[i]){
                cities.classList.add('hidden');
                citycard.classList.remove('hidden');
                disableBtn();
                animation();

                getTimeZoneOfsset = dateArray[i];
                getDate();//Функция выводит время на экран

                getInfo(infoArray[i]);








            }
        })
    } 
    input.value = '';
}


//Функция вызывается при нажатие на кнопку Все города
function choiceAllCities(event) {
    event.preventDefault();
    cities.classList.remove('hidden');
    citycard.classList.add('hidden');
    input.value = '';
    animation();
    enableBtn();
   

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

    //Сортировка строк таблицы по алфавиту
    let sortedRows = Array.from(table.rows) 
     .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

   table.tBodies[0].append(...sortedRows);
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

    //Сортировка строк таблицы по алфавиту в обратном порядке
    let sortedRows = Array.from(table.rows) 
    .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1)
    .reverse();

    table.tBodies[0].append(...sortedRows);
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

    //Сортировка строк таблицы по населению в порядке убывания
    let sortedRows = Array.from(table.rows) 
    .sort((rowA, rowB) => rowA.cells[1].innerHTML > rowB.cells[1].innerHTML ? 1 : -1)
    .reverse();
  
     table.tBodies[0].append(...sortedRows);
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

    //Сортировка строк таблицы по населению в порядке возростания
    let sortedRows = Array.from(table.rows) 
    .sort((rowA, rowB) => rowA.cells[1].innerHTML > rowB.cells[1].innerHTML ? 1 : -1);

    table.tBodies[0].append(...sortedRows); 

}
//Регулярное выражение // число преобразуется в вид с пробелами 1_111_111
const parse = (s)=>[...s.replace(/[^0-9]/g,"")].reduce((a,c,i,l)=>a+=c+((l.length-i)%3==1?" ":"")||a,""); 

//Функция заносит данные о городах и населении в таблицу при загрузке
function setTableInfo(){
    
    for (let i = 0; i < citiesArray.length; i++){
        tableCities[i].textContent = citiesArray[i];
    };
    for (let i = 0; i < populationArray.length; i++){
        tableNumbers[i].textContent = parse(populationArray[i]);
    };
};

function animation() {

    gsap.from ('.citycard', {
        opacity: 0,
        scale: 0,
        duration: 0.6
    })
    gsap.from ('.cities', {
        opacity: 0,
        scale: 0,
        duration: 0.6
    })
}
function animationLoad() {
    gsap.from ('.panel', {
        opacity: 0.1,
        yPercent: 50,
        duration: 1.2
        
    })
    
    gsap.from ('.cities', {
        opacity: 0.1,
        y: 50,
        duration: 1.2
        
    })

}
//Функция для блокировки кнопок сортировки
function disableBtn(){
    btnSortDownA.disabled = true;
    btnSortUpA.disabled = true;
    btnSortDownPeople.disabled = true;
    btnSortUpPeople.disabled = true;
};

//Функция для активации кнопок сортировки
function enableBtn(){
    btnSortDownA.disabled = false;
    btnSortUpA.disabled = false;
    btnSortDownPeople.disabled = false;
    btnSortUpPeople.disabled = false;
};




