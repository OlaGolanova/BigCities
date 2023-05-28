// Вывод погоды
const temparature = document.querySelector(".temparature");
const wind = document.querySelector(".wind");
const description = document.querySelector(".description");
const feelslike = document.querySelector(".feelslike");
const humidity = document.querySelector(".humidity");
const currentImg = document.querySelector(".current-img");
const weatherCity = document.querySelector(".weather");

// Вывод ошибки "Поле не заполнено*"
const errorMessage = document.getElementById("errorMessage");

const cities = document.querySelector(".cities"); //Таблица с городами
const btnChoice = document.querySelector(".panel__btn-choice"); //Кнопка Выбрать город
const btnAllCities = document.querySelector(".panel__btn-all-citie"); //Кнопка ВСЕ ГОРОДА
const btnSortDownA = document.querySelector(".panel__btn-one"); //Кнопка сортировать А-Я
const btnSortUpA = document.querySelector(".panel__btn-two"); //Кнопка сортировать Я-А
const btnSortDownPeople = document.querySelector(".panel__btn-three"); //Кнопка сортировать по уменьшению численности
const btnSortUpPeople = document.querySelector(".panel__btn-four"); //Кнопка сортировать по увеличению численности
const input = document.getElementById("input"); //Инпут для ввода города
const date = document.querySelector(".date"); //блок, куда выводим дату
const hours = document.querySelector(".currenttime"); //блок, куда выводим время
const dayWeek = document.querySelector(".day-of-week"); //блок, куда выводим день недели
const tableCities = document.querySelectorAll(".table__cities"); //Коллекция ячеек в таблице с городами
const tableNumbers = document.querySelectorAll(".table__numbers"); //Коллекция ячеек в таблице с численностью населения
const citycard = document.querySelector(".citycard");
const facts = document.querySelector(".citycard__item.info"); //div с информацией о городах
const table = document.querySelector("table");
const btnMobile = document.querySelector(".filter-opener");
const btnsPanel = document.querySelector(".panel__btns");
const btnGame = document.querySelector(".panel__link-game");
const factsMobile = document.querySelector(".citycard__item.info-mobile"); // Информация о городах


let myChart = null;
const nameCity = document.querySelector(".name");
const people = document.querySelector(".number");
let btnLocalStorage = ""; //В массив заносятся данные о том, какая кнопка сортировки городов выбрана
const dateArray = JSON.parse(datejson); //достаем данные по времени из формата JSON
const infoArray = JSON.parse(infoCities);
const dataPopulation = JSON.parse(cityPopulation);
const citiesArray = []; //Маcсив из названий городов, которые могут быть выбраны, получаем перебором из массива в JSON
const populationArray = []; //массив из численнности населения,  получаем перебором из массива в JSON

for (let i = 0; i < dataPopulation.length; i++) {
  citiesArray.push(dataPopulation[i].city);
}
for (let i = 0; i < dataPopulation.length; i++) {
  populationArray.push(String(dataPopulation[i].population.pop()));
}

window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    //При загрузке страницы заносятся города в таблицу
    getActiveBtn();
    //Кнопки
    btnChoice.addEventListener('click', choiceOneCity);
    btnAllCities.addEventListener('click', choiceAllCities);
    //Кнопки для сортировки
    btnSortDownA.addEventListener('click', sortCitiesDownA);
    btnSortUpA.addEventListener('click', sortCitiesUpA);
    btnSortDownPeople.addEventListener('click', sortCitiesDownPeople);
    btnSortUpPeople.addEventListener('click', sortCitiesUpPeople);
    input.addEventListener('input', delMessage);
    animationLoad();
    choiceCityOnClickCity(); //Функция выводит информацию о городе, при клике на название города
    choiceCityOnClickNumbers(); //Функция выводит информацию о городе, при клике на количество населения в городе
});

// Координаты для погоды из JSON
const arrLatitude = JSON.parse(arrLatitudeJson);
const arrLongitude = JSON.parse(arrLongitudeJson);

