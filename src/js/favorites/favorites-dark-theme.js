const body = document.body;
const switchDark = document.querySelector('.switch');
const logo = document.querySelector('.header-tastytreats');

switchDark.addEventListener('change', onDarkModeFav);

function onDarkModeFav() {
  body.classList.toggle('body-dark');
  logo.classList.toggle('header-tastytreats-dark');

  const headerLink = document.querySelectorAll('.header-ref');
  headerLink.forEach(function (element) {
    element.classList.toggle('header-ref-dark');
  });

  const favoritesBtn = document.querySelectorAll('.favorites-filters-btn');
  favoritesBtn.forEach(function (element) {
    element.classList.toggle('categories-btn-dark');
  });
}
