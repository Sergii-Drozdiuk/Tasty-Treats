const body = document.body;
const switchDark = document.querySelector('.switch');
const logo = document.querySelector('.header-tastytreats');

const herOrderBtn = document.querySelector('.hero-order-btn');

const filters = document.querySelector('.filters-list');
const children = filters.querySelectorAll('.label');

const filterSel1 = document.querySelector('.select-time');
const filterSel2 = document.querySelector('.select-area');
const filterSel3 = document.querySelector('.select-ingredients');
const filterSel4 = document.querySelector('.input-filters');
// pop-list
const categoryBtn = document.querySelector('.categories-btn');

// modal
const modalHero = document.querySelector('.modal-container');
const resipesModal = document.querySelector('.recipes-modal-container');

switchDark.addEventListener('change', onDarkMode);

function onDarkMode() {
  body.classList.toggle('body-dark');
  logo.classList.toggle('header-tastytreats-dark');
  herOrderBtn.classList.toggle('hero-order-btn-dark');

  children.forEach(function (child) {
    child.classList.toggle('filters-list-dark');
  });
  filterSel1.classList.toggle('input-filters-dark');
  filterSel2.classList.toggle('input-filters-dark');
  filterSel3.classList.toggle('input-filters-dark');
  filterSel4.classList.toggle('input-filters-dark');

  const popTxt = document.querySelectorAll('.pop-description-text');
  popTxt.forEach(function (element) {
    element.classList.toggle('pop-list-dark');
  });

  const pagBtn = document.querySelectorAll('.pag-btn');
  pagBtn.forEach(function (element) {
    element.classList.toggle('pag-btn-dark');
  });

  const categoryItem = document.querySelectorAll('.item-btn');
  categoryItem.forEach(function (element) {
    element.classList.toggle('item-btn-dark');
  });

  categoryBtn.classList.toggle('categories-btn-dark');

  modalHero.classList.toggle('dark-modal');

  const modalLabel = document.querySelectorAll('.modal-label');
  modalLabel.forEach(function (element) {
    element.classList.toggle('modal-label-dark');
  });

  const modalInput = document.querySelectorAll('.modal-input');
  modalInput.forEach(function (element) {
    element.classList.toggle('modal-input-dark');
  });

  const modalTextInput = document.querySelector('.comment-input');
  modalTextInput.classList.toggle('modal-input-dark');

  resipesModal.classList.toggle('dark-modal');
}
