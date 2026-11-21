// 1. Responsive Hamburger Menu Toggle
const menuButton = document.querySelector('#menu-button');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menuButton.classList.toggle('open');
});

// 2. Dynamic Footer Dates
const yearSpan = document.querySelector('#currentyear');
const lastModifiedParagraph = document.querySelector('#lastModified');

const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;