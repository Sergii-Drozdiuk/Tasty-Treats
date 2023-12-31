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

export function renderModalById(r) {
  const { description, time, title, ingredients, tags, youtube, thumb, rating, instructions } = r;
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
          <svg class="recipes-btn-youtube" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
          <path d="M35.6883 10.165C35.5002 9.41361 35.1172 8.72511 34.5778 8.1691C34.0385 7.61309 33.362 7.20925 32.6166 6.99837C29.8933 6.33337 19 6.33337 19 6.33337C19 6.33337 8.10663 6.33337 5.3833 7.06171C4.63794 7.27258 3.96143 7.67642 3.4221 8.23243C2.88277 8.78845 2.49972 9.47694 2.31164 10.2284C1.81323 12.9922 1.56943 15.7959 1.5833 18.6042C1.56554 21.4337 1.80935 24.2588 2.31164 27.0434C2.51899 27.7715 2.91062 28.4338 3.4487 28.9663C3.98677 29.4988 4.6531 29.8836 5.3833 30.0834C8.10663 30.8117 19 30.8117 19 30.8117C19 30.8117 29.8933 30.8117 32.6166 30.0834C33.362 29.8725 34.0385 29.4687 34.5778 28.9127C35.1172 28.3566 35.5002 27.6681 35.6883 26.9167C36.1829 24.1737 36.4266 21.3914 36.4166 18.6042C36.4344 15.7747 36.1906 12.9496 35.6883 10.165Z" stroke="#F8F8F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.4375 23.7816L24.5417 18.6041L15.4375 13.4266V23.7816Z" stroke="#F8F8F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
        <button type="button" class="favorites-btn remove-btn">Remove from favorites</button>
        <button type="button" class="rating-btn">Give a rating</button></div>`;
  }
  if (window.innerWidth < 767) {
    return `<div class="recipes-modal-container">
           <button class="recipes-btn-close">
         <svg class="recipes-btn-close-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
         <path d="M15 5L5 15" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M5 5L15 15" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
        </button>
        <a href="${youtube}" target="_blank" class="recipe-video">
        <div class="youtube-video" style="background-image: linear-gradient(0deg, rgba(5, 5, 5, 0.40) 0%, rgba(5, 5, 5, 0.40) 100%), url(${thumb});"></div>
          <svg class="recipes-btn-youtube" class="recipes-btn-close-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20">
          <path d="M15 5L5 15" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5 5L15 15" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
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
            <p class="ingridient-number">${ingredient.measure.slice(0, 18)}</p>
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
         <button type="button" class="favorites-btn remove-btn">Remove from favorites</button>
        <button type="button" class="rating-btn">Give a rating</button></div>`;
  }
}
