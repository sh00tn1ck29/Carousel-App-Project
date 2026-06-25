import { fetchParks } from '../gateways/index.js';

export const renderSlides = (parksArray, container) => {
  const sliedesHTML = parksArray
    .map((park, index) => {
      const parkImage = park.images?.[0]?.url || ''; 
      return `
      <a class="carousel__slide" href="${park.url}" data-index="${index}" 
         style="background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url('${parkImage}')">
        <h3 class="carousel__subtitle">National Park</h3>
        <h2 class="carousel__title">${park.title}</h2>
      </a>
    `;
    })
    .join('');

  container.innerHTML = sliedesHTML;
};

let count = 4;
const maxSlides = 9;
let slides;

const spinnerElem = document.querySelector('.spinner');
const carouselElem = document.querySelector('.carousel');
const carouselList = document.querySelector('.carousel__list');
const carouselContainer = document.querySelector('.carousel__container');
const counterElem = document.querySelector('.carousel__counter');
const prevButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');

const updateSlider = () => {
  slides.forEach((slide) => {
    const slideIndex = +slide.dataset.index;
    if (count === slideIndex) {
      slide.classList.add('carousel__slide--selected');
      counterElem.textContent = `${count + 1}/${maxSlides + 1}`;
    } else {
      slide.classList.remove('carousel__slide--selected');
    }
  });
};

const moveSlider = () => {
  const listWidth = carouselList.clientWidth;
  const slideWidth = 280;
  const stepWidth = 295;
  const centerOffset = listWidth / 2 - slideWidth / 2;
  const translation = centerOffset - count * stepWidth;
  carouselContainer.style.transform = `translateX(${translation}px)`;
};

prevButton.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateSlider();
    moveSlider();
  }
});

nextButton.addEventListener('click', () => {
  if (count < maxSlides) {
    count++;
    updateSlider();
    moveSlider();
  }
});

fetchParks().then((data) => {
  renderSlides(data, carouselContainer);

  slides = document.querySelectorAll('.carousel__slide');

  updateSlider();
  moveSlider();

  spinnerElem.classList.add('spinner--hidden');
  carouselElem.classList.remove('carousel--hidden');
});
