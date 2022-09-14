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
window.addEventListener('load', typeWriter);

function typeWriter() {
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
  if (i < title.length) {
    header.innerHTML += title.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// generating dynamic content for speakers section
const container = document.querySelector('.speaker-list');
fetch('./data.json')
  .then((response) => response.json())
  .then((json) => createElem(json));
function createElem(json) {
  const obj = json['speakers'];
  for (let counter = 0; counter < obj.length; counter++) {
    container.innerHTML += appendElem(obj[counter]);
  }
}

function appendElem(elem) {
  const template = `<article class="speaker">
      <div class="speaker-image">
        <img src=" ${elem.picture}" width="120" height="150" alt="${elem.fullName}">
      </div>
      <div class="details">
        <div class="information">
          <p class="text-secondary">${elem.fullName}</p>
          <p class="position text-primary small">${elem.position}</p>
          <div class=" divider ml-0 w-10 border-bottom border-secondary-300 border-200"></div>
        </div>
        <blockquote>
        ${elem.quote}
        </blockquote>
      </div>
  </article>`;
  return template;
}
