import JustValidate from 'just-validate';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { uploadUser } from './hero-api';

const form = document.querySelector('#order-form');
const modalWindow = document.querySelector('#ordernow');
const validator = new JustValidate(form);
const { name, phone, email, comment } = form.elements;

validator.addField(name, [
  { rule: 'required' },
  { rule: 'minLength', value: 3 },
  { rule: 'maxLength', value: 15 },
]);

validator.addField(phone, [{ rule: 'required' }, { rule: 'customRegexp', value: '[0-9]{1}[0-9]{9}' }]);

validator.addField(email, [{ rule: 'required' }, { rule: 'email' }]);

document.querySelector('.hero-order-btn').addEventListener('click', onOrderBtnClick);
document.querySelector('.modal-order-send').addEventListener('click', onOrderSendBtnClick);
document.querySelector('.btn-close').addEventListener('click', onCloseBtnClick);

function onOrderBtnClick() {
  disablePageScroll();
  modalWindow.showModal();
  validator.refresh();
  modalWindow.addEventListener('click', onBackdropClick);
}

function onOrderSendBtnClick() {
  validator.revalidate().then(isFormValid);
}

function onCloseBtnClick() {
  modalWindow.close();
  form.reset();
  validator.destroy();
  enablePageScroll();
}

function onBackdropClick(e) {
  if (e.target === modalWindow) {
    modalWindow.close();
    form.reset();
    validator.destroy();
    enablePageScroll();
  }
}

function isFormValid(isValid) {
  if (isValid) {
    const data = {
      name: name.value,
      phone: '+380000000000',
      email: email.value,
    };

    if (comment.value) {
      data.comment = comment.value;
    }

    uploadUser(data).then(onOrderSuccess).catch(onOrderFailure);
  }
}

function onOrderSuccess() {
  modalWindow.close();
  enablePageScroll();
  form.reset();
  validator.destroy();
  return Notify.success('Order added successfully!');
}

function onOrderFailure() {
  return Notify.failure('Oops! Something went wrong, please try again.');
}
