import { getFetchRecipes } from './recipes-api.js';
import { createMarcup } from './markups/recipes-main-markup.js';
import { renderModal } from './recipe-modal.js';
import { fetchData } from '../pop-recipes/pop-recipes-api.js';
import { displayData } from '../pop-recipes/pop-recipes.js';
import { pagination, options } from '../pagination.js';

const container = document.querySelector('.js-recipes-container');
let data = {};
let currentPage = options.currentPage;
currentPage = getCurrentPageFromLocalStorage();

fetchData()
  .then(displayData)
  .then(() => {
    getFetchRecipes(currentPage)
      .then(responseData => {
        data.results = responseData.results;
        container.innerHTML = createMarcup(responseData.results);
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
  } else {
    return 1;
  }
}

function setPerPageValue() {
  let perPage = 9;
  if (window.innerWidth < 768) {
    perPage = 6;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    perPage = 8;
  }
  return perPage;
}

window.addEventListener('resize', updateItemsPerPage);

function updateItemsPerPage() {
  let items = setPerPageValue();
  if (items !== options.itemsPerPage) {
    options.itemsPerPage = items;
    pagination.setItemsPerPage(items);
  }
}

updateItemsPerPage();

pagination.on('afterMove', async event => {
  currentPage = event.page;
  saveCurrentPageToLocalStorage(currentPage);
  const data = await getFetchRecipes(currentPage);
  options.totalItems = data.totalPages * data.perPage;
  container.innerHTML = createMarcup(data.results);
});

export { setPerPageValue, data };
