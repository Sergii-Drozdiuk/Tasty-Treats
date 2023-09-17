import axios from 'axios';
console.log(axios);

export async function getAllCategories() {
  try {
    const response = await axios.get('https://tasty-treats-backend.p.goit.global/api/categories');
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}
