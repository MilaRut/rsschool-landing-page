const toTopBtn = document.querySelector('.top-btn');

function scrollToTop() {
  if (!toTopBtn) {
    return;
  }
  toTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    }
    );
  });
}

function showButton() {
  if (!toTopBtn) {
    return;
  }

  window.addEventListener('scroll', function () {
    if (window.scrollY < 300) {
      toTopBtn.classList.remove('is-visible');
    } else {
      toTopBtn.classList.add('is-visible');
    }
  });
}

export {scrollToTop, showButton};

