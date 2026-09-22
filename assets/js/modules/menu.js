const triggers = document.querySelectorAll('.js-dropdown-trigger');
const navItems = document.querySelectorAll('.nav__item');
// const body = document.querySelector('body');

function openMenu(content, trigger) {
  content.classList.add('is-active');
  content.classList.remove('preload');
  trigger.classList.add('is-active');
  // body.classList.add('no-scroll');
}

function closeMenu(content, trigger) {
  content.classList.remove('is-active');
  trigger.classList.remove('is-active');
  // body.classList.remove('no-scroll');
  setTimeout(() => {
    content.classList.add('preload');
  }, 500);
}

function toggleMenu() {
  triggers.forEach((el) => {
    let currentEl = el;
    let dataId = currentEl.getAttribute('data-id');
    let currentContent = document.querySelector(dataId);
    el.addEventListener('click', (e) => {
      e.preventDefault();
      if (!currentContent.classList.contains('is-active')) {
        openMenu(currentContent, currentEl);
      } else {
        closeMenu(currentContent, currentEl);
      }
    });
    navItems.forEach((item) => {
      item.addEventListener('click', () => {
        closeMenu(currentContent, currentEl);
      });
    });
    document.addEventListener('click', (e) => {
      if (currentContent.classList.contains('is-active') && e.target !== el && !el.contains(e.target) && !currentContent.contains(e.target)) {
        closeMenu(currentContent, currentEl);
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        currentContent.classList.remove('is-active');
        currentEl.classList.remove('is-active');
      }
    });
  });
}

export {toggleMenu};
