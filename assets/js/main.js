import programs from './data/programs.js';
import speakers from './data/speakers.js';

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

generateProgramCards();
