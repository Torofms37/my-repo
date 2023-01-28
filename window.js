const open = document.getElementById('open');
const openC = document.getElementById('openC');
const contact = document.getElementById('contact');
const modal = document.querySelector('#modal')
const close = document.getElementById('close')
const closeDos = document.getElementById('close-2')


open.addEventListener('click', () => {
    modal.showModal();
});

close.addEventListener('click', () => {
    modal.close();
    console.log(modal);
})

openC.addEventListener('click', () => {
    contact.showModal();
});

closeDos.addEventListener('click', () => {
    contact.close();
});

