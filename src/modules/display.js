import { getShows } from './api.js';
import handleLikeButtonClick from './likes.js';
import displayLikes from './getLikes.js';
import modalPopUp from './modalPopUp.js';
import countLikes from './countLikes.js';

const movieContainer = document.querySelector('.movie-list');

// displayshows function
const displayShows = () => {
  getShows().then((data) => {
    data.splice(50);
    countLikes(data);
    const shows = data.map((show, index) => `
      <div class="movie-card" data-id="${data[index].externals.thetvdb}">
        <img src="${show.image.medium}" alt="${show.name}">
        <h3 class="movie-title">${show.name}</h3>
        <div class="interactions">
          <button class="comments-dem">comment</button>
          <div>
            <i class="like fa-regular fa-heart" data-show-id="${show.name}"></i>
            <span class="likes" data-shows-id="${show.name}"></span>
          </div>
        </div>
        <div class="modal-overlay">
          <div class="modal-container">

          </div>
        </div>
      </div>
    `).join('');

    movieContainer.innerHTML = shows;
    movieContainer.addEventListener('click', (e) => modalPopUp(e));

    const likeBtns = document.querySelectorAll('.like');
    const likes = document.querySelectorAll('.likes');

    likeBtns.forEach((btn, index) => {
      handleLikeButtonClick(btn, index, likes);
    });

    setInterval(() => {
      displayLikes('.likes');
    }, 500);
  }).catch((err) => {
    movieContainer.innerHTML = `<h3 class="error">An error occurred: ${err}</h3>`;
  });
};

export default displayShows;