//Функция записывает данные в localStorage
function setLocalStorage() {
  let serializedBtnLocalStorage = JSON.stringify(btnLocalStorage);
  localStorage.setItem("btnLocalStorage", serializedBtnLocalStorage);
}
// Проверяем, есть ли данные в localStorage
function getActiveBtn() {
  const infoSortBtn = localStorage.getItem("btnLocalStorage");

  if (infoSortBtn == null || infoSortBtn == 2) {
    setTableInfo();
  } else if (infoSortBtn == 0) {
    setTableInfo();
    sortCitiesDownA();
  } else if (infoSortBtn == 1) {
    setTableInfo();
    sortCitiesUpA();
  } else {
    setTableInfo();
    sortCitiesUpPeople();
  }
}




// Вывод времени, даты, дня недели moment.js
//Задаю локализацию moment.js
moment.locale("ru", {
  months:
    "Января_Февраля_Марта_Апреля_Мая_Июня_Июля_Авгуса_Сентября_Октября_Ноября_Декабря".split(
      "_"
    ),
  weekdays:
    "Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота".split("_"),
});
let getTimeZoneOfsset; // getTimeZoneofsset выбранного города

// Переменные для координат погоды
let latitude;
let longitude;

//Функция  вызывается при клике на кнопку Выбрать
function choiceOneCity(eventt) {
  eventt.preventDefault();
  // Валидация поля
  if (input.value == "") {
    errorMessage.innerHTML = "Поле не заполнено*";
  } else {
    let cleanCityValue = cleanNameCity(input.value);

    for (let i = 0; i < citiesArray.length; i++) {
      if (cleanCityValue == citiesArray[i]) {
        getInfo(infoArray[i]);
        getInfoMobile(infoArray[i]);
        cities.classList.add("hidden");
        citycard.classList.remove("hidden");
        disableBtn();
        animation();
        getTimeZoneOfsset = dateArray[i];
        getDate(); //Функция выводит время на экран
        getInfo(infoArray[i]);
        getInfoMobile(infoArray[i]);
        buildChart(dataPopulation[i]);
        latitude = arrLatitude[i];
        longitude = arrLongitude[i];
        showWeather();
        nameCity.innerText = citiesArray[i];
        people.innerText = `(${parse(populationArray[i])})`;
        showSlider();
      }
    }
  }
  input.value = "";
}

// Получение даты
let dateNow;
//Функция для вывода информации о городе
function getInfo(elem) {
  facts.innerHTML = "";
  facts.insertAdjacentHTML(
    "beforeEnd",
    `<p class="country">Страна: ${elem.country}</p>`
  );

  errorMessage.innerHTML = "";
  facts.innerHTML = "";
  facts.insertAdjacentHTML(
    "beforeEnd",
    `<p class="country">Страна: ${elem.country}</p>
    <p class="language">Язык: ${elem.language}</p>
    <p class="populationDensity">Плотность населения: ${elem.populationDensity}</p>
    <p class="sights">Достопримечательности: ${elem.sights}</p>
    <p class="funFacts">${elem.funFacts}</p>`
  );
}

function getInfoMobile(elem) {
    factsMobile.innerHTML = "";
    factsMobile.insertAdjacentHTML(
      "beforeEnd",
      `<p class="country">Страна: ${elem.country}</p>`
    );
  
    errorMessage.innerHTML = "";
    factsMobile.innerHTML = "";
    factsMobile.insertAdjacentHTML(
      "beforeEnd",
      `<p class="country">Страна: ${elem.country}</p>
      <p class="language">Язык: ${elem.language}</p>
      <p class="populationDensity">Плотность населения: ${elem.populationDensity}</p>
      <p class="sights">Достопримечательности: ${elem.sights}</p>
      <p class="funFacts">${elem.funFacts}</p>`
    );
  }
//Выводит дату и время при загрузке страницы
function getDate() {
  //Получаем getTimeZoneofsset выбранного города из, нужен для посекундного вывода времени
  dateNow = getDateNow();
  date.textContent = moment(dateNow).format("D. MM. YYYY");
  hours.textContent = moment(dateNow).format("HH:mm");
  dayWeek.textContent = moment(dateNow).format("dddd");
}
//Функция для вывода времени и даты, обновляется каждую секунду-время меняется, как часы.
const intervalId = setInterval(function () {
  getDate();
}, 1000);
//При клике на город выходит информация о нем

