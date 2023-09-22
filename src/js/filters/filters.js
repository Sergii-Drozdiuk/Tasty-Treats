import { getResByIngredient, getResByArea } from './filters-api.js';
import time from './filters-time.json';
import { onFiltersClick, getFetchRecipes } from '../recipes/recipes-api.js';
import debounce from 'lodash.debounce';
import { createMarcup } from '../recipes/markups/recipes-main-markup.js';

const inputSearch = document.querySelector('.input-filters');
const container = document.querySelector('.js-recipes-container');
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

inputSearch.addEventListener('input', debounce(onInputSearch, 300));

function onInputSearch(e) {
  getFetchRecipes().then(r => {
    console.log(
      r.results
        .map(item => item.title)
        .filter(title => title.toLowerCase().includes(e.target.value.trim().toLowerCase()))
    );
  });
}

areasSelect.addEventListener('change', () => {
  onFiltersClick().then(r => {
    container.innerHTML = createMarcup(r.data.results);
  });
});

ingredientsSelect.addEventListener('change', () => {
  onFiltersClick().then(r => {
    container.innerHTML = createMarcup(r.data.results);
  });
});

timeSelect.addEventListener('change', () => {
  onFiltersClick().then(r => {
    container.innerHTML = createMarcup(r.data.results);
  });
});

document.querySelector('.clear-button').addEventListener('click', () => {
  areasSelect.value = '';
  ingredientsSelect.value = '';
  timeSelect.value = '';
});
