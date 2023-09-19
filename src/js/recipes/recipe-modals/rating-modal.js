import JustValidate from 'just-validate';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { addRecipeRating } from '../recipes-api';

const ratingModal = document.querySelector('#rating-modal');
const ratingForm = document.querySelector('.rating-form');
const ratingFormInput = ratingForm.elements.ratingemail;
// const ratingNumber = document.querySelector('.rating-number');
const ratingBtnSend = document.querySelector('.rating-modal-send');
// const starContainer = document.querySelector('.rating-modal-container');
const validator = new JustValidate(ratingForm);
validator.addField(ratingFormInput, [{ rule: 'required' }, { rule: 'email' }]);
ratingBtnSend.addEventListener('click', onRatingBtnSendClick);

function onRatingBtnSendClick(id) {
  console.log(id);
  validator.revalidate().then(isValid => isFormValid(isValid, id));
}

function isFormValid(isValid, id) {
  console.log(id);
  if (isValid) {
    const data = { email: ratingFormInput.value };
    addRecipeRating(id, data).then(onRatingSuccess);
  }
}

function onRatingSuccess() {
  ratingModal.close();
  enablePageScroll();
  ratingForm.reset();
  validator.destroy();
  // return Report.success('Your rating has been added successfully!');
}

// function onOrderFailure() {
//   return swal('Good job!', 'You clicked the button!', 'success');
// }

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

export { onRatingBtnClick, onRatingBtnCloseClick, onRatingModalBackdropClick, onRatingBtnSendClick };