function choiceCityOnClickCity() {
  for (let i = 0; i < tableCities.length; i++) {
    tableCities[i].addEventListener("click", function (event) {
      if (event.target == tableCities[i]) {
        cities.classList.add("hidden");
        citycard.classList.remove("hidden");
        disableBtn();
        animation();
        getTimeZoneOfsset = dateArray[i];
        getDate(); //Функция выводит время на экран
        getInfo(infoArray[i]);
        getInfoMobile(infoArray[i]);

        buildChart(dataPopulation[i]);
        latitude = arrLatitude[i];
        longitude = arrLongitude[i];
        showWeather();
        nameCity.innerText = citiesArray[i];
        people.innerText = `(${parse(populationArray[i])})`;
        showSlider(citiesArray[i]);
      }
    });
  }
  input.value = "";
}
//При клике на численность города выходит информация о городе
function choiceCityOnClickNumbers() {
  for (let i = 0; i < tableNumbers.length; i++) {
    tableNumbers[i].addEventListener("click", function (event) {
      if (event.target == tableNumbers[i]) {
        cities.classList.add("hidden");
        citycard.classList.remove("hidden");
        disableBtn();
        animation();
        getTimeZoneOfsset = dateArray[i];
        getDate(); //Функция выводит время на экран
        getInfo(infoArray[i]);
        getInfoMobile(infoArray[i]);

        // Погода
        latitude = arrLatitude[i];
        longitude = arrLongitude[i];
        showWeather();

        buildChart(dataPopulation[i]);
        nameCity.innerText = citiesArray[i];
        people.innerText = `(${parse(populationArray[i])})`;
        showSlider(citiesArray[i]);
      }
    });
  }
  input.value = "";
}

//Функция вызывается при нажатие на кнопку Все города
function choiceAllCities(event) {
  event.preventDefault();
  cities.classList.remove("hidden");
  citycard.classList.add("hidden");
  input.value = "";
  errorMessage.innerHTML = "";
  animation();
  enableBtn();
}

//Функция сортировки городов по алфавиту от A-Я, вызывается при нажатии на кнопку A-Я
function sortCitiesDownA() {
  errorMessage.innerHTML = "";
  btnSortDownA.classList.add("btn-active");
  btnSortDownA.classList.add("active-svg-btn");
  btnSortUpA.classList.remove("btn-active");
  btnSortUpA.classList.remove("active-svg-btn");
  btnSortUpPeople.classList.remove("btn-active");
  btnSortUpPeople.classList.remove("active-svg-btn");
  btnSortDownPeople.classList.remove("btn-active");
  btnSortDownPeople.classList.remove("active-svg-btn");

  //Сортировка строк таблицы по алфавиту
  let sortedRows = Array.from(table.rows).sort((rowA, rowB) =>
    rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1
  );

  table.tBodies[0].append(...sortedRows);

  btnLocalStorage = 0;
  setLocalStorage();
}
//Функция сортировки городов по алфавиту от Я-А, вызывается при нажатии на кнопку Я-А
function sortCitiesUpA() {
  errorMessage.innerHTML = "";
  btnSortUpA.classList.add("btn-active");
  btnSortUpA.classList.add("active-svg-btn");
  btnSortDownA.classList.remove("btn-active");
  btnSortDownA.classList.remove("active-svg-btn");
  btnSortUpPeople.classList.remove("btn-active");
  btnSortUpPeople.classList.remove("active-svg-btn");
  btnSortDownPeople.classList.remove("btn-active");
  btnSortDownPeople.classList.remove("active-svg-btn");

  //Сортировка строк таблицы по алфавиту в обратном порядке
  let sortedRows = Array.from(table.rows)
    .sort((rowA, rowB) =>
      rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1
    )
    .reverse();

  table.tBodies[0].append(...sortedRows);

  btnLocalStorage = 1;
  setLocalStorage();
}

