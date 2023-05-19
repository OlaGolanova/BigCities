
window.addEventListener('DOMContentLoaded', function () {
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
const facts = document.querySelector('.citycard__item.info'); //div с информацией о городах

function choiceOneCity() {
    let elem;
    if (input.value != '') {
        cities.classList.add('hidden');
        // infoCity.classList.remove('hidden');
    }
    if (input.value == "Токио") {
        elem = infoCities[0];
    }
    if (input.value == "Дели") {
        elem = infoCities[1];
    }
    if (input.value == "Шанхай") {
        elem = infoCities[2];
    }
    if (input.value == "Сан-Паулу") {
        elem = infoCities[3];
    }
    if (input.value == "Мехико") {
        elem = infoCities[4];
    }
    facts.insertAdjacentHTML("beforeEnd", `<p class="country">Страна: ${elem.country}</p>
        <p class="language">Язык: ${elem.language}</p>
        <p class="populationDensity">Плотность населения: ${elem.populationDensity}</p>
        <p class="sights">Достопримечательности${elem.sights}</p>
        <p class="funFacts">${elem.funFacts}</p>`)
}

function choiceAllCities() {
    cities.classList.remove('hidden');
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

