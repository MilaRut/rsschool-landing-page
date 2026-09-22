import {toggleMenu} from "./modules/menu.js";
import {scrollToTop, showButton} from "./modules/top-btn.js";
import {loadCurrentTheme, switchTheme} from "./modules/theme.js";
import {setHeaderOnScroll} from "./modules/header.js";

window.addEventListener('DOMContentLoaded', () => {
  loadCurrentTheme();
  toggleMenu();
  scrollToTop();
  showButton();
  switchTheme();
  setHeaderOnScroll();
});