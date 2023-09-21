




const list = document.querySelector('.js-list');

list.addEventListener('click', hadlerClick);

const arr = JSON.parse(localStorage.getItem('favorite-recipes')) ?? [];

function hadlerClick(evt) {
  const i = {
    id: evt.target.id,
    tags: Object.values(evt.target.dataset),
  };

  if (evt.target.classList.contains('path') && evt.target.farthestViewportElement.classList.contains('heart-active')) {
  evt.target.farthestViewportElement.classList.remove('heart-active');
  arr.map(obj=>{
    console.log(evt.target.id);
    console.log(obj.id);
    if(evt.target.farthestViewportElement.id === obj.id) {
     arr.splice(arr.indexOf(obj),1);
    }
  });

  localStorage.setItem('favorite-recipes', JSON.stringify(arr));
  return;
}

if (evt.target.classList.contains('recipes-icon-heart') && !evt.target.classList.contains('heart-active')) {
  arr.push(i);
  evt.target.classList.add('heart-active');
  localStorage.setItem('favorite-recipes', JSON.stringify(arr));
  return;
}
}