//Функция сортировки городов по численности населения от большего к меньшему, вызывается при нажатии на соответствующую кнопку
function sortCitiesDownPeople() {
  errorMessage.innerHTML = "";
  btnSortDownPeople.classList.add("btn-active");
  btnSortDownPeople.classList.add("active-svg-btn");
  btnSortUpPeople.classList.remove("btn-active");
  btnSortUpPeople.classList.remove("active-svg-btn");
  btnSortUpA.classList.remove("btn-active");
  btnSortUpA.classList.remove("active-svg-btn");
  btnSortDownA.classList.remove("btn-active");
  btnSortDownA.classList.remove("active-svg-btn");

  //Сортировка строк таблицы по населению в порядке убывания
  let sortedRows = Array.from(table.rows)
    .sort((rowA, rowB) =>
      rowA.cells[1].innerHTML > rowB.cells[1].innerHTML ? 1 : -1
    )
    .reverse();

  table.tBodies[0].append(...sortedRows);

  btnLocalStorage = 2;
  setLocalStorage();
}
//Функция сортировки городов по численности населения от меньшего к большему,  вызывается при нажатии на соответствующую кнопку
function sortCitiesUpPeople() {
  errorMessage.innerHTML = "";
  btnSortUpPeople.classList.add("btn-active");
  btnSortUpPeople.classList.add("active-svg-btn");
  btnSortDownPeople.classList.remove("btn-active");
  btnSortDownPeople.classList.remove("active-svg-btn");
  btnSortUpA.classList.remove("btn-active");
  btnSortUpA.classList.remove("active-svg-btn");
  btnSortDownA.classList.remove("btn-active");
  btnSortDownA.classList.remove("active-svg-btn");

  //Сортировка строк таблицы по населению в порядке возростания
  let sortedRows = Array.from(table.rows).sort((rowA, rowB) =>
    rowA.cells[1].innerHTML > rowB.cells[1].innerHTML ? 1 : -1
  );

  table.tBodies[0].append(...sortedRows);

  btnLocalStorage = 3;
  setLocalStorage();
}
//Регулярное выражение // число преобразуется в вид с пробелами 1_111_111
const parse = (s) => s.replace(/\B(?=(?:\d{3})*$)/g, " ");

//Альбина
//Функция для вывода графика по городу и численности населения
function buildChart(item) {
  values = item.population; //Данные о численности
  const ctx = document.getElementById("myChart").getContext("2d");
  if (myChart != null) {
    myChart.destroy(); // Очистка
  }
  myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
      ], // Метки
      datasets: [
        {
          label: "Численность населения",
          data: values, // Значения
          backgroundColor: "rgba(14,156,255,0.2)",
          borderColor: "#0E9CFF",
          fill: true, // Заливка линейного графика цветом
        },
      ],
    },
    options: {
      responsive: true, // Даем Chart.js указание реагировать правильно.
      maintainAspectRatio: false, // Добавляем эту строку, чтобы избежать переключения на полноразмерный вид (высоту/ширину)
    },
  });

  return myChart;
}
//--Альбина

//Функция заносит данные о городах и населении в таблицу при загрузке
function setTableInfo() {
  for (let i = 0; i < citiesArray.length; i++) {
    tableCities[i].textContent = citiesArray[i];
  }
  for (let i = 0; i < populationArray.length; i++) {
    tableNumbers[i].textContent = parse(populationArray[i]);
  }
}
function animation() {
  gsap.from(".citycard", {
    opacity: 0,
    scale: 0,
    duration: 0.6,
  });
  gsap.from(".cities", {
    opacity: 0,
    scale: 0,
    duration: 0.6,
  });
}

