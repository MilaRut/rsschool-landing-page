const popularBtns = document.querySelectorAll('.popular__btn');

function setSelectedCat() {
  if (!popularBtns || popularBtns.length ===0) {
    return;
  }

  popularBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      localStorage.setItem('selected-cat', btn.dataset.cat);
      window.location = './tours.html'
    });
  });
}

export {setSelectedCat};