import time from '/json/time.json';

export function createFilterByTime() {
  return time.map(elm => `<option value="${elm}">${elm === '' ? 'all' : elm + ' min'}</option>`).join('');
}
