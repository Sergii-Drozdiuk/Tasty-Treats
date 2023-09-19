const filters = document.querySelector('.favorites-filters-list');
let categorys = [];
let allTags = [];

const favoritLength = localStorage.length;

for (let index = 0; index < favoritLength; index++) {
  const favorit = localStorage.key(index);
  const favoritObj = localStorage.getItem(favorit);
  const parseObj = JSON.parse(favoritObj);
  categorys.push(parseObj);
  const { tags } = parseObj;
  if (tags[0] !== '') {
    allTags = allTags.concat(tags);
  }
}

filters.addEventListener('click', handlerFilter);
function handlerFilter(evt) {
  const categoryName = evt.target.textContent;
  console.log(categoryName);
  categorys.filter(category => category.tags.includes(categoryName)).map(({ id }) => console.log(id));
}
function renderingBtn(arr) {
  const render = arr
    .map(
      el =>
        `<li>
              <button type="button" class="favorites-filters-btn ">${el}</button>
            </li>`
    )
    .join('');

  filters.insertAdjacentHTML('beforeend', render);
}
renderingBtn(allTags);
