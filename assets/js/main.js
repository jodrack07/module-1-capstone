import programs from './data/programs.js';
import speakers from './data/speakers.js';
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

// generate cards automatically
const generateProgramCards = () => {
  const cardsWrapper = document.querySelector('.cards-wrapper');
  cardsWrapper.innerHTML = '';

  for (let i = 0; i < programs.length; i += 1) {
    cardsWrapper.innerHTML += `
    <div class="card">
        <div>
            <img
            src="${programs[i].image}"
            id="${
  programs[i].title.toLocaleLowerCase() === 'boost' ? 'boost' : ''
}"
            alt="${programs[i].title} icon"
            />
        </div>
        <h3>${programs[i].title}</h3>
        <p>
            ${programs[i].description}
        </p>
    </div>
    `;
  }
};

// generating speakers data dynamically
const generateSpeakersData = () => {
  const speakersWrapper = document.querySelector('.card-wrapper');
  speakersWrapper.innerHTML = '';
  for (let i = 0; i < speakers.length; i += 1) {
    speakersWrapper.innerHTML += `
    <div class="speaker-card">
      <div class="speaker-card-images">
        <img src="./assets/images/img1.png" alt="background">
        <img
          src="${speakers[i].image}"
          alt="speaker-${i} image"
        />
      </div>
      <div class="speaker-details">
        <h3>${speakers[i].name}</h3>
        <p class="speaker-desc-1">${speakers[i].description1}</p>
        <hr>
        <p class="speaker-desc-2">${speakers[i].description2}</p>
      </div>
    </div>
  `;
  }
};

// invoking functions
humberger.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);

links.forEach((link) => link.addEventListener('click', selectCurrentActiveItem));

generateProgramCards();
generateSpeakersData();
addHeaderBackground();
