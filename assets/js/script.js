import { toggleMenu, mediaQuery, handleMediaChange } from "./modules/menu.js";
import { scrollToTop, showButton } from "./modules/top-btn.js";
import { loadCurrentTheme, switchTheme } from "./modules/theme.js";
import { setHeaderOnScroll } from "./modules/header.js";
import { initSlider } from "./modules/slider.js";
import { handleTabs, renderInitial } from "./modules/tabs.js";
import { showMore } from "./modules/show-more.js";
import { handleControls } from "./modules/modal.js";
import { showSuccess } from "./modules/success.js";
import { setSelectedCat } from "./modules/popular.js";
import { slidesPlugin } from "./modules/gallery.js";
import { openReviewsModal } from "./modules/reviews.js";
const modals = document.querySelectorAll('.modal');

window.addEventListener('DOMContentLoaded', () => {
  loadCurrentTheme();
  toggleMenu();
  scrollToTop();
  showButton();
  switchTheme();
  setHeaderOnScroll();
  mediaQuery.addEventListener('change', handleMediaChange);
  initSlider();
  handleTabs();
  renderInitial();
  showMore();
  handleControls();
  showSuccess();
  setSelectedCat();
  slidesPlugin();
  openReviewsModal();
  
  window.addEventListener('load', () => {
    modals.forEach((el) => {
      el.classList.remove('modal--preload');
    });
  });
});
