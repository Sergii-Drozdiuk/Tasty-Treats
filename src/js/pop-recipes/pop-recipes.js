import { fetchData } from './pop-recipes-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dataList = document.querySelector('.pop-list');

fetchData()
  .then(displayData)
  .catch(() => Notify.failure('Oops! Something went wrong, please try again.'));

function displayData(dataArray) {
  dataArray.map(item => {
    const { _id, preview, title, description } = item;
    const markup = `
      <li class="pop-card" id="${_id}">
        <a class="pop-item">
          <img class="pop-img" src="${preview}" alt="${title}">
          <div class="pop-description">
          <h3 class="pop-description-title">${title}</h3>
          <p class="pop-description-text">${description}</p>
          </div>
        </a>
      </li>
    `;
    dataList.insertAdjacentHTML('beforeend', markup);
  });
}
