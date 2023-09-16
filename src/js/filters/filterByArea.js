import { filterResByArea } from './filters-api';

export function renderFilterByArea() {
  filterResByArea()
    .then(r => {
      r.data.map(elm => `<option value="${elm.name}">${elm.name}</option>`).join('');
    })
    .catch(error => console.log(error));
}
