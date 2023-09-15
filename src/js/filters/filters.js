import axios from 'axios';
import { createFilterByTime } from './filterByTime';
import { getResByTime } from './filters-api';
console.log(axios);

const selectTime = document.querySelector('.select-time');
selectTime.insertAdjacentHTML('beforeend', createFilterByTime());

function renderResExample() {
  let page = 1;
  let limit = 9;
  let time = 15;
  getResByTime(page, limit, time)
    .then(({ data }) => {
      console.log(data);
    })
    .catch(error => console.log(error));
}
renderResExample();
