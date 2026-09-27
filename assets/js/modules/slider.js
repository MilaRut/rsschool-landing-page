const slidesList = document.querySelector('.reviews__list');
const slides = document.querySelectorAll('.reviews__item');
const prevBtn = document.querySelector('.pagination__btn--prev');
const nextBtn = document.querySelector('.pagination__btn--next');

let currentInd  = 0;

function updateSliderPosition(arr) {
  arr.style.transform = `translateX(-${currentInd  * 100}%)`;
}

function initSlider() {
  if (!slidesList) {
    return;
  }

  const total = slides.length - 1;

  nextBtn.addEventListener('click', () => {
    if (currentInd  < total) {
      currentInd ++;
    } else {
      currentInd  = 0;
    }
    updateSliderPosition(slidesList);
  });

  prevBtn.addEventListener('click', () => {
    if (currentInd  > 0) {
      currentInd --;
    } else {
      currentInd  = total;
    }
    updateSliderPosition(slidesList);
  });
}

export { initSlider };