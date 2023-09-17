import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import axios from 'axios';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
const container = document.querySelector('.js-recipes-container');
const containerPagination = document.getElementById('pagination');
let data = { results: [] };

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

async function getFetchRecipes(page) {
  let limit = setPerPageValue();
  console.log(limit);
  try {
    const response = await axios.get(`${BASE_URL}/recipes?limit=${limit}&page=${page}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

getFetchRecipes()
  .then(responseData => {
    data.results = responseData.results;
    options.totalItems = responseData.totalItems;
    // pagination.reset(options);
    container.innerHTML = createMarkup(data.results);
  })
  .catch(error => {
    console.log(error);
  });

function createMarkup(arr) {
  const itemsPerPage = setPerPageValue();
  const startIdx = (pagination.getCurrentPage() - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  const recipesSlice = arr.slice(startIdx, endIdx);

  const html = recipesSlice.map(({ title, description, preview, _id }) => {
    return `
      <li class="recipes-card" style="background-image: linear-gradient(to top, var(--main-text-dark-color), var(--filters-main-color), transparent 100%), url(${preview});" data-id="${_id}">
        <svg class="recipes-icon-heart" width="22" height="22">
          <use href="./img/icons.svg#icon-heart"></use>
        </svg>
        <h3 class="recipes-title">${title.slice(0, 22)}</h3>
        <p class="recipes-text">${description.slice(0, 50)}...</p>
        <div class="rating">
          <div class="rating-wraper">
            <p class="recipes-text-rating">4.5</p>
            <svg class="recipes-icon-svg" width="18" height="18">
              <use href="./img/icons.svg#icon-star"></use>
            </svg>
          </div>
          <button class="button-recipes" type="button">See recipe</button>
        </div>
      </li>
    `;
  }).join('');

  container.innerHTML = html;
}

const options = {
  totalItems: 200,
  itemsPerPage: setPerPageValue(),
  visiblePages: window.innerWidth < 768 ? 2 : 3,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
    template: {
    page: '<button class="tui-page-btn" type="button">{{page}}</button></li>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<button class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</button',
    disabledMoveButton:
      '<button class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<button class="tui-ico-{{type}}">{{type}}</button>' +
      '</button',
    moreButton:
      '<button class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
      '</button'
  },
};

const pagination = new Pagination(containerPagination, options);

// pagination.on('afterMove', event => {
//   container.innerHTML = createMarkup(data.results, event.page);
// });

pagination.on('afterMove', async (event) => {
  const currentPage = event.page;
  try {
    const data = await getFetchRecipes(currentPage);
    container.innerHTML = createMarkup(data.results);
  } catch (error) {
    console.log(error);
  }
});


