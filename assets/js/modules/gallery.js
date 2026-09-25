export const mediaQueriesMob = window.matchMedia('(max-width: 768px)');
const slides = document.querySelectorAll('.gal-slide');

let currentActiveSlide = 0;

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('is-active');
  });
};

function onSlideClick(e) {
  clearActiveClasses();
  e.currentTarget.classList.add('is-active');
  currentActiveSlide = [...slides].indexOf(e.currentTarget);
}

function enableSlider(activeSlide = 0) {
  clearActiveClasses();
  slides[activeSlide]?.classList.add('is-active');
  slides.forEach((slide) => slide.addEventListener('click', onSlideClick));
}

function disableSlider() {
  clearActiveClasses();
  slides.forEach((slide) => slide.removeEventListener('click', onSlideClick));
}

function slidesPlugin(activeSlide = 0) {
  if (!slides || slides.length === 0) {
    return;
  }

  if (mediaQueriesMob.matches) {
    return;
  }

  const handle = (e) => {
    if (e.matches) {
      disableSlider();
    } else {
      enableSlider(currentActiveSlide ?? activeSlide);
    }
  };

  handle(mediaQueriesMob);

  mediaQueriesMob.addEventListener('change', handle);
};

export { slidesPlugin };