import JustValidate from 'just-validate';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { getRecipeById, addRecipeRating } from './recipes-api.js';
import { renderModalById } from './markups/render-modal-markup.js';
import { afterCardLoaded } from './recipe-localstorage.js';

const recipeModal = document.querySelector('#recipes-modal');
const ratingModal = document.querySelector('#rating-modal');
const ratingForm = document.querySelector('.rating-form');
const ratingFormInput = ratingForm.elements.ratingemail;
const validator = new JustValidate(ratingForm);
validator.addField(ratingFormInput, [{ rule: 'required' }, { rule: 'email' }]);

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
    document.querySelector('.rating-modal-send').addEventListener('click', () => {
      validator.revalidate().then(isValid => isFormValid(isValid, e.target.parentElement.id));
    });
    getRecipeById(e.target.parentElement.id).then(onRecipeCardBtnClick).then(afterCardLoaded);
  }
}

function onPopRecipeCardClick(e) {
  if (e.target.closest('.pop-item')) {
    recipeModal.showModal();
    disablePageScroll(recipeModal);
    document.querySelector('.rating-modal-send').addEventListener('click', () => {
      validator.revalidate().then(isValid => isFormValid(isValid, e.target.closest('.pop-item').id));
    });
    getRecipeById(e.target.closest('.pop-item').id).then(onRecipeCardBtnClick).then(afterCardLoaded);
  }
}

function isFormValid(isValid, id) {
  if (isValid) {
    const data = { rate: 5, email: ratingFormInput.value };
    addRecipeRating(id, data).then(onRatingSuccess).catch(onRatingError);
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

function onRatingSuccess() {
  ratingModal.close();
  enablePageScroll();
  ratingForm.reset();
  validator.destroy();
}

function onRatingError(e) {
  console.log(e);
  if (e.response.status === 409) {
    console.log('hello');
  }
}

function onRatingBtnClick() {
  ratingModal.showModal();
  disablePageScroll();
  validator.refresh();
}

function onRatingBtnCloseClick() {
  ratingModal.close();
  enablePageScroll();
  ratingForm.reset();
  validator.destroy();
}

function onRatingModalBackdropClick(e) {
  if (e.target === ratingModal) {
    ratingModal.close();
    ratingForm.reset();
    validator.destroy();
    enablePageScroll();
  }
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
