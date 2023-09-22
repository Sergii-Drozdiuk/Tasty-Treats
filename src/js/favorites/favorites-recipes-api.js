import axios from 'axios';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';

export async function getResById(id) {
  const r = await axios(`${BASE_URL}/recipes/${id}`);
  return r.data;
}
