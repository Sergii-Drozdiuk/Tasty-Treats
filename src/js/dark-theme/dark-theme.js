const switchDark = document.querySelector('.switch');
const svgHeader = document.querySelector('.svg-shopping-cart');

const herOrderBtn = document.querySelector('.hero-order-btn');

const switchCheckbox = document.querySelector('input[name="switch"]');
const switchDarkMob = document.querySelector('input[name="checkbox"]');

const burgerSvg = document.querySelector('.svg-burger-menu');
switchCheck();
function switchCheck() {
  if (localStorage.getItem('theme') === 'dark') {
    switchCheckbox.checked = true;
    switchDarkMob.checked = true;
    onDarkMode();
  }
}

switchDark.addEventListener('change', onDarkMode);
switchDarkMob.addEventListener('change', onDarkMode);

function onDarkMode() {
  switchCheckbox.addEventListener('change', function () {
    switchDarkMob.checked = switchCheckbox.checked;
  });

  switchDarkMob.addEventListener('change', function () {
    switchCheckbox.checked = switchDarkMob.checked;
  });
  const root = document.documentElement;
  if (switchCheckbox.checked || switchDarkMob.checked) {
    localStorage.setItem('theme', 'dark');

    root.style.setProperty('--main-text-dark-color', 'rgb(248, 248, 248)');
    root.style.setProperty('--main-text-light-color', 'rgb(22, 22, 22)');
    root.style.setProperty('--filters-main-color', 'rgba(255, 255, 255, 50%)');
    root.style.setProperty('--filters-secondary-color', ' rgba(255, 255, 255, 30%)');
    root.style.setProperty('--secondary-pop-recipes-color', ' rgba(255, 255, 255, 80%)');
    root.style.setProperty('--ingridients-main-border-color', ' rgba(255, 255, 255, 20%)');
    root.style.setProperty('--modal-white', ' rgba(5, 5, 5)');
    root.style.setProperty('--main-icon-color', 'rgb(60, 59, 59)');
  } else {
    localStorage.removeItem('theme');

    root.style.setProperty('--main-text-dark-color', 'rgb(5, 5, 5)');
    root.style.setProperty('--main-text-light-color', 'rgb(248, 248, 248)');
    root.style.setProperty('--filters-main-color', 'rgba(5, 5, 5, 50%)');
    root.style.setProperty('--filters-secondary-color', '  rgba(5, 5, 5, 30%)');
    root.style.setProperty('--secondary-pop-recipes-color', ' rgba(5, 5, 5, 80%)');
    root.style.setProperty('--ingridients-main-border-color', ' rgba(5, 5, 5, 20%)');
    root.style.setProperty('--modal-white', 'rgba(255, 255, 255)');
    root.style.setProperty('--main-icon-color', 'rgb(217, 217, 217)');
  }

  const heroBtnShadow = document.querySelectorAll('.slider');
  heroBtnShadow.forEach(function (element) {
    element.classList.toggle('slider-dark');
  });

  herOrderBtn.classList.toggle('hero-order-btn-dark');
  svgHeader.classList.toggle('svg-shopping-cart-dark');
  burgerSvg.classList.toggle('svg-shopping-cart-dark');

  const modalInput = document.querySelectorAll('.modal-input');
  modalInput.forEach(function (element) {
    element.classList.toggle('modal-input-dark');
  });

  const modalTextInput = document.querySelector('.comment-input');
  modalTextInput.classList.toggle('modal-input-dark');
}
