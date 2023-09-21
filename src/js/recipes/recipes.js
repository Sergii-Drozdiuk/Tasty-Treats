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



function saveCurrentPageToLocalStorage(currentPage) {
  localStorage.setItem('currentPage', currentPage);
}

function getCurrentPageFromLocalStorage() {
  const currentPage = localStorage.getItem('currentPage');
  if (currentPage !== null) {
    return parseInt(currentPage, 10);
  }
  return 1;
}

document.addEventListener('DOMContentLoaded', () => {
  const currentPage = Number(getCurrentPageFromLocalStorage());
  options.currentPage = currentPage;
  pagination.movePageTo(options.currentPage);
  getFetchRecipes(currentPage).then(data => {
    container.innerHTML = createMarcup(data.results);
  });
});

pagination.on('afterMove', async event => {
  const currentPage = event.page;
  options.currentPage = currentPage;
  saveCurrentPageToLocalStorage(currentPage);
  const data = await getFetchRecipes(currentPage);
  container.innerHTML = createMarcup(data.results);
});

export { data };