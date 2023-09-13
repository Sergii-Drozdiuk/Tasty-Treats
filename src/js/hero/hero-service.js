import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import JustValidate from 'just-validate';

const form = document.querySelector('#order-form');
const { name, phone, email } = form.elements;
const validator = new JustValidate('#order-form', { validateBeforeSubmitting: true });

validator.addField('#name-input', [
  {
    rule: 'required',
  },
  {
    rule: 'minLength',
    value: 3,
  },
  {
    rule: 'maxLength',
    value: 15,
  },
]);

validator.addField('#phone-input', [
  {
    rule: 'required',
  },
  {
    rule: 'customRegexp',
    value: '[789][0-9]{9}',
  },
]);
validator.addField('#email-input', [
  {
    rule: 'required',
  },
  {
    rule: 'email',
  },
]);

const modalWindow = document.querySelector('#ordernow');

document.querySelector('.hero-order-btn').addEventListener('click', () => {
  modalWindow.showModal();
  disablePageScroll();
});

document.querySelector('.btn-close').addEventListener('click', () => {
  modalWindow.close();
  enablePageScroll();
});

document.querySelector('.modal-order-send').addEventListener('click', () => {
  if (!name.value || !phone.value || !email.value) {
    return;
  } else {
    modalWindow.close();
    enablePageScroll();
    form.reset();
    validator.destroy();
  }
});
