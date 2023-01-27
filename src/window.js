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

