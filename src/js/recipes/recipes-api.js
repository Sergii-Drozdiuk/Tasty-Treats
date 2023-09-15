import axios from 'axios';
console.log(axios);




const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';

async function getFetchRecipes(){
  try{
    const response = await axios.get(`${BASE_URL}/recipes?limit=5`);
    console.log(response);
    return response.data;
  }catch(error){
    
   
    throw new Error(error.message);
  }
}




  export { getFetchRecipes };