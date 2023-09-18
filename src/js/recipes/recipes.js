import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getFetchRecipes } from './recipes-api.js';
import { createMarcup } from './recipes-render-markup.js';
import { renderModal } from './render-modal.js';

const container = document.querySelector('.js-recipes-container');

getFetchRecipes()
  .then(data => (container.innerHTML = createMarcup(data)))
  .then(() => renderModal())
  .catch(e => {
    console.log(e);
    Notify.failure('Oops! Something went wrong, please try again.');
  });

document.querySelector('.js-list').addEventListener('click', hadlerClick);

function hadlerClick(evt) {
  if (evt.target.classList.contains('recipes-icon-heart') || evt.target.classList.contains('path')) {
    document.querySelector('.recipes-icon-heart').classList.toggle('heart-active');
  }
}
