import axios from 'axios';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';

async function getFetchRecipes() {
  const response = await axios.get(`${BASE_URL}/recipes?limit=5`);
  return response.data.results;
}

async function getRecipeById(recipeId) {
  const r = await axios.get(`${BASE_URL}/recipes/${recipeId}`);
  return r.data;
}

export { getFetchRecipes, getRecipeById };
