const dataList = document.querySelector('.pop-list');

export function displayData(dataArray) {
  dataArray.forEach(item => {
    const { _id, preview, title, description } = item;
    const markup = `
      <li>
        <a class="pop-item" id="${_id}">
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
