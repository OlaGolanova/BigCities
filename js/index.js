//Альбина
const cityPopulation = `[{
        "city": "Токио",
        "population": [37378386, 37708372, 37983840, 38078860, 38161719, 38235966, 38323229]
    },
    {
        "city": "Дели",
        "population": [23692872, 24758302, 25647707, 26583618, 27520816, 28360618, 29347622]
    },
    {
        "city": "Шанхай",
        "population": [21734336, 22797724, 23685423, 24561335, 25434781, 26217454, 27137316]
    },
    {
        "city": "Сан-Паулу",
        "population": [20315891, 20713569, 21045544, 21320552, 21591251, 21833816, 22118900]
    },
    {
        "city": "Мехико",
        "population": [20536063, 20781172, 20985784, 21208619, 21432216, 21632584, 21868073]
    }
]`

const dataPopulation = JSON.parse(cityPopulation);
console.log(dataPopulation);
//--Альбина

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




function choiceOneCity() {
    if (input.value != '') {
        cities.classList.add('hidden');
        // infoCity.classList.remove('hidden');
    }

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

//Альбина
function BuildChart(values) {
    dataPopulation.find(function (item, index) {
        if (item.city === input.value) {
            values = item.population
        }
    })

    const ctx = document.getElementById("myChart").getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["2013", "2014", "2015", "2016", "2017", "2018", "2019"], // Наши метки
            datasets: [{
                label: 'Population',
                data: values, // Значения
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)'
            }]
        },
        options: {
            responsive: true, // Даем Chart.js указание реагировать правильно.
            maintainAspectRatio: false, // Добавляем эту строку, чтобы избежать переключения на полноразмерный вид (высоту/ширину) 
        }
    });
    return myChart;
}

btnChoice.onclick = function () {
    BuildChart();
}
//--Альбина