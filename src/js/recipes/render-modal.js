import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { getRecipeById } from './recipes-api.js';
import { renderModalById } from './render-modal-markup.js';
const recipeModal = document.querySelector('#recipes-modal');

export async function renderModal() {
  const recipeCards = document.querySelector('.js-recipes-container');
  const popRecipeCards = document.querySelector('.js-pop-container');
  recipeCards.addEventListener('click', onRecipeCardClick);
  popRecipeCards.addEventListener('click', onPopRecipeCardClick);
}

function onRecipeCardClick(e) {
  if (e.target.classList.contains('button-recipes')) {
    recipeModal.showModal();
    disablePageScroll();
    getRecipeById(e.target.parentElement.id).then(onRecipeCardBtnClick);
  }
}

function onPopRecipeCardClick(e) {
  if (e.target.closest('.pop-item')) {
    recipeModal.showModal();
    disablePageScroll();
    getRecipeById(e.target.closest('.pop-item').id).then(onRecipeCardBtnClick);
  }
}

function onRecipeCardBtnClick(r) {
  recipeModal.innerHTML = renderModalById(r);
  recipeModal.addEventListener('click', onBackdropClick);
  const favoritesBtn = document.querySelector('.favorites-btn');
  const removeBtn = document.querySelector('.remove-btn');
  favoritesBtn.addEventListener('click', () => {
    localStorage.setItem(r.title, JSON.stringify({ id: r._id, tags: r.tags }));
    favoritesBtn.style.display = 'none';
    removeBtn.style.display = 'inline-block';
    removeBtn.addEventListener('click', () => {
      localStorage.removeItem(r.title);
      removeBtn.style.display = 'none';
      favoritesBtn.style.display = 'inline-block';
    });
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

function onBackdropClick(e) {
  if (e.target === recipeModal) {
    recipeModal.close();
    enablePageScroll();
  }
}
