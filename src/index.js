import './styles/main.css';
import displayShows from './modules/display.js';
// eslint-disable-next-line
import filterMovies from './modules/genre.js';

const mobileMenu = document.querySelector('.mobile-menu');
const menuToggle = document.querySelector('.menu-toggle');

const themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('change', () => {
  document.documentElement.classList.toggle('dark-theme');
});

window.addEventListener('DOMContentLoaded', () => {
  displayShows();
  filterMovies();
});

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

export { mobileMenu, menuToggle };