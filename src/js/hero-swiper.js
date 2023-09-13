import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

document.addEventListener('DOMContentLoaded', () => {
  new Splide('.splide', {
    autoScroll: {
      speed: 1.5,
    },
    type: 'loop',
    autoWidth: true,
    autoHeight: true,
    gap: '1rem',
    arrows: false,
  }).mount({ AutoScroll });
});