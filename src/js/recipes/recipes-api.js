import axios from 'axios';
import { setPerPageValue } from '../pagination.js';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';

async function getFetchRecipes(page) {
  if (!page) {
    page = 1;
  }
  let limit = setPerPageValue();
  try {
    const response = await axios.get(`${BASE_URL}/recipes?limit=${limit}&page=${page}`);
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
