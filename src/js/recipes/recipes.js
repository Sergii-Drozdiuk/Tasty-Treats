import { getFetchRecipes } from './recipes-api.js';
import { createMarcup } from './markups/recipes-main-markup.js';
import { renderModal } from './recipe-modal.js';
import { fetchData } from '../pop-recipes/pop-recipes-api.js';
import { displayData } from '../pop-recipes/pop-recipes.js';
import { pagination, options, setPerPageValue, show, hide } from '../pagination.js';

const container = document.querySelector('.js-recipes-container');
let data = {};
let currentPage = options.currentPage;
currentPage = getCurrentPageFromLocalStorage();

fetchData()
  .then(displayData)
  .then(() => {
    getFetchRecipes(currentPage)
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
        options.totalItems = responseData.totalPages * responseData.perPage;
        container.innerHTML = createMarcup(data.results);
        pagination.reset(responseData.totalPages * responseData.perPage);
        pagination.movePageTo(currentPage);
      })
      .then(() => renderModal());
  });



function saveCurrentPageToLocalStorage(currentPage) {
  localStorage.setItem('currentPage', currentPage);
}

function getCurrentPageFromLocalStorage() {
  currentPage = localStorage.getItem('currentPage');
  if (currentPage !== null) {
    return parseInt(currentPage, 10);
  }else{return 1;}
}

pagination.on('afterMove', async event => {
  currentPage = event.page;
  saveCurrentPageToLocalStorage(currentPage);
  const data = await getFetchRecipes(currentPage);
  container.innerHTML = createMarcup(data.results);
  });

export { data };