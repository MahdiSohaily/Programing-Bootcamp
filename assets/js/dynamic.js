// leading-header animation;
const header = document.getElementById('leading-header');
const title = 'A stream of endless knowledge.';
const speed = 50;
let i = 0;

function typeWriter() {
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
  if (i < title.length) {
    header.innerHTML += title.charAt(i);
    i += 1;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener('load', typeWriter);

// generating dynamic content for speakers section
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
const container = document.querySelector('.speaker-list');

function createElem(json) {
  const obj = json.speakers;
  for (let counter = 0; counter < obj.length; counter += 1) {
    container.innerHTML += appendElem(obj[counter]);
  }
}

fetch('./data.json')
  .then((response) => response.json())
  .then((json) => createElem(json));
