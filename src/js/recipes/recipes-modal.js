// import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { getRecipeById } from './recipes-api';

const recipeModal = document.querySelector('#recipes-modal');

window.onload = function () {
  const recipeBtns = document.querySelectorAll('.button-recipes');
  recipeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      recipeModal.showModal();
      getRecipeById(btn.dataset.id).then(r => (recipeModal.innerHTML = renderModalById(r)));
    });
  });
};

function renderModalById(r) {
  const { description, time, title, ingredients, tags } = r;
  return `<div class="modal-container"></div>
           <button class="recipes-btn-close">
          <svg width="20" height="20" class="recipes-btn-close-icon">
            <use href="./img/icons.svg#icon-btn-close"></use>
          </svg>
        </button>
        <h3 class="recipes-title">${title}</h3>
        <div class="rating-container">
          <svg class="recipes-icon-start" width="18" height="18">
            <use href="./img/icons.svg#icon-star"></use>
          </svg>
          <svg class="recipes-icon-start" width="18" height="18">
            <use href="./img/icons.svg#icon-star"></use>
          </svg>
          <svg class="recipes-icon-start" width="18" height="18">
            <use href="./img/icons.svg#icon-star"></use>
          </svg>
          <svg class="recipes-icon-start" width="18" height="18">
            <use href="./img/icons.svg#icon-star"></use>
          </svg>
          <svg class="recipes-icon-start" width="18" height="18">
            <use href="./img/icons.svg#icon-star"></use>
          </svg>
          <p class="recipes-time">${time}</p>
        </div>
        <ul class="recipes-ingridients">${ingredients
          .map(
            ingredient =>
              `<li class="ingridient">
            <p class="ingridient-title">${ingredient.name}</p>
            <p class="ingridient-number">${ingredient.measure}</p>
          </li>`
          )
          .join('')}</ul>
        <ul class="recipes-tags">${tags.map(tag => `<li class="recipe-tag">${tag}</li>`).join('')}</ul>
        <p class="recipe-desc">${description}</p>
         <button type="button" class="favorites-btn">Add to favorite</button>
        <button type="button" class="rating-btn">Give a rating</button>`;
}
