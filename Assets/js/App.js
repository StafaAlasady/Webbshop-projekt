const buttonOpen = document.querySelector('[data-toggle="open"]');
const buttonClose = document.querySelector('[data-toggle="close"]');
const overlayEl = document.querySelector('.nav_overlay');
const menuEl = document.querySelector('.nav_menu');


const toggleMenu = () => {
    menuEl.classList.toggle('active');
    overlayEl.classList.toggle('active');
    document.body.classList.toggle('scroll-false');
}

buttonOpen.addEventListener('click', toggleMenu);
buttonClose.addEventListener('click',toggleMenu);
overlayEl.addEventListener('click', toggleMenu);
window.addEventListener('resize', () =>{
    if(this.innerWidth >= 1024)
        if (menuEl.classList.contains('active')) toggleMenu();
});

const sr = ScrollReveal({
    distance: '25px',
    duration: 1000,
    easing: 'cubic-bezier(.68, -.55, .265, 1.55)'
});

sr.reveal('.showcase_text-group',{
    origin:'top'
});

sr.reveal('showcase_image-group',{
    origin:'bottom'
});