import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import {
  onRatingBtnClick,
  onRatingBtnCloseClick,
  onRatingModalBackdropClick,
  onRatingBtnSendClick,
} from './rating-modal.js';
import { getRecipeById } from '../recipes-api.js';
import { renderModalById } from '../markups/render-modal-markup.js';

const recipeModal = document.querySelector('#recipes-modal');
const ratingModal = document.querySelector('#rating-modal');

export async function renderModal() {
  const recipeCards = document.querySelector('.js-recipes-container');
  const popRecipeCards = document.querySelector('.js-pop-container');
  recipeCards.addEventListener('click', onRecipeCardClick);
  popRecipeCards.addEventListener('click', onPopRecipeCardClick);
}

function onRecipeCardClick(e) {
  if (e.target.classList.contains('button-recipes')) {
    recipeModal.showModal();
    disablePageScroll(recipeModal);
    onRatingBtnSendClick(e.target.parentElement.id);
    getRecipeById(e.target.parentElement.id).then(onRecipeCardBtnClick).then(afterCardLoaded);
  }
}

function onPopRecipeCardClick(e) {
  if (e.target.closest('.pop-item')) {
    recipeModal.showModal();
    disablePageScroll(recipeModal);
    onRatingBtnSendClick(e.target.closest('.pop-item').id);
    getRecipeById(e.target.closest('.pop-item').id).then(onRecipeCardBtnClick).then(afterCardLoaded);
  }
}

function onRecipeCardBtnClick(r) {
  recipeModal.innerHTML = renderModalById(r);
  const recipeModalBtnClose = document.querySelector('.recipes-btn-close');
  const ratingBtn = document.querySelector('.rating-btn');
  const ratingBtnClose = document.querySelector('.rating-btn-close');

  recipeModal.addEventListener('click', onBackdropClick);
  recipeModalBtnClose.addEventListener('click', onRecipeModalBtnCloseClick);
  ratingBtn.addEventListener('click', onRatingBtnClick);
  ratingBtnClose.addEventListener('click', onRatingBtnCloseClick);
  ratingModal.addEventListener('click', onRatingModalBackdropClick);

  return r;
}

function afterCardLoaded(r) {
  const favoritesBtn = document.querySelector('.favorites-btn');
  const removeBtn = document.querySelector('.remove-btn');
  favoritesBtn.addEventListener('click', () => {
    localStorage.setItem(r.title, JSON.stringify({ id: r._id, tags: r.tags }));
    favoritesBtn.style.display = 'none';
    removeBtn.style.display = 'inline-block';
    if (window.innerWidth < 768) {
      removeBtn.textContent = 'Remove';
      removeBtn.style.display = 'inline-block';
    }
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
}

function onRecipeModalBtnCloseClick() {
  recipeModal.close();
  enablePageScroll();
}

function onBackdropClick(e) {
  if (e.target === recipeModal) {
    recipeModal.close();
    enablePageScroll();
  }
}
