const menu = document.querySelector('#mobile-menu');
const menulink = document.querySelector('.navbar__menu');

// diplay mobile menu

const mobileMenu = () => {
   menu.classList.toggle('is-active');
   menulink.classList.toggle('active');
};

menu.addEventListener ('click', mobileMenu);