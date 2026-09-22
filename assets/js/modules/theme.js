const themeToggle = document.querySelector('.header__theme-switcher');
const imgLight = document.querySelectorAll('.light');
const imgDark = document.querySelectorAll('.dark');

function show(arr) {
  arr.forEach((el) => {
    el.style.display = 'block';
  })
}

function hide(arr) {
  arr.forEach((el) => {
    el.style.display = 'none';
  })
}

function loadCurrentTheme() {
  const currentTheme = localStorage.getItem('data-theme') || '';
  if (currentTheme === 'light') {
    document.body.classList.add('light');
    hide(imgLight);
    show(imgDark);
  } else {
    if (document.body.classList.contains('light')) {
      document.body.classList.remove('light');
      hide(imgDark);
      show(imgLight);
    }
  }
}

function switchTheme() {
  themeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('data-theme') || '';
    if (currentTheme === '') {
      document.body.classList.add('light');
      localStorage.setItem('data-theme', 'light');
      hide(imgLight);
      show(imgDark);
    } else {
      if (document.body.classList.contains('light')) {
        document.body.classList.remove('light');
      }
      localStorage.setItem('data-theme', '')
      hide(imgDark);
      show(imgLight);
    }
  });
}

export { loadCurrentTheme, switchTheme };