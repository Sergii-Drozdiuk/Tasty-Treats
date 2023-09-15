import axios from 'axios';
console.log(axios);
const filters = document.querySelector('.favorites-filters-list');
console.log(filters);
filters.addEventListener('click', handlerFilter);
function handlerFilter(evt) {
  const categoryName = evt.target.textContent;
  console.log(categoryName);
}
