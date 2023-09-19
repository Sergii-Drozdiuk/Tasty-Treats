import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getFetchRecipes } from './recipes-api.js';
import { createMarcup } from './recipes-render-markup.js';
import { renderModal } from './render-modal.js';
import { fetchData } from '../pop-recipes/pop-recipes-api.js';
import { displayData } from '../pop-recipes/pop-recipes.js';
import { pagination, options } from '../pagination.js';

const container = document.querySelector('.js-recipes-container');
let data = { results: [] };

fetchData()
  .then(displayData)
  .then(() => {
    getFetchRecipes()
      .then(responseData => {
        data.results = responseData.results;
        options.totalItems = responseData.totalItems;
        container.innerHTML = createMarcup(data.results);
      })
      .then(() => renderModal());
  })
  .catch(() => Notify.failure('Oops! Something went wrong, please try again.'));


const list = document.querySelector('.js-list');

list.addEventListener('click', hadlerClick);

const arr =JSON.parse(localStorage.getItem('favorite-recipes')) ?? [];

function hadlerClick(evt){
if(evt.target.classList.contains('recipes-icon-heart') ){
  
  arr.push(evt.target.id);
  evt.target.classList.add('heart-active');
}
if(evt.target.classList.contains('path')){
  evt.target.farthestViewportElement.classList.remove('heart-active');
  arr.splice(arr.indexOf(evt.target.farthestViewportElement.id),1);
}
if(arr.includes(evt.target.id)){
  
  evt.target.classList.add('heart-active');
}

localStorage.setItem('favorite-recipes', JSON.stringify(arr));

}

pagination.on('afterMove', async (event) => {
  const currentPage = event.page;
  try {
    const data = await getFetchRecipes(currentPage);
     container.innerHTML = createMarcup(data.results);
  } catch (error) {
    Notify.failure(error.message);
  }
});