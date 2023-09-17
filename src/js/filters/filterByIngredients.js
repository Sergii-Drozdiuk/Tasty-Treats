import { fetchIngredient } from './filters-api';
import { searchIngredients } from './vars';
export async function renderFilterByIngredients() {
  const ingredients = await fetchIngredient();
  const { ingredientId, ingredientName } = ingredients;
  for (let i = 0; i < ingredientId.length; i++) {
    const optionElement = document.createElement('option');
    optionElement.value = ingredientId[i];
    optionElement.text = ingredientName[i];

    searchIngredients.appendChild(optionElement);
  }
}