function animationLoad() {
  gsap.from(".panel", {
    opacity: 0.1,
    yPercent: 50,
    duration: 1.2,
  });
  gsap.from(".cities", {
    opacity: 0.1,
    y: 50,
    duration: 1.2,
  });
}
//Функция для блокировки кнопок сортировки
function disableBtn() {
  btnSortDownA.disabled = true;
  btnSortUpA.disabled = true;
  btnSortDownPeople.disabled = true;
  btnSortUpPeople.disabled = true;
}
//Функция для активации кнопок сортировки
function enableBtn() {
  btnSortDownA.disabled = false;
  btnSortUpA.disabled = false;
  btnSortDownPeople.disabled = false;
  btnSortUpPeople.disabled = false;
}
function getDateNow() {
  let timeZone = new Date().getTimezoneOffset();
  let time = new Date().getTime();
  let deltaTimeZone = timeZone - getTimeZoneOfsset; // Разница в часовых поясах пользователя и выбранного города
  let timeCity = time + deltaTimeZone * 60 * 1000; //Время в выбранном городе в таймстампе
  let nowDateCity = new Date(timeCity); //Дата и время в выбранном городе
  return nowDateCity;
}
// Время для вывода погоды
function dateForWeather() {
  let day = dateNow.getDate(); //Получаем число месяца
  let month = dateNow.getMonth() + 1; //Получаем месяц в привычном нам формате от 1 до 12
  let year = dateNow.getFullYear(); //Получаем год
  let hours = dateNow.getHours(); //Получаем часы
  let minutesNow = dateNow.getMinutes(); //Получаем минуты

  //Для корректного отображения даты
  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = "0" + month;
  }

  if (minutesNow < 10) {
    minutesNow = "0" + minutesNow;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  //Вывод даты в формате для получения данных погоды
  let dateForWeather = `${year}-` + `${month}-${day}` + "T";
  let timeNow = dateForWeather + hours + ":00";

  return timeNow;
}
async function showWeather() {
  let dateForWeatherParams = dateForWeather();
  try {
    const data = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=" +
        `${latitude}` +
        "&longitude=" +
        `${longitude}` +
        "&current_weather=true&hourly=temperature_2m&hourly=relativehumidity_2m,apparent_temperature&forecast_days=2"
    );
    const JSONWeather = await data.json();
    const weather = await JSONWeather;

    // Индекс времени
    const indexHuminidity = await weather.hourly.time;
    let index = indexHuminidity.indexOf(dateForWeatherParams);

    // Температура
    const temperature = await weather.current_weather.temperature;
    const resultWeather = Math.round(temperature);

    //  Скорость ветра
    const windspeed = await weather.current_weather.windspeed;
    const roundWindspeed = Math.round(windspeed);

    // Направление ветра
    const winddirection = await weather.current_weather.winddirection;
    const showWindDirection = textWindDirection(winddirection);

    // Влажность
    const windHuminidity = await weather.hourly.relativehumidity_2m[index];

    // Ощущается как
    const apparentTemperature = await weather.hourly.apparent_temperature[
      index
    ];
    const resultTemperature = Math.round(apparentTemperature);

    // weathercode
    const weatherCode = weather.current_weather.weathercode;
    const showhowWeather = howWeather(weatherCode);

    temparature.innerHTML = resultWeather + "°C";
    wind.innerHTML = roundWindspeed + "м/с, " + showWindDirection;
    description.innerHTML = showhowWeather;
    feelslike.innerHTML = "Ощущается как " + resultTemperature + " °C";
    humidity.innerHTML = "Влажность: " + windHuminidity + " %";
  } catch (err) {
    console.log("Подробности ошибки:" + `${err}`);
    description.innerHTML =
      "Прогноз погоды недоступен,пожалуйста,повторите попытку позже.";
    currentImg.src = "";
  }
}
// Функция валидации поля с названием города
function cleanNameCity(param) {
  if (param.search(/[-]/g) !== -1) {
    param = param.split("-");

    const firstPartName = param[0].trim(param[0]).toLowerCase();
    const firstElem =
      firstPartName.slice(0, 1).toUpperCase() + firstPartName.slice(1);

    const secondPartName = param[1].trim(param[1]).toLowerCase();
    const secondElem =
      secondPartName.slice(0, 1).toUpperCase() + secondPartName.slice(1);

    param = firstElem + "-" + secondElem;
    return param;
  } else {
    param = param.trim(param).toLowerCase();
    param = param.slice(0, 1).toUpperCase() + param.slice(1);
    return param;
  }
}

