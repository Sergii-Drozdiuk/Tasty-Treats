import axios from 'axios';
import { setPerPageValue } from '../pagination.js';
const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';

async function getFetchRecipes(page = 1) {
  let limit = setPerPageValue();
  const response = await axios(`${BASE_URL}/recipes?limit=${limit}&page=${page}`);
  return response.data;
}

async function getRecipeById(recipeId) {
  const r = await axios(`${BASE_URL}/recipes/${recipeId}`);
  return r.data;
}

async function addRecipeRating(recipeId, data) {
  const r = await axios({
    method: 'PATCH',
    url: `${BASE_URL}/recipes/${recipeId}/rating`,
    data,
  });
  return r;
}

async function getRecipesByCategory(category) {
  const r = await axios(`${BASE_URL}/recipes?category=${category}&page=1`);
  return r.data.results;
}

export { getFetchRecipes, getRecipeById, addRecipeRating, getRecipesByCategory };
