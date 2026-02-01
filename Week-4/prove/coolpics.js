const mb = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

mb.addEventListener('click', () => {
    nav.classList.toggle('active');
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 700) {
        nav.classList.remove('active');
    }
})

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', openModal);

function openModal(e) {
    
// Code to show modal  - Use event parameter 'e'   
    if(e.target.tagName != 'IMG'){
        console.log('SKIP');
        return;
    }
    modalImage.src = e.target.src.replace('-sm.','-full.');
    modal.showModal();
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
