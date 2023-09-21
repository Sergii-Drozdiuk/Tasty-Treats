import { getAllCategories } from './categories-api';
import { getRecipesByCategory } from '../recipes/recipes-api';
import { createMarcup } from '../recipes/markups/recipes-main-markup';

const list = document.querySelector('.categories-list');
const container = document.querySelector('.js-recipes-container');

getAllCategories().then(resp => {
  resp.forEach(element => {
    list.insertAdjacentHTML(
      'beforeend',
      `<li><button type="submit" class="item-btn">${element.name}</button></li>`
    );
  });
});

list.addEventListener('click', onCategoryClick);

function onCategoryClick(e) {
  if (e.target.classList.contains('item-btn')) {
    getRecipesByCategory(e.target.textContent).then(r => {
      container.innerHTML = createMarcup(r);
    });
  }
}
