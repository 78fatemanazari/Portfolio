//Mobile Menu

  //Select classes

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

  //Add event listener to open the menu when clicked on

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

  //Select each nav links and add event listener to close the menu when clicked on

document.querySelectorAll('.nav-link').forEach((n) => n
  .addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }));

//Form validation

