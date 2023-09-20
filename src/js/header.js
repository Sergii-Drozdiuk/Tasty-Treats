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

if (page === '/favorites.html') {
  if (page === '/Fancy-team-project/favorites.html') {
    refs.headerFavorites.classList.add('active');
    refs.headerContainer.style.marginBottom = '50px';
  } else {
    console.log(page === document.location.href);
    console.log('href', document.location.pathname);
    console.log('page', page);
    console.log(document.location.pathname);
    refs.headerHome.classList.add('active');
    refs.headerContainer.style.marginBottom = '90px';
  }
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
