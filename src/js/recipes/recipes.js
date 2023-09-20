import { getFetchRecipes } from './recipes-api.js';
import { createMarcup } from './markups/recipes-main-markup.js';
import { renderModal } from './recipe-modal.js';
import { fetchData } from '../pop-recipes/pop-recipes-api.js';
import { displayData } from '../pop-recipes/pop-recipes.js';
import { pagination, options, setPerPageValue, show, hide } from '../pagination.js';

const container = document.querySelector('.js-recipes-container');
let data = { results: [] };

fetchData()
  .then(displayData)
  .then(() => {
    getFetchRecipes()
      .then(responseData => {
        let limit = setPerPageValue();
      if (
        !responseData ||
        responseData.results.length < limit ||
        responseData.totalPages < 2 ||
        responseData.totalPages === null
      ) {
        hide();
      } else {
        show();
        pagination.reset(responseData.totalPages * responseData.perPage);
      }
        data.results = responseData.results;
        options.totalItems = responseData.totalPages;
        container.innerHTML = createMarcup(data.results);
        pagination.reset(responseData.totalPages * responseData.perPage);
      })
      .then(() => renderModal());
  });

const list = document.querySelector('.js-list');

list.addEventListener('click', hadlerClick);

const arr = JSON.parse(localStorage.getItem('favorite-recipes')) ?? [];

function hadlerClick(evt) {
  if (evt.target.classList.contains('recipes-icon-heart')) {
    arr.push(evt.target.id);
    evt.target.classList.add('heart-active');
  }
  if (evt.target.classList.contains('path')) {
    evt.target.farthestViewportElement.classList.remove('heart-active');
    arr.splice(arr.indexOf(evt.target.farthestViewportElement.id), 1);
  }
  if (arr.includes(evt.target.id)) {
    evt.target.classList.add('heart-active');
  }

  localStorage.setItem('favorite-recipes', JSON.stringify(arr));
}

pagination.on('afterMove', async event => {
  const currentPage = event.page;
  options.currentPage = currentPage;
  const data = await getFetchRecipes(currentPage);
  container.innerHTML = createMarcup(data.results);
});


export { data };