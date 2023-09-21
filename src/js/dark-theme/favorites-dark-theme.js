const body = document.body;
const switchDark = document.querySelector('.switch');
const logo = document.querySelector('.header-tastytreats');
const svgHeader = document.querySelector('.svg-shopping-cart');
const burgerSvg = document.querySelector('.svg-burger-menu');
const switchCheckbox = document.querySelector('input[name="switch"]');
const switchDarkMob = document.querySelector('input[name="checkbox"]');

switchCheckbox.addEventListener('change', function () {});
switchCheck();
function switchCheck() {
  if (localStorage.getItem('theme') === 'dark') {
    switchCheckbox.checked = true;
    switchDarkMob.checked = true;
    onDarkModeFav();
  }
}

switchDark.addEventListener('change', onDarkModeFav);
switchDarkMob.addEventListener('change', onDarkModeFav);

function onDarkModeFav() {
  switchCheckbox.addEventListener('change', function () {
    switchDarkMob.checked = switchCheckbox.checked;
  });

  switchDarkMob.addEventListener('change', function () {
    switchCheckbox.checked = switchDarkMob.checked;
  });

  if (switchCheckbox.checked || switchDarkMob.checked) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.removeItem('theme');
  }

  body.classList.toggle('body-dark');
  logo.classList.toggle('header-tastytreats-dark');
  svgHeader.classList.toggle('svg-shopping-cart-dark');

  const heroBtnShadow = document.querySelectorAll('.slider');
  heroBtnShadow.forEach(function (element) {
    element.classList.toggle('slider-dark');
  });

  const headerLink = document.querySelectorAll('.header-ref');
  headerLink.forEach(function (element) {
    element.classList.toggle('header-ref-dark');
  });

  const favoritesBtn = document.querySelectorAll('.favorites-filters-btn');
  favoritesBtn.forEach(function (element) {
    element.classList.toggle('categories-btn-dark');
  });

  burgerSvg.classList.toggle('svg-shopping-cart-dark');
}
