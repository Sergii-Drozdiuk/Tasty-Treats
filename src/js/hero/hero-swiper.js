import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

document.addEventListener('DOMContentLoaded', () => {
  new Splide('.splide', {
    type: 'loop',
    autoWidth: true,
    drag: false,
    autoHeight: true,
    gap: '1rem',
    arrows: false,
    perPage: 3,
    autoplay: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    classes: {
      pagination: 'splide__pagination pag-list',
      page: 'splide__pagination__page pag-btn',
    },
  }).mount();
});