// Направление ветра
function textWindDirection(val) {
  let valRound = val;
  let windDirection;
  if (valRound >= Number(0) && valRound <= Number(22)) {
    windDirection = "С";
  }
  if (valRound >= Number(23) && valRound <= Number(67)) {
    windDirection = "С/В";
  }
  if (valRound >= Number(68) && valRound <= Number(112)) {
    windDirection = "В";
  }
  if (valRound >= Number(113) && valRound <= Number(137)) {
    windDirection = "Ю/В";
  }
  if (valRound >= Number(138) && valRound <= Number(203)) {
    windDirection = "Ю";
  }
  if (valRound >= Number(204) && valRound <= Number(247)) {
    windDirection = "Ю/З";
  }
  if (valRound >= Number(248) && valRound <= Number(292)) {
    windDirection = "З";
  }
  if (valRound >= Number(293) && valRound <= Number(337)) {
    windDirection = "С/З";
  }
  if (valRound >= Number(338) && valRound <= Number(360)) {
    windDirection = "С";
  }

  return windDirection;
}

// Получение картинки для определенной погоды

function howWeather(numb) {
  let how = numb;
  switch (how) {
    case 0:
      currentImg.src = "./design/img/images_Weather/Ясно.jpg";
      how = "Ясно";
      break;
    case 1:
      currentImg.src = "./design/img/images_Weather/Преимущественно ясно.jpg";
      how = "Преимущественно ясно";
      break;
    case 2:
      currentImg.src = "./design/img/images_Weather/Переменная облачность.jpg";
      how = "Переменная облачность";
      break;

    case 3:
      currentImg.src = "./design/img/images_Weather/Пасмурно.jpg";
      how = "Пасмурно";
      break;

    case 45:
      currentImg.src = "./design/img/images_Weather/Туман.jpg";
      how = "Туман";
      break;

    case 61:
      currentImg.src = "./design/img/images_Weather/Небольшой дождь.jpg";
      how = "Небольшой дождь";
      break;
    case 63:
      currentImg.src = "./design/img/images_Weather/Умеренный Дождь.jpg";
      how = "Умеренный Дождь";
      break;
    case 65:
      currentImg.src = "./design/img/images_Weather/Дождь.jpg";
      how = "Дождь";
      break;
    case 80:
      currentImg.src = "./design/img/images_Weather/Слабый ливень.jpeg";
      how = "Слабый ливень";
      break;
    case 81:
      currentImg.src = "./design/img/images_Weather/Умеренный ливень.jpg";
      how = "Умеренный ливень";
      break;
    case 82:
      currentImg.src = "./design/img/images_Weather/Сильный ливень.jpg";
      how = "Сильный ливень";
      break;
    case 85:
      currentImg.src = "./design/img/images_Weather/Снег.jpeg";
      how = "Снег";
      break;
    case 86:
      currentImg.src = "./design/img/images_Weather/Снегопад.jpg";
      how = "Снегопад";
      break;
    case 95:
      currentImg.src = "./design/img/images_Weather/Гроза.jpg";
      how = "Гроза";
      break;
    case 96:
      currentImg.src = "./design/img/images_Weather/гроза,слабый град.jpg";
      how = "Гроза,слабый град";
      break;
    case 99:
      currentImg.src = "./design/img/images_Weather/Гроза,сильный град.jpeg";
      how = "Гроза,сильный град";
      break;
    default:
      currentImg.src = "./design/img/images_Weather/Ясно.jpg";
      how = "Извините,сервис недоступен";
  }
  return how;
}

//Функция записывает данные в localStorage
function setLocalStorage() {
  let serializedBtnLocalStorage = JSON.stringify(btnLocalStorage);
  localStorage.setItem("btnLocalStorage", serializedBtnLocalStorage);
}
//Функция записывает данные о нажатых кнопах в localStorage
function setLocalStorage(){
    let serializedBtnLocalStorage = JSON.stringify(btnLocalStorage);
    localStorage.setItem("btnLocalStorage", serializedBtnLocalStorage );
};
function delMessage(){
    errorMessage.innerHTML = '';
};
   

btnMobile.addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.toggle("opened");
    btnAllCities.classList.toggle("shown");
    btnsPanel.classList.toggle("shown");
    btnGame.classList.toggle("shown");
}); 