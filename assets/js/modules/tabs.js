import { renderCards } from "./render-card.js";
const toursLit = document.querySelector('.tours__list');
const tabsBtns = document.querySelectorAll('.tours__tabs-btn');
const showMoreBtn = document.querySelector('.tours__more-btn');

function handleTabs() {
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('tabs-btn')) {
      toursLit.innerHTML = '';
      if (showMoreBtn.classList.contains('is-hidden')) {
        showMoreBtn.classList.remove('is-hidden')
      }
      renderCards(target.dataset.tab);
      tabsBtns.forEach((btn) => {
        btn.classList.remove('is-active');
      });
      target.classList.add('is-active');
    }
  });
}

function renderInitial() {
  renderCards('martin');
}

export { handleTabs, renderInitial };