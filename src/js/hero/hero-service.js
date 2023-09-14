import JustValidate from 'just-validate';

const form = document.querySelector('#order-form');
const { name, phone, email } = form.elements;

const validator = new JustValidate(form, { validateBeforeSubmitting: true });

validator.addField(name, [
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

validator.addField(phone, [
  {
    rule: 'required',
  },
  {
    rule: 'customRegexp',
    value: '[789][0-9]{9}',
  },
]);

validator.addField(email, [
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
});

document.querySelector('.btn-close').addEventListener('click', () => {
  modalWindow.close();
  form.reset();
  validator.destroy();
});

document.querySelector('.modal-order-send').addEventListener('click', () => {
  if (!name.value || !phone.value || !email.value) {
    return;
  } else {
    modalWindow.close();
    form.reset();
    validator.destroy();
  }
});
