import axios from 'axios';

export async function getAllCategories() {
  const r = await axios.get('https://tasty-treats-backend.p.goit.global/api/categories');
  return r.data;
}
