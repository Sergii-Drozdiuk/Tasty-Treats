const filters = document.querySelector('.favorites-filters-list');
const hat = document.querySelector('.hat-wrapper');
const sevedRecipes = JSON.parse(localStorage.getItem('favorite-recipes'));

if (sevedRecipes) {
  filters.classList.remove('js-hidden');
  hat.classList.add('js-hidden');
}

const allTags = sevedRecipes.flatMap(category => category.tags);
const unicTags = allTags.filter((tag, i, arr) => arr.indexOf(tag) === i);

filters.addEventListener('click', handlerFilter);

function handlerFilter(evt) {
  const categoryName = evt.target.textContent;
  console.log(categoryName);
  sevedRecipes.filter(category => category.tags === categoryName).map(({ id }) => console.log(id));
}

function renderingBtn(arr) {
  const render = arr
    .map(
      tags =>
        `<li>
              <button type="button" class="favorites-filters-btn ">${tags}</button>
            </li>`
    )
    .join('');

  filters.insertAdjacentHTML('beforeend', render);
}
renderingBtn(unicTags);
