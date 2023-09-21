export function afterCardLoaded(r) {
  const favoritesBtn = document.querySelector('.favorites-btn');
  const removeBtn = document.querySelector('.remove-btn');

  const i ={ id: r._id, tags: r.tags };
 
  favoritesBtn.addEventListener('click', () => {


    for (const obj of arr) {
        if (r._id === obj.id) {

            return;
          }
    }
    arr.push(i);

    
    localStorage.setItem('favorite-recipes', JSON.stringify(arr));
    favoritesBtn.style.display = 'none';
    removeBtn.style.display = 'inline-block';

    if (window.innerWidth < 768) {
      removeBtn.textContent = 'Remove';
      removeBtn.style.display = 'inline-block';
    }

    removeBtn.addEventListener('click', (evt) => {
        arr.map(obj => {
            console.log(evt.target.id);
            console.log(obj.id);
            if (r._id === obj.id) {
              arr.splice(arr.indexOf(obj), 1);
             
            }
          });

          localStorage.setItem('favorite-recipes', JSON.stringify(arr));
      
      removeBtn.style.display = 'none';
      favoritesBtn.style.display = 'inline-block';
    });

  });
}

const list = document.querySelector('.js-list');

list.addEventListener('click', hadlerClick);

const arr = JSON.parse(localStorage.getItem('favorite-recipes')) ?? [];

function hadlerClick(evt) {
  const i = {
    id: evt.target.id,
    tags: Object.values(evt.target.dataset).join(',').split(','),
  };

  if ( evt.target.classList.contains('path') &&  evt.target.farthestViewportElement.classList.contains('heart-active')) {
    evt.target.farthestViewportElement.classList.remove('heart-active');
    arr.map(obj => {
      console.log(evt.target.id);
      console.log(obj.id);
      if (evt.target.farthestViewportElement.id === obj.id) {
        arr.splice(arr.indexOf(obj), 1);
      }
    });

    localStorage.setItem('favorite-recipes', JSON.stringify(arr));
    return;
  }

  if (evt.target.classList.contains('recipes-icon-heart') && !evt.target.classList.contains('heart-active')) {
      evt.target.classList.add('heart-active');
      
      for (const obj of arr) {
          console.log(evt.target.id === obj.id);
          if (evt.target.id === obj.id) {
              return;
            }
      }
      arr.push(i);
  }
  localStorage.setItem('favorite-recipes', JSON.stringify(arr));

  console.log(i);
}
