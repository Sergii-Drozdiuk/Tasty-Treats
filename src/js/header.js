const refs = {
  btnCart: document.querySelector('.js-shopping-cart'),
  btnBurger: document.querySelector('.js-burger-menu'),
  switch: document.querySelector('.switch'),
  btnCloseModal: document.querySelector('.js-btn-close'),
  modal: document.querySelector('.header-modal'),
};

refs.btnBurger.addEventListener('click', handlerClicker);
refs.btnCloseModal.addEventListener('click', handlerClicker);

function handlerClicker() {
  refs.modal.classList.toggle('display-none');
  refs.switch.classList.toggle('switch-modal');
}
