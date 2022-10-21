import data from './data.js';

const featuredSpeakers = document.querySelector('#featured-speakers');
const menuIconContainer = document.querySelector('.menu-icon-container');
const mobileNavbar = document.querySelector('.mobile-navbar');
const closeButtonContaienr = document.querySelector('.close-button-contaienr');
const navLinks = document.querySelectorAll('a');
const activePage = window.location.href;

featuredSpeakers.innerHTML = `
<div class="featured-speakers-title">
  <h2>Featured Speakers</h2>
  <span></span>
</div>
`;
for (let i = 0; i < data.length; i += 1) {
  const content = `
    <div class="speaker-container">
      <div class="speaker-image">
        <img src="${data[i].image}" alt="${data[i].alt}">
      </div>
      <div class="speaker-details">
        <h3>${data[i].name}</h3>
        <p>
          <i>
            ${data[i].text.italicText}
          </i>
        </p>
        <hr />
        <p>
          ${data[i].text.normalText}
        </p>
      </div>
  </div>`;

  featuredSpeakers.innerHTML += content;
}

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
