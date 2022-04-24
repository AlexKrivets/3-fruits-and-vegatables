console.log(document);

const nav = document.getElementById('nav');
const navClose = document.getElementById('nav-close');
const navOpen = document.getElementById('nav-open');

console.log(nav);

window.ontouchstart = function(event) {
    if ((event.target = navOpen)) {
        nav.classList.add('active');
    }
    if ((event.target = navClose)) {
        nav.classList.remove('active');
    }
};

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
    },
});