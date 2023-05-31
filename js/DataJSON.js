//Альбина
//Графики роста населения
const cityPopulation = `[{
    "city": "Токио",
    "population": [37309862, 37535143, 37773022, 38004866, 38082617, 38163653, 38245184, 37393000, 37340000, 37274000]
},
{
    "city": "Дели",
    "population": [23471625, 24198999, 24967038, 25746689, 26626122, 27542686, 28464867, 30291000, 31181000, 32066000]
},
{
    "city": "Шанхай",
    "population": [21513514, 22239493, 23006060, 23781338, 24600948, 25455162, 26314611, 27058000, 27796000, 28517000]
},
{
    "city": "Дакка",
    "population": [15899892, 16453466, 17037990, 17638714, 18456825, 19309479, 20167356, 21006000, 21741000, 22478000]
},
{
    "city": "Сан-Паулу",
    "population": [20233309, 20504805, 20791481, 21078815, 21332829, 21597567, 21863927, 22043000, 22237000, 22430000]
},
{
    "city": "Мехико",
    "population": [20485165, 20652501, 20829192, 21008927, 21218751, 21437433, 21657457, 21782000, 21919000, 22085000]
},
{
    "city": "Пекин",
    "population": [17899927, 18709609, 19564563, 20429581, 21350764, 22310842, 23276801, 20463000, 20897000, 21333000]
},
{
    "city": "Каир",
    "population": [17662666, 18024178, 18405903, 18793218, 19226635, 19678353, 20132837, 20901000, 21323000, 21750000]
},
{
    "city": "Мумбаи",
    "population": [20082795, 20395623, 20725943, 21063985, 21497358, 21949032, 22403472, 20411000, 20668000, 20961000]
},
{
    "city": "Осака",
    "population": [19795886, 19939878, 20019919, 20241057, 20310010, 20381875, 20454180, 19165000, 19111000, 19060000]
}
]`;

//Оля
//Время
const datejson = `[-540, -330, -480, -360, 180, 360, -480, -180, -330, -540]`; // gettimezoneoffset для городов с котроыми работаем, разницы в минутах между UTC и часовым поясом этих городов

//Лена
// Координаты локации
const arrLatitudeJson = `[35.69, 28.65, 31.22, 23.73, -23.55, 19.43, 39.91, 30.06, 19.07, 34.69]`;
const arrLongitudeJson = `[139.69, 77.23, 121.46, 90.41, -46.64, -99.13, 116.40, 31.25, 72.88, 135.50]`;

