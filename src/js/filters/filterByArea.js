import { fetchArea } from './filters-api';
import { selectArea } from './vars';
export async function renderFilterByArea() {
  const areas = await fetchArea();
  const markup = areas.map(area => `<option>${area}</option>`).join('');
  selectArea.insertAdjacentHTML('beforeend', markup);
}
