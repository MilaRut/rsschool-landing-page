const themeToggle = document.querySelector('.header__theme-switcher');

function loadCurrentTheme() {
  const currentTheme = localStorage.getItem('data-theme') || '';
  if (currentTheme === 'light') {
    document.body.classList.add('light');
  } else {
    if (document.body.classList.contains('light')) {
      document.body.classList.remove('light');
    }
  }
}

function switchTheme() {
  themeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('data-theme') || '';
    if (currentTheme === '') {
      document.body.classList.add('light');
      localStorage.setItem('data-theme', 'light');
    } else {
      if (document.body.classList.contains('light')) {
        document.body.classList.remove('light');
      }
      localStorage.setItem('data-theme', '')
    }
  });
}

export { loadCurrentTheme, switchTheme };