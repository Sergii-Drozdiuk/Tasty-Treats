import { getAllCategories } from './categories-api';

const list = document.querySelector('.categories-list');

getAllCategories().then(resp => {
  resp.forEach(element => {
    list.insertAdjacentHTML(
      'beforeend',
      `<li><button type="submit" class="item-btn">${element.name}</button></li>`
    );
  });
});
