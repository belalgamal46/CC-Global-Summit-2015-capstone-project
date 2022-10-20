const menuIconContainer = document.querySelector('.menu-icon-container');
const mobileNavbar = document.querySelector('.mobile-navbar');
const closeButtonContaienr = document.querySelector('.close-button-contaienr');
const activePage = window.location.href;
const navLinks = document.querySelectorAll('a');
const previousGlobalSummitsImageContainer = document.querySelector(
  // eslint-disable-next-line comma-dangle
  '.previous-global-summits-image-container'
).children;

const openMobileMenu = () => {
  mobileNavbar.style.transform = 'translateX(0)';
};
const closeMobileMenu = () => {
  mobileNavbar.style.transform = 'translateX(-100%)';
};

menuIconContainer.addEventListener('click', openMobileMenu);
closeButtonContaienr.addEventListener('click', closeMobileMenu);

navLinks.forEach((link) => {
  if (link.href === activePage) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

Array.from(previousGlobalSummitsImageContainer).forEach((image) => {
  image.addEventListener('mouseover', (event) => {
    if (image.attributes.src.value === event.target.attributes.src.value) {
      const hoveredImage = `${
        event.target.attributes.src.value.split('/')[3].split('.')[0]
      }_hover.png`;
      image.attributes.src.value = `../images/about-page/${hoveredImage}`;
    }
  });

  image.addEventListener('mouseleave', (event) => {
    if (image.attributes.src.value === event.target.attributes.src.value) {
      const imagePath = event.target.attributes.src.value
        .split('/')[3]
        .split('_')[0];
      const imagePath2 = event.target.attributes.src.value
        .split('/')[3]
        .split('_')[1];
      const joinedImagePath = `../images/about-page/${imagePath}_${imagePath2}.png`;
      image.attributes.src.value = joinedImagePath;
    }
  });
});
