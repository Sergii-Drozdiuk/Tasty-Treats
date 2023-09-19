import axios from 'axios';

export async function fetchData() {
  const r = await axios('https://tasty-treats-backend.p.goit.global/api/recipes/popular');
  return r.data;
}
