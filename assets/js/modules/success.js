const successModal = document.querySelector('#success-modal');
const orderModal = document.querySelector('#order-modal');
const successBtns = document.querySelectorAll('.success-btn');

function showSuccess() {
  if (!successBtns || successBtns.length === 0) {
    return;
  }

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('success-btn')) {
      orderModal.classList.remove('is-active');
      successModal.classList.add('is-active');
      document.body.classList.add('no-scroll');
    }
  }); 

  document.addEventListener('click', (e) => {
    if (e.target === successModal || e.target.classList.contains('modal__close-btn')) {
      successModal.classList.remove('is-active');
      document.body.classList.remove('no-scroll');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      successModal.classList.remove('is-active');
      document.body.classList.remove('no-scroll');
    }
  });
}

export { showSuccess };