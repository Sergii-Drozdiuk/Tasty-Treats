import axios from 'axios';
import { setPerPageValue } from '../pagination.js';
const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';

async function getFetchRecipes(page) {
  if (!page) {
    page = 1;
  }
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

export { getFetchRecipes, getRecipeById, addRecipeRating };
