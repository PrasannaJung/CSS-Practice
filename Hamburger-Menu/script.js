const navBtn = document.querySelector('.btn');
const container = document.querySelector('.primary-nav');

navBtn.addEventListener('click', () => {
  container.classList.toggle('active');
  navBtn.classList.toggle('btnActive');
  container.style.left = '30%';

  if (container.classList.contains('active')) {
    container.style.left = '30%';
  } else {
    container.style.left = '100%';
  }
});
