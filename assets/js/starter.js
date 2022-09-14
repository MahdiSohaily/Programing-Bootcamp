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
  } else {
    mainNav.style.display = 'none';
  }
});

mainNav.addEventListener('click', () => {
  mainNav.style.display = 'none';
  mainNav.classList.remove('open');
});


// leading-header animation;
const header = document.getElementById('leading-header');
const title = 'A stream of endless knowledge.';
const speed = 50;
let i = 0;
window.addEventListener('load', typeWriter)

function typeWriter() {
  if (i < title.length) {
    header.innerHTML += title.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
