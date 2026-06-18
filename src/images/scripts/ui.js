export const renderSlides = (parksArray, container) => {
  const sliedesHTML = parksArray
    .map((park, index) => {
      const parkImage = park.images?.[0]?.url || ''; // Безопасная проверка фото
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
