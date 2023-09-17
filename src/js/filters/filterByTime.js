import { selectTime } from './vars';
import time from '/json/time.json';

export async function renderFilterByTime() {
  const res = await time.map(elm => `<option value="${elm}">${elm} min</option>`).join('');
  selectTime.insertAdjacentHTML('beforeend', res);

  return res;
}
