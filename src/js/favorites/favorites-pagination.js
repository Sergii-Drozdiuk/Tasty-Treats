import Pagination from 'tui-pagination';

const favoriteRecipes = JSON.parse(localStorage.getItem('favorite-recipes'));
let length = 0;
if (favoriteRecipes) {
  length = favoriteRecipes.length;
}

const container = document.getElementById('favorites-pagination');

const options = {
  totalItems: length,
  itemsPerPage: 9,
  visiblePages: window.innerWidth < 768 ? 2 : 3,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<button class="tui-page-btn" type="button">{{page}}</button>',
    currentPage: '<button class="tui-page-btn tui-is-selected">{{page}}</button>',
    moveButton:
      '<button class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</button>',
    moreButton:
      '<button class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</button',
  },
};

const pagination = new Pagination(container, options);

export { pagination, options };
