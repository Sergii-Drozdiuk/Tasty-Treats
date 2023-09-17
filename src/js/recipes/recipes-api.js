import axios from 'axios';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';

async function getFetchRecipes() {
  try {
    const response = await axios.get(`${BASE_URL}/recipes?limit=5`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getRecipeById(recipeId) {
  const r = await axios.get(`${BASE_URL}/recipes/${recipeId}`);
  return r.data;
}

export { getFetchRecipes, getRecipeById };

