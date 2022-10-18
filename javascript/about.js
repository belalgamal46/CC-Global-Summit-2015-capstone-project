const menuIconContainer = document.querySelector('.menu-icon-container');
const mobileNavbar = document.querySelector('.mobile-navbar');
const closeButtonContaienr = document.querySelector('.close-button-contaienr');

const openMobileMenu = () => {
  console.log('clicked');
  mobileNavbar.style.transform = 'translateX(0)';
};
const closeMobileMenu = () => {
  mobileNavbar.style.transform = 'translateX(-100%)';
};

menuIconContainer.addEventListener('click', openMobileMenu);
closeButtonContaienr.addEventListener('click', closeMobileMenu);
