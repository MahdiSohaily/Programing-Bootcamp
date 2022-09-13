const openMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close');
const mainNav = document.querySelector('.custom-navbar');

openMenu.addEventListener('click', () => {
  mainNav.style.display = 'block';
  mainNav.classList.toggle('open');
});

closeMenu.addEventListener('click', () => {
  mainNav.style.display = 'none';
  mainNav.classList.remove('open');
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    mainNav.classList.remove('open');
    mainNav.style.display = 'block';
  }
});

mainNav.addEventListener('click', () => {
  mainNav.style.display = 'none';
  mainNav.classList.remove('open');
});
