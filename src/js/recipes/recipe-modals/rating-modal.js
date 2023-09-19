import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const ratingModal = document.querySelector('#rating-modal');
// const ratingNumber = document.querySelector('.rating-number');
// const ratingBtnSend = document.querySelector('.rating-modal-send');
// const starContainer = document.querySelector('.rating-modal-container');

function onRatingBtnClick() {
  ratingModal.showModal();
  disablePageScroll();
}

function onRatingBtnCloseClick() {
  ratingModal.close();
  enablePageScroll();
}

function onRatingModalBackdropClick(e) {
  if (e.target === ratingModal) {
    ratingModal.close();
    enablePageScroll();
  }
}

export { onRatingBtnClick, onRatingBtnCloseClick, onRatingModalBackdropClick };
