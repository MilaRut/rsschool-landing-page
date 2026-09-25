import { renderCards } from "./render-card.js";
const toursList = document.querySelector('#tours-list');
const tabsBtns = document.querySelectorAll('.tours__tabs-btn');
const showMoreBtn = document.querySelector('.tours__more-btn');
const skeleton = document.querySelector('#skeleton');

function handleTabs() {
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('tabs-btn')) {
      if (skeleton.classList.contains('is-hidden')) {
        skeleton.classList.remove('is-hidden')
      }
      toursList.innerHTML = '';
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
  if (!tabsBtns || tabsBtns.length === 0) {
    return;
  }

  const selectedCategory = localStorage.getItem('selected-cat') || 'martin';
  renderCards(selectedCategory);
  tabsBtns.forEach((btn) => {
    btn.classList.remove('is-active');
  });
  document.querySelector(`[data-tab="${selectedCategory}"]`).classList.add('is-active');
  setTimeout(() => {
    localStorage.removeItem('selected-cat');
  }, 500);
}

export { handleTabs, renderInitial };