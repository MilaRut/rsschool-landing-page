import { createElement } from './create-element.js';

const modal = document.querySelector('#order-modal');
const modalImage = document.querySelector('.modal__image img');
const modalName = document.querySelector('.modal__name');
const modalLocation = document.querySelector('.modal__location');
const modalDescr = document.querySelector('.modal__description');
const modalNoteWrapper = document.querySelector('.modal__note-wrapper');
const modalRating = document.querySelector('.modal__rating');
const modalDanger = document.querySelector('.modal__danger');
const modalPrice = document.querySelector('.modal__price');
const numInput = document.querySelector('#quantity');
const radioBtns = document.querySelectorAll('input[name="insurance"]');
const modalSummary = document.querySelector('.modal__summary');
const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');

let clearTimeoutId = null;

let insur = 0;
let quant = 1;
let currentPrice = 0;

const MIN_QTY = 1;
const MAX_QTY = 10;

function updateSummary() {
  if (!modalSummary) {
    return;
  }
  modalSummary.textContent = `${(currentPrice + insur) * quant} ❤`;
}

function clearModal() {
  if (!modal) {
    return;
  }

  if (clearTimeoutId) {
    clearTimeout(clearTimeoutId);
  }

  clearTimeoutId = setTimeout(() => {
    modal.querySelectorAll('p').forEach((el) => {
      el.textContent = '';
    });

    const img = modal.querySelector('img');
    if (img) {
      img.src = '';
      img.alt = '';
    }

    const defaultRadio = modal.querySelector('[value="0"]');
    if (defaultRadio) {
      defaultRadio.checked = true;
    }

    modal.querySelector('.modal__note')?.remove();

    insur = 0;
    quant = 1;
    if (numInput) {
      numInput.value = '1';
    }

    clearTimeoutId = null;
  }, 500);
}

function renderModal(el, ind) {
  if (!modal) {
    return;
  }

  currentPrice = Number(el.price) * 1000;
  insur = 0;
  quant = 1;

  modalName.textContent = el.name;
  modalLocation.textContent = el.location;
  modalDescr.textContent = el.description;
  modal.querySelector('.modal__note')?.remove();
  if (el.note !== '') {
    const modalNote = createElement('p', ['modal__note'], {}, el.note);
    modalNoteWrapper.appendChild(modalNote);
  }
  modalImage.src = `./assets/img/tours/tour-${el.category}-${ind}.webp`;
  modalImage.alt = el.name;
  modalRating.textContent = el.rating;
  modalDanger.dataset.value = el.danger;
  modalPrice.textContent = `${currentPrice} ❤`;

  if (numInput) {
    numInput.value = '1';
  }

  const defaultRadio = modal.querySelector('[value="0"]');
  if (defaultRadio) {
    defaultRadio.checked = true;
  }

  updateSummary();
}

function handleControls() {
  if (!modal) {
    return;
  }

  radioBtns.forEach((btn) => {
    btn.addEventListener('change', (e) => {
      insur = Number(e.target.value);
      updateSummary();
    });
  })

  numInput?.addEventListener('input', (e) => {
    let value = Number(e.target.value);

    if (Number.isNaN(value) || value < MIN_QTY) {
      value = '';
      e.target.value = String(value);
    } else if (value > MAX_QTY) {
      value = MAX_QTY;
      e.target.value = String(value);
    }

    quant = value;
    updateSummary();
  });

  minusBtn.addEventListener('click', () => {
    const value = Number(numInput.value);
    if (value > MIN_QTY) {
      numInput.value = String(value - 1);
      quant = value - 1;
      updateSummary();
    }
  });

  plusBtn?.addEventListener('click', () => {
    const value = Number(numInput.value);
    if (value < MAX_QTY) {
      numInput.value = String(value + 1);
      quant = value + 1;
      updateSummary();
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal__close-btn')) {
      modal.classList.remove('is-active');
      clearModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.classList.remove('is-active');
      clearModal();
    }
  });
}

export {renderModal, handleControls};