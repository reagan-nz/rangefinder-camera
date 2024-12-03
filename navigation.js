let menu_icon = document.querySelector('svg.menu');
let navigation = document.querySelector('nav');
let header = document.querySelector('header');

function toggleNav() {
  console.log('Toggle the nav bar!');
  // add class or remove it from HTML elements
  navigation.classList.toggle("expand");
  header.classList.toggle("expand");
}

menu_icon.addEventListener('click', toggleNav);