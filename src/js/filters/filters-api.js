import axios from 'axios';
console.log(axios);

/*фільтр по часу*/
export async function getResByTime(page, limit, time) {
  const response = await axios.get(
    `https://tasty-treats-backend.p.goit.global/api/recipes?page=${page}&limit=${limit}&time=${time}`
  );
  return response;
}

/*фільтр по регіону*/
