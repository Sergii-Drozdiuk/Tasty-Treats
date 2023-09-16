import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { getRecipeById } from './recipes-api';

const recipeModal = document.querySelector('#recipes-modal');

window.onload = function () {
  const recipeBtns = document.querySelectorAll('.button-recipes');
  recipeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      recipeModal.showModal();
      disablePageScroll();
      getRecipeById(btn.dataset.id).then(r => {
        recipeModal.innerHTML = renderModalById(r);
        const recipeCloseBtn = document.querySelector('.recipes-btn-close');
        recipeCloseBtn.addEventListener('click', () => {
          recipeModal.close();
          enablePageScroll();
        });
      });
    });
  });
};

function renderModalById(r) {
  const { description, time, title, ingredients, tags, youtube, thumb, rating, instructions } = r;
  function generateRatingStars(rating) {
    const maxStars = 5;
    const roundedRating = Math.round(rating);

    const stars = Array(maxStars).fill(
      '<svg class="recipes-icon-start" width="18" height="18"><use href="./img/icons.svg#icon-star"></use></svg>'
    );

    for (let i = 0; i < roundedRating; i += 1) {
      stars[i] = stars[i].replace('recipes-icon-start', 'recipes-icon-start active');
    }
    return stars.join('');
  }
  return `<div class="recipes-modal-container">
           <button class="recipes-btn-close">
          <svg width="20" height="20" class="recipes-btn-close-icon">
            <use href="./img/icons.svg#icon-btn-close"></use>
          </svg>
        </button>
        <a href="${youtube}" target="blank" class="recipe-video">
        <div class="youtube-video" style="background-image: linear-gradient(0deg, rgba(5, 5, 5, 0.40) 0%, rgba(5, 5, 5, 0.40) 100%), url(${thumb});"></div>
         <svg width="32" height="32" class="recipes-btn-youtube">
            <use href="./img/icons.svg#icon-youtube"></use>
          </svg>
        </a>
        <h3 class="recipes-modal-title">${title}</h3>
        <div class="rating-container">
        <p class="rating-modal">${rating}</p>
         ${generateRatingStars(rating)}
          <p class="recipes-time">${time} min</p>
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
        <ul class="recipes-tags">${
          tags.length > 1
            ? tags.map(tag => `<div class="last-child"><li class="recipe-tag">#${tag}</li></div>`).join('')
            : ''
        }</ul>
        <p class="recipe-desc">${description}${instructions}</p>
         <button type="button" class="favorites-btn">Add to favorite</button>
        <button type="button" class="rating-btn">Give a rating</button></div>`;
}
