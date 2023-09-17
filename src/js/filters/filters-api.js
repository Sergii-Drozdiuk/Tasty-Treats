import axios from 'axios';
import { BASE_URL } from './vars';
/*фільтр по часу*/

export async function getResByTime(page, limit, time) {
  try {
    const response = await axios.get(`${BASE_URL}/recipes?page=${page}&limit=${limit}&time=${time}`);

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

/*фільтр по інгредієнтах*/

export async function fetchIngredient() {
  try {
    const response = await axios.get(`${BASE_URL}/ingredients`);
    const ingredientName = response.data.map(ingredient => ingredient.name);
    const ingredientId = response.data.map(ingredient => ingredient._id);

    return { ingredientName, ingredientId };
  } catch (error) {
    console.log(error.message);
  }
}
/*фільтр по регіону*/
export async function fetchArea() {
  try {
    const response = await axios.get(`${BASE_URL}/areas`);
    const areas = response.data.map(area => area.name);
    console.log('areas', areas);
    return areas;
  } catch (error) {
    console.log(error.message);
  }
}

// export async function fetchRecipesByFilters(
//   currentPage,
//   categoryName,
//   keyword,
//   ingredientName,
//   areaName,
//   selectedTime
// ) {
//   try {
//     let perPageLocal;

//     if (window.innerWidth >= 1280) {
//       perPageLocal = 9;
//     } else if (window.innerWidth >= 768) {
//       perPageLocal = 8;
//     } else {
//       perPageLocal = 6;
//     }
//     const response = await axios.get(`${BASE_URL}/recipes`, {
//       params: {
//         page: currentPage,
//         limit: perPageLocal,
//         category: categoryName,
//         title: keyword,
//         ingredient: ingredientName,
//         area: areaName,
//         time: selectedTime,
//       },
//     });
//     const { data } = response;
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// }
