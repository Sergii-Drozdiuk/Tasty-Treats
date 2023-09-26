export function createMarcupFavorites(arr) {
  return arr
    .map(({ title, description, preview, _id, rating, tags }) => {
      const ratingValue = rating / 0.05;
      return `
  <li class ="recipes-card-favorites" id="${_id}" style="background-image:linear-gradient(to top, var(--main-text-dark-color),var( --filters-main-color),transparent 100%), url(${preview});" >
  <svg class="recipes-icon-heart" id="${_id}" data-tags="${tags}" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
  <path class="path"  opacity="1" stroke="#f8f8f8" style="stroke: var(--color1, #f8f8f8)"
                stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.9091"
                d="M15.991 6.848c-2.666-3.117-7.111-3.955-10.451-1.101s-3.81 7.625-1.187 11c2.181 2.806 8.781 8.725 10.944 10.641 0.242 0.214 0.363 0.321 0.504 0.364 0.123 0.037 0.258 0.037 0.381 0 0.141-0.042 0.262-0.149 0.504-0.364 2.163-1.916 8.763-7.834 10.944-10.641 2.623-3.375 2.21-8.177-1.187-11.001s-7.785-2.015-10.451 1.101z">
            </path></svg>
<h3 class="recipes-title">${title.slice(0, 22)}</h3>
<p class="recipes-text">${description.slice(0, 50)}...</p>
<div class="rating">
<div class="rating-value">${rating.toFixed(1)}</div>
  <div class="rating-body">
    <div class="rating-active" style="width:${ratingValue}%">
      <div class="rating-items">
        <input type="radio" class="rating-item" value="1">
        <input type="radio" class="rating-item" value="2">
        <input type="radio" class="rating-item" value="3">
        <input type="radio" class="rating-item" value="4">
        <input type="radio" class="rating-item" value="5">
      </div>
    </div>
  </div>
</div>
    <button class="button-recipes" type="button">See recipe</button>
</li>

`;
    })
    .join('');
}