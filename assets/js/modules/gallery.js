export const mediaQueriesMob = window.matchMedia('(max-width: 768px)');
const slides = document.querySelectorAll('.gal-slide');

function slidesPlugin(activeSlide = 0) {
  if (!slides || slides.length === 0) {
    return;
  }

  if (mediaQueriesMob.matches) {
    return;
  }

  slides[activeSlide].classList.add('is-active');

  slides.forEach((slide) => {
    slide.addEventListener('click', () => {
      clearActiveClasses();
      slide.classList.add('is-active');
    })
  });

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove('is-active');
    });
  };
};
export { slidesPlugin };