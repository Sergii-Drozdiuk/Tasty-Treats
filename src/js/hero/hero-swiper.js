import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  noSwiping: true,
  noSwipingSelector: '.swiper',
  speed: 1000,
  slidesPerView: 0.6,
  spaceBetween: '16px',
  loop: true,
  modules: [Pagination, Autoplay],
  Autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.pages-pagination',
    clickable: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 0.76,
    },
    427: {
      slidesPerView: 0.8,
    },
    530: {
      slidesPerView: 1.1,
    },
    588: {
      slidesPerView: 1.2,
    },
    640: {
      slidesPerView: 1.3,
    },
    697: {
      slidesPerView: 1.4,
    },
    746: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 0.9,
    },
    900: {
      slidesPerView: 1.1,
    },
    997: {
      slidesPerView: 1.2,
    },
    1084: {
      slidesPerView: 1.3,
    },
    1175: {
      slidesPerView: 1.4,
    },
    1200: {
      slidesPerView: 0.7,
    },
    1220: {
      slidesPerView: 0.8,
    },
    1310: {
      slidesPerView: 0.95,
    },
  },
});

swiper.autoplay.start();
