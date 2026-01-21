const mb = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

mb.addEventListener('click', () => {
    nav.classList.toggle('open');
});