const modal = document.querySelector('#reviews-modal');

let clearTimeoutId = null;

function clearModal() {
  if (!modal) {
    return;
  }

  if (clearTimeoutId) {
    clearTimeout(clearTimeoutId);
    clearTimeoutId = null;
  }

  clearTimeoutId = setTimeout(() => {
    modal.querySelectorAll('p').forEach((el) => {
      el.textContent = '';
    });

    const img = modal.querySelector('img');
    if (img) {
      img.removeAttribute('src');
      img.alt = '';
    }

    clearTimeoutId = null;
  }, 500);
}

function renderModal(el) {
  if (clearTimeoutId) {
    clearTimeout(clearTimeoutId);
    clearTimeoutId = null;
  }

  const avatar = modal.querySelector('.review-modal__avatar img');
  const author = modal.querySelector('.review-modal__author');
  const tour = modal.querySelector('.review-modal__tour');
  const location = modal.querySelector('.review-modal__location');
  const text = modal.querySelector('.review-modal__text');

  const currentItem = el.closest('.reviews__item');
  const imgSrc = currentItem.querySelector('.reviews__item-avatar img').getAttribute('src');
  const imgAlt = currentItem.querySelector('.reviews__item-avatar img').getAttribute('alt');
  const authorName = currentItem.querySelector('.reviews__item-author').textContent;
  const locationVal = currentItem.querySelector('.reviews__item-location').textContent;
  const tourName = currentItem.querySelector('.reviews__item-fullname').textContent;
  const textMain = currentItem.querySelector('.reviews__item-main-text').textContent;
  const textHidden = currentItem.querySelector('.reviews__item-hidden').textContent;
  const fullText = textMain + textHidden;

  avatar.setAttribute('src', imgSrc);
  avatar.setAttribute('alt', imgAlt);
  author.textContent = authorName;
  tour.textContent = tourName;
  location.textContent = locationVal;
  text.textContent = fullText;
}

function openReviewsModal() {
  if (!modal) {
    return
  }

  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('reviews__item-btn')) {
      renderModal(target);
      document.body.classList.add('no-scroll');      
      modal.classList.add('is-active');
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal__close-btn')) {
      modal.classList.remove('is-active');
      clearModal();
      document.body.classList.remove('no-scroll');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.classList.remove('is-active');
      clearModal();
      document.body.classList.remove('no-scroll');
    }
  });

}

export { openReviewsModal };