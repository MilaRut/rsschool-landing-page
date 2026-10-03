const showMoreBtn = document.querySelector('.tours__more-btn');

function showMore() {
  if (!showMoreBtn) {
    return;
  }

  showMoreBtn.addEventListener('click', () => {
    const hiddenItems = document.querySelectorAll('.tours__item.is-hidden');
    hiddenItems.forEach((item) => {
      item.classList.remove('is-hidden');
    })
    showMoreBtn.classList.add('is-hidden');
  });
}

export { showMore };