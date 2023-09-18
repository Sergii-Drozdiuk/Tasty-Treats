import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getFetchRecipes } from './recipes-api';
import { pagination, options } from '../pagination.js';

const container = document.querySelector('.js-recipes-container');
let data = { results: [] };

getFetchRecipes()
  .then(responseData => {
    data.results = responseData.results;
    options.totalItems = responseData.totalItems;
    container.innerHTML = createMarcup(data.results);
  })
  .catch(error => Notify.failure(error.message));

function createMarcup(arr) {
  return arr
    .map(({ title, description, preview, _id }) => {
      return `<ul class="js-recipes-container wrapper-card">
  <li class ="recipes-card" style="background-image:linear-gradient(to top, var(--main-text-dark-color),var( --filters-main-color),transparent 100%), url(${preview});" >
  <svg class="recipes-icon-heart" width="22" height="22">
      <use href="./img/icons.svg#icon-heart">
      </use>
    </svg>
<h3 class="recipes-title">${title.slice(0, 22)}</h3>
<p class="recipes-text">${description.slice(0, 50)}...</p>
<div class="rating">
  <p class="recipes-text-rating">4.5</p>
  <svg class="recipes-icon-svg" width="18" height="18">
      <use href="../img/icons.svg#icon-star">
      </use>
    </svg>
    <svg class="recipes-icon-svg" width="18" height="18">
      <use href="../img/icons.svg#icon-star">
      </use>
    </svg>
    <svg class="recipes-icon-svg" width="18" height="18">
      <use href="../img/icons.svg#icon-star">
      </use>
    </svg>
    <svg class="recipes-icon-svg" width="18" height="18">
      <use href="../img/icons.svg#icon-star">
      </use>
    </svg>
    <svg class="recipes-icon-svg" width="18" height="18">
      <use href="../img/icons.svg#icon-star">
      </use>
    </svg>
    </div>
    <button class="button-recipes" type="button" data-id="${_id}">See recipe</button>
  </div>
</li>
</ul>
`;
    })
    .join('');
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