import { createMarcupFavorites } from '../recipes/markups/recipes-favorites-markup.js';
import { getResById } from './favorites-recipes-api.js';
import { pagination, options } from './favorites-pagination.js';

const arrOfRecipes = [];
const container = document.querySelector('.favorites-cards');
const filters = document.querySelector('.favorites-filters-list');
const hat = document.querySelector('.hat-wrapper');
const savedRecipes = JSON.parse(localStorage.getItem('favorite-recipes'));
options.itemsPerPage = window.innerWidth < 768 ? 9 : 12;

if (savedRecipes) {
  filters.classList.remove('js-hidden');
  hat.classList.add('js-hidden');
}

const allTags = savedRecipes.flatMap(category => category.tags);
const unicTags = allTags.filter((tag, i, arr) => arr.indexOf(tag) === i).filter(tag => tag !== '');

filters.addEventListener('click', handlerFilter);

function handlerFilter(evt) {
  const categoryName = evt.target.textContent;
  savedRecipes.filter(category => category.tags === categoryName).map(({ id }) => console.log(id));
}

function renderingBtn(arr) {
  const render = arr
    .map(
      tags =>
        `<li>
              <button type="button" class="favorites-filters-btn ">${tags}</button>
            </li>`
    )
    .join('');

  filters.insertAdjacentHTML('beforeend', render);
}

renderingBtn(unicTags);

function renderingRecipe(arr) {
  arr.map(({ id }) =>
    getResById(id).then(r => {
      arrOfRecipes.push(r);
      options.totalItems = arrOfRecipes.length;
      pagination.reset(options.itemsPerPage);
      container.insertAdjacentHTML('beforeend', createMarcupFavorites(arrOfRecipes));
    })
  );
}

renderingRecipe(savedRecipes);

pagination.on('afterMove', () => {
  // const currentPage = event.page;
  // save('page', event.page);
  renderingRecipe(savedRecipes);
});