//Диана
//Слайдер
const imgCities = [
    {
      city: "Токио",
      population: "37435191",
      imgUrls: [
        "../design/img/cities/tokyo/tokyo1.jpg",
        "../design/img/cities/tokyo/tokyo2.jpg",
        "../design/img/cities/tokyo/tokyo3.jpg",
        "../design/img/cities/tokyo/tokyo4.jpg",
        "../design/img/cities/tokyo/tokyo5.jpg",
        "../design/img/cities/tokyo/tokyo6.jpg",
        "../design/img/cities/tokyo/tokyo7.jpg",
      ],
    },
    {
      city: "Дели",
      population: "29399141",
      imgUrls: [
        "../design/img/cities/delhi/delhi1.jpg",
        "../design/img/cities/delhi/delhi2.jpg",
        "../design/img/cities/delhi/delhi3.jpg",
        "../design/img/cities/delhi/delhi4.jpg",
        "../design/img/cities/delhi/delhi5.jpg",
        "../design/img/cities/delhi/delhi6.jpg",
        "../design/img/cities/delhi/delhi7.jpg",
      ],
    },
    {
      city: "Шанхай",
      population: "26317104",
      imgUrls: [
        "../design/img/cities/shanghai/shanghai1.jpg",
        "../design/img/cities/shanghai/shanghai2.jpg",
        "../design/img/cities/shanghai/shanghai3.jpg",
        "../design/img/cities/shanghai/shanghai4.jpg",
        "../design/img/cities/shanghai/shanghai5.jpg",
        "../design/img/cities/shanghai/shanghai6.jpg",
        "../design/img/cities/shanghai/shanghai7.jpg",
      ],
    },
    {
        city: "Дакка",
        population: "20283552",
        imgUrls: [
            "../design/img/cities/dhaka/dhaka1.jpg",
            "../design/img/cities/dhaka/dhaka2.jpg",
            "../design/img/cities/dhaka/dhaka3.jpg",
            "../design/img/cities/dhaka/dhaka4.jpg",
            "../design/img/cities/dhaka/dhaka5.jpg",
            "../design/img/cities/dhaka/dhaka6.jpg",
            "../design/img/cities/dhaka/dhaka7.jpg",
        ],
    },
    {
      city: "Сан-Паулу",
      population: "21846507",
      imgUrls: [
        "../design/img/cities/sao-paolo/sao-paolo1.jpg",
        "../design/img/cities/sao-paolo/sao-paolo2.jpg",
        "../design/img/cities/sao-paolo/sao-paolo3.jpg",
        "../design/img/cities/sao-paolo/sao-paolo4.jpg",
        "../design/img/cities/sao-paolo/sao-paolo5.jpg",
        "../design/img/cities/sao-paolo/sao-paolo6.jpg",
        "../design/img/cities/sao-paolo/sao-paolo7.jpg",
      ],
    },
    {
      city: "Мехико",
      population: "21671908",
      imgUrls: [
        "../design/img/cities/mexico/mexico1.jpg",
        "../design/img/cities/mexico/mexico2.jpg",
        "../design/img/cities/mexico/mexico3.jpg",
        "../design/img/cities/mexico/mexico4.jpg",
        "../design/img/cities/mexico/mexico5.jpg",
        "../design/img/cities/mexico/mexico6.jpg",
        "../design/img/cities/mexico/mexico7.jpg",
      ],
    },
    {
        city: "Пекин",
        population: "20035455",
        imgUrls: [
          "../design/img/cities/beijing/beijing1.jpg",
          "../design/img/cities/beijing/beijing2.jpg",
          "../design/img/cities/beijing/beijing3.jpg",
          "../design/img/cities/beijing/beijing4.jpg",
          "../design/img/cities/beijing/beijing5.jpg",
          "../design/img/cities/beijing/beijing6.jpg",
          "../design/img/cities/beijing/beijing7.jpg",
        ],
    },
    {
      city: "Каир",
      population: "20484965",
      imgUrls: [
        "../design/img/cities/cairo/cairo1.jpg",
        "../design/img/cities/cairo/cairo2.jpg",
        "../design/img/cities/cairo/cairo3.jpg",
        "../design/img/cities/cairo/cairo4.jpg",
        "../design/img/cities/cairo/cairo5.jpg",
        "../design/img/cities/cairo/cairo6.jpg",
        "../design/img/cities/cairo/cairo7.jpg",
      ],
    },
    {
      city: "Мумбаи",
      population: "20185064",
      imgUrls: [
        "../design/img/cities/mumbai/mumbai1.jpg",
        "../design/img/cities/mumbai/mumbai2.jpg",
        "../design/img/cities/mumbai/mumbai3.jpg",
        "../design/img/cities/mumbai/mumbai4.jpg",
        "../design/img/cities/mumbai/mumbai5.jpg",
        "../design/img/cities/mumbai/mumbai6.jpg",
        "../design/img/cities/mumbai/mumbai7.jpg",
      ],
    },
    {
      city: "Осака",
      population: "19222665",
      imgUrls: [
        "../design/img/cities/osaka/osaka1.jpg",
        "../design/img/cities/osaka/osaka2.jpg",
        "../design/img/cities/osaka/osaka3.jpg",
        "../design/img/cities/osaka/osaka4.jpg",
        "../design/img/cities/osaka/osaka5.jpg",
        "../design/img/cities/osaka/osaka6.jpg",
        "../design/img/cities/osaka/osaka7.jpg",
      ],
    },
  ];

