import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { getRecipeById } from './recipes-api';

const recipeModal = document.querySelector('#recipes-modal');

window.addEventListener('load', () => {
  const recipeBtns = document.querySelectorAll('.button-recipes');
  recipeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      recipeModal.showModal();
      disablePageScroll();
      getRecipeById(btn.dataset.id).then(r => {
        recipeModal.innerHTML = renderModalById(r);
        recipeModal.addEventListener('click', onBackdropClick);
        const recipeCloseBtn = document.querySelector('.recipes-btn-close');
        recipeCloseBtn.addEventListener('click', () => {
          recipeModal.close();
          enablePageScroll();
        });
      });
    });
  });
});

function onBackdropClick(e) {
  if (e.target === recipeModal) {
    recipeModal.close();
    enablePageScroll();
  }
}

function renderModalById(r) {
  const { description, time, title, ingredients, tags, youtube, thumb, rating, instructions } = r;
  function generateRatingStars(rating) {
    const maxStars = 5;
    const roundedRating = Math.round(rating);
    const stars = Array(maxStars).fill(
      '<svg xmlns="http://www.w3.org/2000/svg" class="recipes-icon-start" width="18" height="18" viewBox="0 0 14 13"><path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z"/></svg>'
    );

    for (let i = 0; i < roundedRating; i += 1) {
      stars[i] = stars[i].replace('recipes-icon-start', 'recipes-icon-start active');
    }

    return stars.join('');
  }
  if (window.innerWidth >= 768) {
    return `<div class="recipes-modal-container">
           <button class="recipes-btn-close">
           <svg class="recipes-btn-close-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
  <path d="M15 5L5 15" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 5L15 15" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </button>
          <h3 class="recipes-modal-title">${title}</h3>
        <a href="${youtube}" target="_blank" class="recipe-video">
        <div class="youtube-video" style="background-image: linear-gradient(0deg, rgba(5, 5, 5, 0.40) 0%, rgba(5, 5, 5, 0.40) 100%), url(${thumb});"></div>
         <svg width="38" height="38" class="recipes-btn-youtube">
            <use href="./img/icons.svg#icon-youtube"></use>
          </svg>
        </a>
       <div class="tags-wrapper">
           <ul class="recipes-tags">${
             tags.length > 1
               ? tags.map(tag => `<div class="last-child"><li class="recipe-tag">#${tag}</li></div>`).join('')
               : ''
           }</ul>
          <div class="rating-container">
          <p class="rating-modal">${rating}</p>
           ${generateRatingStars(rating)}
            <p class="recipes-time">${time} min</p>
          </div>
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
        <p class="recipe-desc">${description}${instructions}</p>
         <button type="button" class="favorites-btn">Add to favorite</button>
        <button type="button" class="rating-btn">Give a rating</button></div>`;
  }
  if (window.innerWidth < 767) {
    return `<div class="recipes-modal-container">
           <button class="recipes-btn-close">
         <svg class="recipes-btn-close-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
  <path d="M15 5L5 15" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 5L15 15" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </button>
        <a href="${youtube}" target="_blank" class="recipe-video">
        <div class="youtube-video" style="background-image: linear-gradient(0deg, rgba(5, 5, 5, 0.40) 0%, rgba(5, 5, 5, 0.40) 100%), url(${thumb});"></div>
         <svg width="38" height="38" class="recipes-btn-youtube">
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
            <p class="ingridient-number">${ingredient.measure.slice(0, 28)}</p>
          </li>`
          )
          .join('')}</ul>
            <ul class="recipes-tags">${
              tags.length > 1
                ? tags
                    .map(tag => `<div class="last-child"><li class="recipe-tag">#${tag}</li></div>`)
                    .join('')
                : ''
            }</ul>
        <p class="recipe-desc">${description}${instructions}</p>
         <button type="button" class="favorites-btn">Add to favorite</button>
        <button type="button" class="rating-btn">Give a rating</button></div>`;
  }
}
