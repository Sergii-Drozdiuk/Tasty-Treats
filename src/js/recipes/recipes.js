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
  const i = {
    id: evt.target.id,
    tags: Object.values(evt.target.dataset),
  };

  if (evt.target.classList.contains('path') && evt.target.farthestViewportElement.classList.contains('heart-active')) {
  evt.target.farthestViewportElement.classList.remove('heart-active');
  arr.map(obj=>{
    console.log(evt.target.id);
    console.log(obj.id);
    if(evt.target.farthestViewportElement.id === obj.id) {
     arr.splice(arr.indexOf(obj),1);
    }
  });

  localStorage.setItem('favorite-recipes', JSON.stringify(arr));
  return;
}

if (evt.target.classList.contains('recipes-icon-heart') && !evt.target.classList.contains('heart-active')) {
  arr.push(i);
  evt.target.classList.add('heart-active');
  localStorage.setItem('favorite-recipes', JSON.stringify(arr));
  return;
}


}

pagination.on('afterMove', async event => {
  const currentPage = event.page;
  options.currentPage = currentPage;
  const data = await getFetchRecipes(currentPage);
  container.innerHTML = createMarcup(data.results);
});

export { data };