//Информация о городе
//Аня
const infoCities = `[{
    "header": "Токио",
    "country": "Япония",
    "language": "Японский",
    "populationDensity": "6400,9 чел./км",
    "sights": "Район Синдзюку, Сибуя, Остров Одайба, Токийская башня, Храм Сэнсо-дзи, район Акихабара",
    "funFacts": "Токио, являясь одной из самых больших городских агломераций на Земле, считается самым безопасным городом в мире"
}, {
    "header": "Дели",
    "country": "Индия",
    "language": "Хинди, английский, панджаби и урду",
    "populationDensity": "11297 чел./км²",
    "sights": "Минар Кутуб, Пурана Куила, Форт Салимгарх, Храм Акшардхам, Гробница Хумаюна",
    "funFacts": "В Дели находится 60000 памятников мировой значимости, построенных более чем несколько тысячелетий тому назад."
}, {
    "header": "Шанхай",
    "country": "Китай",
    "language": "Китайский",
    "populationDensity": "3809.57 чел./км²",
    "sights": "Большой шанхайский театр, район Пудун, телебашня Восточная жемчужина, небоскрёбы Башня Цзиньмао, Нанкинская улица",
    "funFacts": "Шанхай является крупнейшим финансовым центром Китая, и одним из ведущих — в Восточной Азии и мире (после Нью-Йорка, Лондона и Токио)."
},
{
    "header": "Дакка",
    "country": "Бангладеш",
    "language": "Бенгальский",
    "populationDensity": "8543 чел./км²",
    "sights": "Форт Лалбах, Дворец бенгальских навабов, Мечеть Звезды, Дакешвари, Мавзолей трёх лидеров",
    "funFacts": "основанный в VII веке, город Дакка был столицей исторического государства Бенгалии (1608—1717), и стал столицей Бангладеша с 1971 года."
},
{
    "header": "Сан-Паулу",
    "country": "Бразилия",
    "language": "Португальский",
    "populationDensity": "7216,3 чел./км²",
    "sights": "Кафедральный собор, Музей искусств, Петропавловский собор, Храм Соломона, Городской театр.",
    "funFacts": "Девиз на гербе города переводится с латинского как: «Не мной управляют, а я управляю»"
},
{
    "header": "Мехико",
    "country": "Мексика",
    "language": "Испанский",
    "populationDensity": "5416 чел./км²",
    "sights": "Парк Чапультепек, Национальный исторический музей, район Поланко, Национальный кафедральный собор, площадь Сокало",
    "funFacts": "Мехико был основан индейцами-ацтеками в 1325 году."
},
{
    "header": "Пекин",
    "country": "Китай",
    "language": "Китайский",
    "populationDensity": "1291,89 чел./км²",
    "sights": "Площадь Тяньаньмэнь, Запретный Город, Национальный музей Китая, Мавзолей Мао Цзэдуна, Улица Люличан",
    "funFacts": "Пекин входит в число четырёх древних столиц Китая."
},
{
    "header": "Каир",
    "country": "Египет",
    "language": "Египетский арабский",
    "populationDensity": "16239 чел./км²",
    "sights": " Большой Египетский музей, египетские пирамиды, Мечеть Ибн Тулун, Мечеть Мухаммада Али в каирской Цитадели, Станция метро 'Мар-Гиргис'",
    "funFacts": "В настоящее время городская застройка подошла вплотную к плато Гиза — ближайший дом находится всего лишь в 200 метрах от сфинкса."
},
{
    "header": "Мумбаи",
    "country": "Индия",
    "language": "Маратхи, хинди",
    "populationDensity": "20694 чел./км²",
    "sights": "Вокзал Чхатрапати-Шиваджи, Ворота в Индию, Джама-Масджид, бюст трёхликого Шивы, Мечеть Хаджи Али",
    "funFacts": "Через пассажирский терминал Мумбаи проходит около половины пассажирского потока всей Индии."
},
{
    "header": "Осака",
    "country": "Япония",
    "language": "Японский",
    "populationDensity": "12042,52 чел./км²",
    "sights": "Замок в Осаке, Национальный музей искусств, Национальный театр бунраку, Иссин-дзи, Ситэнно-дзи",
    "funFacts": "Осака, являясь третьим по населению городом Японии, считается третьим по безопасности городом на Земле (после Токио и Сингапура)."
}
]`;

//Оля
//Игра
const gamejson = `[
    "Метро Шанхая является первым в мире по протяжённости линий. Его длина состовляет более 500 км",
    "Токио, несмотря на свою славу, является одним из самых опасных городов мира",
    "В Мехико почти каждый день происходят землятресения",
    "Весь Сан-Паулу завешан бесконечными рекламными баннерами и щитами, которые запрещено снимать. Так правительство защищается от нападения птиц",
    "В Мумбаи существует курротный отдых. Тут прекрасная природа, а пляжи есть прямо в городской черте",
    "Самая низкая температура в Каире была зафиксирована в 2015г, она составила -1 °C",
    "Дакка является одним из самых загрязнённых городов на планете",
    "Правительсвто Пекина искусственно вызывает осадки, чтобы не было пыли",
    "В Шанхае уже около 100 лет стоит памятник Александру Пушкину",
    "Дели включает в себя столицу страны – Нью-Дели, которая является всего-лишь его самым фешенебельным районом"
]`;

const answerjson = `["true", "false", "true", "false", "false", "false", "true", "true", "true", "true"]`;

const explanations = `[
    "Ежедневный пассажиропоток шанхайского метрополитена составляет около 7 млн человек.",
    "Столица Японии стабильно держится в тройке лидеров по безопасности. В 2022 году первое место у Токио забрал Копенгаген",
    "Мехико окружают горы вулканического происхождения, территория города сейсмически опасна.",
    "В Сан-Паулу законодательно запрещены банеры и вся наружная реклама на автобусах, плакатах и тд, чтобы не портить вид города.",
    "Городу, действительно, повезло с географическим расположением, одна беда — всё вокруг покрыто толстым слоем мусора, поэтому купаться тут не стоит.",
    "Самая низкая температура, когда-либо зафиксированная в Каире, составила +2,4 °C. Отрицательных температур здесь не фиксировалось ни разу за всю историю наблюдений.",
    "В 2017 году в городе в течение 188 дней из 365 фиксировалось наличие токсичного аммиака в городском воздухе.",
    "Пекин часто накрывают пыльные бури, по причине чего иногда правительство искусственно вызывает осадки. В 2002 г. подобная буря принесла в столицу около 50 000 тонн пыли.",
    "Памятник Пушкину был установлен в 1937 году по инициативе проживавших в Шанхае русских эмигрантов. Поводом стало 100-летие со дня смерти поэта. ",
    "Нью-Дели -столица Индии населением — 3 431 336 человек – один из столичных районов, в котором расположены правительственные здания."
]`;
