import axios from 'axios';

const dataList = document.querySelector('.pop-list');

function displayData(dataArray) {
  let html = '';

  dataArray.forEach(function (item) {
    const itemHTML = `
      <li>
        <a class="pop-item" id="${item._id}">
          <img class="pop-img" src="${item.preview}" alt="${item.title}">
          <div class="pop-description">
          <h3 class="pop-description-title">${item.title}</h3>
          <p class="pop-description-text">${item.description}</p>
          </div>
        </a>
      </li>
    `;
    html += itemHTML;
  });

  dataList.insertAdjacentHTML('beforeend', html);
}

function fetchData() {
  axios.get('https://tasty-treats-backend.p.goit.global/api/recipes/popular')
    .then(function (response) {
      const data = response.data;
      displayData(data); 
    })
    .catch(function (error) {
      console.error(error);
    });
}

fetchData();
