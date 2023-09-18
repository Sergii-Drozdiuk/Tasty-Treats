import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { getRecipeById } from './recipes-api.js';
import { renderModalById } from './render-modal-markup.js';
const recipeModal = document.querySelector('#recipes-modal');

export async function renderModal() {
  const recipeCard = document.querySelector('.recipes-card');
  const popRecipe = document.querySelector('.pop-card');
  console.log(recipeCard);
  console.log(popRecipe);
  popRecipe.addEventListener('click', onPopRecipeClick);

  function onPopRecipeClick(e) {
    console.log(e.target);
    if (e.target.classList.contains('pop-card')) {
      recipeModal.showModal();
      disablePageScroll();
      getRecipeById(popRecipe.id).then(onRecipeCardBtnClick);
    }

    recipeCard.addEventListener('click', onRecipeCardClick);

    function onRecipeCardClick(e) {
      console.log(e.target);
      if (e.target.classList.contains('button-recipes')) {
        recipeModal.showModal();
        disablePageScroll();
        getRecipeById(recipeCard.id).then(onRecipeCardBtnClick);
      }
    }
  }

  function onRecipeCardBtnClick(r) {
    recipeModal.innerHTML = renderModalById(r);
    recipeModal.addEventListener('click', onBackdropClick);
    document.querySelector('.favorites-btn').addEventListener('click', () => {
      localStorage.setItem(r.title, JSON.stringify({ id: r._id, tags: r.tags }));
      const data = JSON.parse(localStorage.getItem(r.title));
      if (data._id !== r._id) {
        localStorage.setItem(r.title, JSON.stringify({ id: r._id, tags: r.tags }));
      } else {
        return;
      }
    });
    document.querySelector('.recipes-btn-close').addEventListener('click', () => {
      recipeModal.close();
      enablePageScroll();
    });
  }
}

function onBackdropClick(e) {
  if (e.target === recipeModal) {
    recipeModal.close();
    enablePageScroll();
  }
}
