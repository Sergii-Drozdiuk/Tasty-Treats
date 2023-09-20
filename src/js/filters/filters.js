import { getResByIngredient, getResByArea } from './filters-api.js';
import time from './filters-time.json';

const ingredientsSelect = document.querySelector('.select-ingredients');
const areasSelect = document.querySelector('.select-area');
const timeSelect = document.querySelector('.select-time');

getResByIngredient().then(renderIngredients);
getResByArea().then(renderAreas);

const markup = time.map(time => `<option value="${time}">${time}</option>`).join('');
timeSelect.insertAdjacentHTML('beforeend', markup);

function renderIngredients(r) {
  const markup = r
    .map(ingredient => `<option value="${ingredient.name}">${ingredient.name}</option>`)
    .join('');
  ingredientsSelect.insertAdjacentHTML('beforeend', markup);
}

function renderAreas(r) {
  const markup = r.map(area => `<option value="${area.name}">${area.name}</option>`).join('');
  areasSelect.insertAdjacentHTML('beforeend', markup);
}
