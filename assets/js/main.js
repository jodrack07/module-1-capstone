import programs from './data/programs.js';
import speakers from './data/speakers.js';
import addHeaderBackground from './util.js';

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
generateProgramCards();
generateSpeakersData();
addHeaderBackground();
