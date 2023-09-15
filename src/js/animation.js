import anime from 'animejs/lib/anime.es.js';
import { swiper } from './hero/hero-swiper';

const textElement = document.querySelector('#animation-container');
const overlay = document.querySelector('#animation-overlay');

const animation = anime.timeline({
  loop: false,
  duration: 1200,
  easing: 'easeInOutSine',
  complete: function () {
    document.body.style.overflow = 'auto';
    textElement.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.backgroundColor = 'rgb(248, 248, 248)';
    swiper.autoplay.start();
  },
});

animation
  .add({
    targets: textElement,
    translateX: ['-50%'],
    opacity: [0, 1],
    easing: 'easeOutBounce',
    delay: 200,
  })
  .add({
    targets: textElement,
    opacity: [1, 0],
    delay: 500,
  })
  .add({
    targets: overlay,
    opacity: [1, 0],
    delay: 500,
  });
