import time from '/json/time.json';

export function renderFilterByTime() {
  return time.map(elm => `<option value="${elm}">${elm} min</option>`).join('');
}
