const scrollUpContainer = document.querySelector('#scroll-container');
const scrollUpEl = document.querySelector('.button-up');

scrollUpContainer.addEventListener('click', () => {
  scrollToTop();
});

function scrollToTop() {
  scrollUpEl.classList.add('hiding');
  setTimeout(() => {
    scrollUpEl.classList.add('hidden');
    scrollUpEl.classList.remove('hiding');
  }, 300);
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', handleScroll);

function handleScroll() {
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  if (scrollY > 300) {
    scrollUpEl.classList.remove('hidden');
  } else {
    scrollUpEl.classList.add('hidden');
  }
}
