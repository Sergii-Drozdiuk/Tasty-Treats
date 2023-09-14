import JustValidate from 'just-validate';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { uploadUser } from './hero-api';

const form = document.querySelector('#order-form');
const { name, phone, email, comment } = form.elements;

const validator = new JustValidate(form);

validator.addField(name, [
  { rule: 'required' },
  { rule: 'minLength', value: 3 },
  { rule: 'maxLength', value: 15 },
]);

validator.addField(phone, [{ rule: 'required' }, { rule: 'customRegexp', value: '[789][0-9]{9}' }]);

validator.addField(email, [{ rule: 'required' }, { rule: 'email' }]);

const modalWindow = document.querySelector('#ordernow');

document.querySelector('.hero-order-btn').addEventListener('click', () => {
  modalWindow.showModal();
  validator.refresh();
});

document.querySelector('.btn-close').addEventListener('click', () => {
  modalWindow.close();
  form.reset();
  validator.destroy();
});

document.querySelector('.modal-order-send').addEventListener('click', () => {
  validator.revalidate().then(isFormValid);
});

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
  form.reset();
  validator.destroy();
  return Notify.success('Order added successfully!');
}

const onOrderFailure = () => Notify.failure('Oops! Something went wrong, please try again.');
