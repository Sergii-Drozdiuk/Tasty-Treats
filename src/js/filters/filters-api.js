import axios from 'axios';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';

async function getResByIngredient() {
  const r = await axios(`${BASE_URL}/ingredients`);
  return r.data;
}

async function getResByArea() {
  const r = await axios(`${BASE_URL}/areas`);
  return r.data;
}

export { getResByIngredient, getResByArea };
