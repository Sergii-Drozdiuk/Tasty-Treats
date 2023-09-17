const refs = {
  btnCart: document.querySelector('.js-shopping-cart'),
  btnBurger: document.querySelector('.js-burger-menu'),
  switch: document.querySelector('.switch'),
  btnCloseModal: document.querySelector('.js-btn-close'),
  modal: document.querySelector('.header-back'),
  header: document.querySelector('.header-refs'),
};

refs.btnBurger.addEventListener('click', handlerClickerAdd);
refs.btnCloseModal.addEventListener('click', handlerClickerRemove);

function handlerClickerAdd() {
  refs.modal.classList.toggle('display-none');
  refs.switch.classList.toggle('switch-modal');
  removeOwerflowAdd();
}

function handlerClickerRemove() {
  refs.modal.classList.toggle('display-none');
  refs.switch.classList.toggle('switch-modal');
  removeOwerflow();
}

function removeOwerflow() {
  document.body.style.overflow = 'visible';
}

function removeOwerflowAdd() {
  document.body.style.overflow = 'hidden';
}
