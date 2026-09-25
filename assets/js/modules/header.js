function setHeaderOnScroll() {
  const header = document.querySelector('.header');
  const themeToggle = document.querySelector('.header__theme-switcher');
  const SCROLL_THRESHOLD = 100;

  function updateHeaderState() {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollPosition < SCROLL_THRESHOLD) {
      header.classList.add('header--transparent');
      themeToggle.classList.remove('is-transformed');
    } else {
      header.classList.remove('header--transparent');
      themeToggle.classList.add('is-transformed');
    }
  }

  updateHeaderState();

  window.addEventListener('scroll', updateHeaderState);
}

export {setHeaderOnScroll};
