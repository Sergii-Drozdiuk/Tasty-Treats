import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

export const swiper = new Swiper('.swiper', {
  noSwiping: true,
  noSwipingSelector: '.swiper',
  speed: 800,
  slidesPerView: 0.7,
  spaceBetween: '16px',
  loop: true,
  modules: [Pagination, Autoplay],
  Autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.pages-pagination',
    clickable: true,
  },
});

swiper.autoplay.start();
