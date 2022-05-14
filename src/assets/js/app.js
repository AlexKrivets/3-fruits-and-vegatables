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
    slidesPerView: 3,
    spaceBetween: 15,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        575: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
console.log(document);

const nav = document.getElementById('nav');
const navClose = document.getElementById('nav-close');
const navOpen = document.getElementById('nav-open');

console.log(nav);