// All Main JS Functions here
let toggleButton = document.querySelector('.nav .toggle-button');
let header = document.querySelector('header.header-area');

toggleButton.addEventListener('click', click);

function click(e) {
  e.preventDefault();
  header.classList.toggle('nav-collapse');
}