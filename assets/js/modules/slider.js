const slidesList = document.querySelector('.reviews__list');
const slides = document.querySelectorAll('.reviews__item');
const prevBtn = document.querySelector('.pagination__btn--prev');
const nextBtn = document.querySelector('.pagination__btn--next');

let currentInd = 0;

function updateSliderPosition() {
  slidesList.style.transform = `translateX(-${currentInd * 100}%)`;
}

function createClones() {
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  firstClone.classList.add('clone');
  lastClone.classList.add('clone');

  slidesList.appendChild(firstClone);
  slidesList.insertBefore(lastClone, slides[0]);
}

function initSlider() {
  if (!slidesList) {
    return;
  }

  createClones();
  currentInd = 1;
  updateSliderPosition();
  setTimeout(() => {
    slidesList.classList.remove('preload');    
  }, 300);

  const totalSlides = slides.length;

  nextBtn.addEventListener('click', () => {
    if (currentInd >= totalSlides + 1) {
      return;
    }
    currentInd++;
    updateSliderPosition();
  });

  prevBtn.addEventListener('click', () => {
    if (currentInd <= 0) {
      return;
    }
    currentInd--;
    updateSliderPosition();
  });

  slidesList.addEventListener('transitionend', () => {
    if (slidesList.children[currentInd].classList.contains('clone')) {
      if (currentInd === 0) {
        currentInd = totalSlides;
      } else if (currentInd === totalSlides + 1) {
        currentInd = 1;
      }
      slidesList.classList.add('preload');
      updateSliderPosition();
      void slidesList.offsetWidth;
      slidesList.classList.remove('preload');
    }
  });
}

export { initSlider };
