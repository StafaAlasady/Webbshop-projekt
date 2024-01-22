const buttonOpen = document.querySelector('[data-toggle="open"]');
const buttonClose = document.querySelector('[data-toggle="Close"]');
const overlayEl = document.querySelector('.nav_overlay');
const menuEl = document.querySelector('.nav_menu');


const toggleMenu = () => {
    menuEl.classList.toggle('active');
    overlayEl.classList.toggle('active');
    document.body.classList.toggle('scroll-false');
}

buttonOpen.addEventListener('click', toggleMenu);
buttonClose.addEventListener('click', toggleMenu);
overlayEl.addEventListener('click', toggleMenu);