export const mediaQueriesMob = window.matchMedia('(max-width: 768px)');
import { createElement } from './create-element.js'
import { renderModal } from './modal.js';

const toursList = document.querySelector('.tours__list');
const showMoreBtn = document.querySelector('.tours__more-btn');
const modal = document.querySelector('.modal');

async function getData() {
  const response = await fetch('../../../assets/data/tours.json');
  if (!response.ok) {
    throw new Error(`Ошибка загрузки: ${response.status}`);
  }
  return response.json();
}

function updateHiddenCards() {
  const items = toursList.querySelectorAll('.tours__item');
  const limit = mediaQueriesMob.matches ? 4 : 8;
  const isExpanded = showMoreBtn?.classList.contains('is-hidden') ?? false;

  items.forEach((li, ind) => {
    if (!isExpanded && ind >= limit) {
      li.classList.add('is-hidden');
    } else {
      li.classList.remove('is-hidden');
    }
  });
}

function renderCards(tour) {
  if (!toursList) {
    return;
  }
  
  getData()
    .then((data) => {
      const currentCategory = data.filter((el) => el.category === tour);
      currentCategory.forEach((el, ind) => {
        const li = createElement('li', ['tours__item']);
        const toursImage = createElement('div', ['tours__image']);
        toursImage.innerHTML = `
          <img src="./assets/img/tours/tour-${el.category}-${ind}.webp" alt="${el.name}." width="400" height="280">
          <span class="tours__tags">${el.tags}</span>
          <h2 class="tours__name">${el.name}</h2>
        `;
        const toursInfo = createElement('div', ['tours__info']);
        toursInfo.innerHTML = `
          <span class="tours__location">${el.location}</span>
          <p class="tours__description">${el.description}</p>
          `;
          if (el.note !== '') {
            const note = createElement('p', ['tours__note'], {}, el.note);
            toursInfo.appendChild(note);
          }
          toursInfo.innerHTML += `
          <div class="tours__parameters">
            <div class="tours__parameter">
              <span class="tours__parameter-label">Рейтинг:</span>
              <span class="tours__parameter-value">${el.rating}</span>
            </div>
            <div class="tours__parameter">
              <span class="tours__parameter-label">Опасность:</span>
              <span class="tours__parameter-value" data-value="${el.danger}"></span>
            </div>
            <div class="tours__parameter">
              <span class="tours__parameter-label">Цена:</span>
              <span class="tours__parameter-value" data-value="${el.price}"></span>
            </div>
          </div>
        `;
        const toursBtn = createElement('button', ['tours__btn', 'btn', 'btn--primary']);
        toursBtn.innerHTML = `<span>Хочу сюда!</span>`
        toursInfo.appendChild(toursBtn);

        li.appendChild(toursImage);
        li.appendChild(toursInfo);
        toursList.appendChild(li);

        updateHiddenCards();

        toursBtn.addEventListener('click', () => {
          modal.classList.add('is-active');
          renderModal(el, ind);
        });
      })

      mediaQueriesMob.addEventListener('change', updateHiddenCards);
    });
}

export { renderCards };