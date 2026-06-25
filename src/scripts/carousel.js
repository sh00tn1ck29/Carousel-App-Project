import { fetchParks } from '../gateways/index.js';

const INITIAL_PARK_INDEX = 4;

export const renderSlides = (parksArray) => {
  const carouselContainer = document.querySelector('.carousel__container');

  const slidesHTML = parksArray
    .map((park, index) => {
      const parkImage = park.images[0].url;
      return `
      <a class="carousel__slide" href="${park.url}" data-index="${index}" 
         style="background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url('${parkImage}')">
        <h3 class="carousel__subtitle">National Park</h3>
        <h2 class="carousel__title">${park.title}</h2>
      </a>
    `;
    })
    .join('');

  carouselContainer.innerHTML = slidesHTML;
};

const spinnerElem = document.querySelector('.spinner');
const carouselElem = document.querySelector('.carousel');
const carouselList = document.querySelector('.carousel__list');
const carouselContainer = document.querySelector('.carousel__container');
const counterElem = document.querySelector('.carousel__counter');
const prevButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');

let slides;

const updateSlider = (currentParkIndex, totalSlides) => {
  slides.forEach((slide) => {
    const slideIndex = +slide.dataset.index;
    if (currentParkIndex === slideIndex) {
      slide.classList.add('carousel__slide--selected');
      counterElem.textContent = `${currentParkIndex + 1}/${totalSlides}`;
    } else {
      slide.classList.remove('carousel__slide--selected');
    }
  });
};

const moveSlider = (currentParkIndex) => {
  const listWidth = carouselList.clientWidth;
  const slideWidth = 280;
  const stepWidth = 295;
  const centerOffset = listWidth / 2 - slideWidth / 2;
  const translation = centerOffset - currentParkIndex * stepWidth;
  carouselContainer.style.transform = `translateX(${translation}px)`;
};

const initCarousel = (totalSlides) => {
  let currentParkIndex = INITIAL_PARK_INDEX;

  prevButton.addEventListener('click', () => {
    if (currentParkIndex > 0) {
      currentParkIndex--;
      updateSlider(currentParkIndex, totalSlides);
      moveSlider(currentParkIndex);
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentParkIndex < totalSlides - 1) {
      currentParkIndex++;
      updateSlider(currentParkIndex, totalSlides);
      moveSlider(currentParkIndex);
    }
  });

  updateSlider(currentParkIndex, totalSlides);
  moveSlider(currentParkIndex);
};

fetchParks().then((data) => {
  if (!data || data.length === 0) return;

  renderSlides(data);

  slides = document.querySelectorAll('.carousel__slide');

  initCarousel(data.length);

  spinnerElem.classList.add('spinner--hidden');
  carouselElem.classList.remove('carousel--hidden');
});

