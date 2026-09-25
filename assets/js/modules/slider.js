const slider = document.querySelector('.slider');

function initSlider() {
  if (!slider) {
    return;
  }

  const slides = slider.querySelectorAll('.slide');
  const prevBtn = slider.querySelector('.pagination__btn--prev');
  const nextBtn = slider.querySelector('.pagination__btn--next');
  const total = slides.length - 1;
  let currentInd = 0;

  nextBtn.addEventListener('click', () => {
    if (currentInd < total) {
      slides[currentInd].classList.remove('is-visible');
      currentInd++;
      slides[currentInd].classList.add('is-visible');
    } else {
      slides[currentInd].classList.remove('is-visible');
      currentInd = 0;
      slides[currentInd].classList.add('is-visible');
    }
  });
  
  prevBtn.addEventListener('click', () => {
    if (currentInd === 0) {
      slides[currentInd].classList.remove('is-visible');
      currentInd = total;
      slides[currentInd].classList.add('is-visible');
    } else {
      slides[currentInd].classList.remove('is-visible');
      currentInd--;
      slides[currentInd].classList.add('is-visible');
    }
  });
}

export { initSlider };