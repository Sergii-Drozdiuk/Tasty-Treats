import { disablePageScroll, enablePageScroll } from 'scroll-lock';
const refs = {
  btnBurger: document.querySelector('.js-burger-menu'),
  btnCloseModal: document.querySelector('.js-btn-close'),
  headerContainer: document.querySelector('.header'),
  headerHome: document.querySelector('#header-ref-home'),
  headerFavorites: document.querySelector('#header-ref-favorites'),
  modalWindow: document.querySelector('#header-dialog'),
};

const page = document.location.pathname;
console.log(page);

if (page === '/index.html') {
  refs.headerHome.classList.add('active');
  refs.headerContainer.style.marginBottom = '90px';
  console.log('yes');
} else {
  refs.headerFavorites.classList.add('active');
  refs.headerContainer.style.marginBottom = '50px';

  console.log('no');
}

refs.btnBurger.addEventListener('click', onOrderBtnClick);

function onOrderBtnClick() {
  disablePageScroll();
  refs.modalWindow.showModal();
  refs.modalWindow.addEventListener('click', onBackdropClick);
}

function onBackdropClick(e) {
  if (e.target === refs.modalWindow) {
    refs.modalWindow.close();
    enablePageScroll();
  }
}

refs.btnCloseModal.addEventListener('click', onCloseBtn);

function onCloseBtn() {
  refs.modalWindow.close();
  enablePageScroll();
}
