import { getAllCategories } from './categories-api';

const mainBtn = document.querySelector('.categories-btn');
const list = document.querySelector('.categories-list');

mainBtn.addEventListener('click', onShowCategories, { once: true });

function onShowCategories() {
  getAllCategories().then(resp => {
    const arr = resp.data;
    arr.forEach(element => {
      list.insertAdjacentHTML(
        'beforeend',
        `<li><button type="submit" class="item-btn">${element.name}</button></li>`
      );
    });
  });
}
