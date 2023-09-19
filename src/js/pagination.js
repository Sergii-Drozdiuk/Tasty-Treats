import Pagination from 'tui-pagination';

const containerPagination = document.getElementById('pagination');

window.addEventListener('resize', () => {
  options.itemsPerPage = setPerPageValue();
  pagination.reset(options);
});

function setPerPageValue() {
  let perPage = 9;
  if (window.innerWidth < 768) {
    perPage = 6;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    perPage = 8;
  }
  return perPage;
}

const options = {
  totalItems: 40,
  itemsPerPage: setPerPageValue(),
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

const pagination = new Pagination(containerPagination, options);

export { pagination, options, setPerPageValue };
