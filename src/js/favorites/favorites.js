const filters = document.querySelector('.favorites-filters-list');
const hat = document.querySelector('.hat-wrapper');
const sevedRecipes = JSON.parse(localStorage.getItem('favorite-recipes'));

console.log(filters.children);
if (sevedRecipes) {
  filters.classList.remove('js-hidden');
  hat.classList.add('js-hidden');
}
const categorys = [
  {
    tags: 'Beef',
    id: 1,
  },
  {
    tags: 'Desert',
    id: 2,
  },
];

filters.addEventListener('click', handlerFilter);

function handlerFilter(evt) {
  const categoryName = evt.target.textContent;
  console.log(categoryName);
  categorys.filter(category => category.tags === categoryName).map(({ id }) => console.log(id));
}

function renderingBtn(arr) {
  const render = arr
    .map(
      ({ tags }) =>
        `<li>
              <button type="button" class="favorites-filters-btn ">${tags}</button>
            </li>`
    )
    .join('');

  filters.insertAdjacentHTML('beforeend', render);
}
renderingBtn(categorys);
