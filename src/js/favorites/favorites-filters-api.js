import axios from 'axios';
console.log(axios);
const categorys = ['Breakfast', 'Chicken'];
console.log(categorys);
const filters = document.querySelector('.favorites-filters-list');
console.log(filters);
filters.addEventListener('click', handlerFilter);
function handlerFilter(evt) {
  const categoryName = evt.target.textContent;
  console.log(categoryName);
}
const render = categorys
  .map(
    category =>
      `<li>
              <button type="button" class="favorites-filters-btn ">${category}</button>
            </li>`
  )
  .join('');
console.log(render);

filters.insertAdjacentHTML('beforeend', render);
