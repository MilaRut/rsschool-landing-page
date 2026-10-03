const triggers = document.querySelectorAll('.js-dropdown-trigger');
const nav = document.querySelector('.nav__list');
const navItems = document.querySelectorAll('.nav__item');
const navBtn = document.querySelector('.header__menu-toggle');
const body = document.querySelector('body');
const mediaQuery = window.matchMedia('(min-width: 769px)');

function openMenu(content, trigger) {
  content.classList.add('is-active');
  content.classList.remove('preload');
  trigger.classList.add('is-active');
  trigger.setAttribute('aria-expanded', 'true')
  trigger.setAttribute('aria-label', 'Закрыть меню')
  body.classList.add('no-scroll');
}

function closeMenu(content, trigger) {
  content.classList.remove('is-active');
  trigger.classList.remove('is-active');
  trigger.setAttribute('aria-expanded', 'false')
  trigger.setAttribute('aria-label', 'Открыть меню')
  body.classList.remove('no-scroll');
  setTimeout(() => {
    content.classList.add('preload');
  }, 500);
}

function toggleMenu() {
  triggers.forEach((el) => {
    const currentEl = el;
    const dataId = currentEl.getAttribute('aria-controls');
    const currentContent = document.getElementById(dataId);
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
        if (currentContent.classList.contains('is-active')) {
          closeMenu(currentContent, currentEl);
        }
      }
    });
  });
}

function handleMediaChange(e) {
  if (e.matches) {
    closeMenu(nav, navBtn);
  }
}

export { toggleMenu, mediaQuery, handleMediaChange };
