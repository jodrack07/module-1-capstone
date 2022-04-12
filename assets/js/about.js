import addHeaderBackground from './util.js';

// show humberger menu
const humberger = document.querySelector('.fa-bars');
const closeMenu = document.querySelector('.fa-xmark');
const header = document.querySelector('.header-bottom');
const navButton = document.querySelector('.nav-button');

const links = document.querySelectorAll('.nav-item');

function openMobileMenu() {
  header.style.display = 'flex';
  closeMenu.style.display = 'inline-block';
  navButton.style.display = 'flex';
  navButton.style.marginTop = '5px';
}

function closeMobileMenu() {
  header.style.display = 'none';
  closeMenu.style.display = 'none';
}

// remove the active class to all links
function removeActiveClass() {
  links.forEach((link) => link.classList.remove('nav-item-active'));
}

// add nav-item-active class to the current link
function selectCurrentActiveItem() {
  removeActiveClass();
  this.classList.add('nav-item-active');
}

function removeMenuOnceLinkGetClicked() {
  header.style.display = 'none';
  closeMenu.style.display = 'none';
}

// invoking functions
humberger.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);

links.forEach((link) =>
  link.addEventListener('click', selectCurrentActiveItem)
);

links.forEach((link) =>
  link.addEventListener('click', removeMenuOnceLinkGetClicked)
);

navButton.addEventListener('click', removeMenuOnceLinkGetClicked);

addHeaderBackground();
