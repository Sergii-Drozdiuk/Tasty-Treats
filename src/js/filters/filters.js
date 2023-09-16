import axios from 'axios';
import { renderFilterByTime } from './filterByTime';
import { getResByTime } from './filters-api';
import { renderFilterByArea } from './filterByArea';
console.log(axios);

const selectArea = document.querySelector('.select-area');
const selectTime = document.querySelector('.select-time');

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

selectArea.insertAdjacentHTML('beforeend', renderFilterByArea());

selectTime.insertAdjacentHTML('beforeend', renderFilterByTime());
