//Диана
const imgCities = [
  {
    city: "Токио",
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
    city: "Сан-Паулу",
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
    city: "Каир",
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
    city: "Дакка",
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
    city: "Мумбаи",
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
    city: "Пекин",
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
    city: "Осака",
    imgUrls: [
      "../design/img/cities/osaka/osaka1.jpg",
      "../design/img/cities/osaka/osaka2.jpg",
      "../design/img/cities/osaka/osaka3.jpg",
      "../design/img/cities/osaka/osaka4.jpg",
      "../design/img/cities/osaka/osaka5.jpg",
      "../design/img/cities/osaka/osaka6.jpg",
      "../design/img/cities/osakai/osaka7.jpg",
    ],
  },
];

let createSlidersElements = () => {
  let slidesWrapper = document.querySelector(".swiper-wrapper");
  let cityName = document.getElementById("input").value;
  let cityImagesArr = imgCities.find(
    (elem) => elem.city.toLowerCase() === cityName.toLowerCase()
  ).imgUrls;

  cityImagesArr.forEach((elem) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slider-item");
    const imageInSlide = document.createElement("img");
    imageInSlide.src = elem;
    imageInSlide.alt = "фото города";
    slide.appendChild(imageInSlide);
    slidesWrapper.appendChild(slide);
  });
};

function showSlide(index) {
  let slides = document.querySelectorAll(".swiper-slider-item");

  slides.forEach((elem) => {
    elem.classList.remove("active");
  });
  slides[index].classList.add("active");
}

let showSlider = () => {
  let currentSlide = 0;
  createSlidersElements();
  let slides = document.querySelectorAll(".swiper-slider-item");
  showSlide(currentSlide);

  // // перелистывание слайдов по нажатию кнопки //
  let btnPrev = document.querySelector(".swiper-button-prev");
  let btnNext = document.querySelector(".swiper-button-next");

  console.log(slides);
  btnNext.addEventListener("click", () => {
    if (currentSlide + 1 < slides.length) {
      btnPrev.classList.remove("swiper-button-disabled");
      currentSlide++;
      showSlide(currentSlide);
      if (currentSlide >= slides.length - 1) {
        btnNext.classList.add("swiper-button-disabled");
      }
    }
  });

  btnPrev.addEventListener("click", () => {
    if (currentSlide - 1 < 0) return;
    currentSlide--;
    showSlide(currentSlide);
    if (currentSlide <= 0) {
      btnPrev.classList.add("swiper-button-disabled");
    } else {
      btnNext.classList.remove("swiper-button-disabled");
    }
    console.log("all is good");
  });
};
