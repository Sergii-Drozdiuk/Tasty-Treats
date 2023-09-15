import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

new Swiper('.swiper', {
  slidesPerView: 0.6,
  spaceBetween: '16px',
  loop: true,
  freeMode: true,
  modules: [Pagination],
  autoplay: {
    delay: 100,
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
      slidesPerView: 'auto',
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
      slidesPerView: 0.97,
    },
  },
});
