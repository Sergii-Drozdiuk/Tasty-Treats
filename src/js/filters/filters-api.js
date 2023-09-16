import axios from 'axios';
console.log(axios);
const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';

/*фільтр по часу*/
export async function getResByTime(page, limit, time) {
  try {
    const response = await axios.get(`${BASE_URL}/recipes?page=${page}&limit=${limit}&time=${time}`);

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

/*фільтр по регіону*/
export function filterResByArea() {
  try {
    const response = axios.get(`${BASE_URL}/areas`);
    console.log('filterResByArea', response);
    return response;
  } catch (error) {
    console.error(error);
  }
}
