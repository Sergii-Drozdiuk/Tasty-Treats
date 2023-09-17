const switchDark = document.querySelector('.switch');
const logo = document.querySelector('.header-tastytreats');
const header = document.querySelector('.header-ref');

switchDark.addEventListener('change', onDarkMode);
const body = document.body;

function onDarkMode() {
  body.classList.toggle('body-dark');
  logo.classList.toggle('header-tastytreats-dark');
  header.classList.toggle('header-ref-dark');
}
