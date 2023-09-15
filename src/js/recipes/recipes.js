
import { getFetchRecipes } from './recipes-api';
const container = document.querySelector('.js-recipes-container');



getFetchRecipes()
  .then(data => {
    console.log();
  
     container.innerHTML = createMarcup(data.results);
  
  })
  .catch((error) =>{
    console.log(error);
  }) ;


  function createMarcup(arr) {
 return arr.map(({title, description,preview})=>{

  return `
  <div class ="recipes-card" style="background-image:linear-gradient(to top, var(--main-text-dark-color),var( --filters-main-color),transparent 100%), url(${preview});">
<h3 class="recipes-title">${title.slice(0,22)}</h3>
<p class="recipes-text">${description.slice(0,50)}...</p>
<div class="rating">
<div class="rating-wraper">
  <p class="recipes-text-rating">4.5</p>
  <svg class="recipes-icon-svg" width="18" height="18">
      <use href="./img/icons.svg#icon-star">
      </use>
    </svg>
    <svg class="recipes-icon-svg" width="18" height="18">
      <use href="./img/icons.svg#icon-star">
      </use>
    </svg>
    <svg class="recipes-icon-svg" width="18" height="18">
      <use href="./img/icons.svg#icon-star">
      </use>
    </svg>
    <svg class="recipes-icon-svg" width="18" height="18">
      <use href="./img/icons.svg#icon-star">
      </use>
    </svg>
    <svg class="recipes-icon-svg" width="18" height="18">
      <use href="./img/icons.svg#icon-star">
      </use>
    </svg>
    </div>
    <button class="button-recipes" type="button">See recipe</button>
  </div>

</div>
`;
  }).join('');

  
    
}


















