import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const modalWindow = document.querySelector('#ordernow');

document.querySelector('.hero-order-btn').addEventListener('click', () => {
  modalWindow.showModal();
  disablePageScroll();
});

document.querySelector('.btn-close').addEventListener('click', () => {
  modalWindow.close();
  enablePageScroll();
});

document.querySelector('.modal-order-send').addEventListener('click', e => {
  e.preventDefault();
  modalWindow.close();
  enablePageScroll();
});
