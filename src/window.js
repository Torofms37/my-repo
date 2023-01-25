const open = document.getElementById('open');
const openC = document.getElementById('openC');
const contact = document.getElementById('contact');
const modal = document.querySelector('#modal')

const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

open.addEventListener('click', () => {
    modal.showModal();
});

openC.addEventListener('click', () => {
    contact.showModal();
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});