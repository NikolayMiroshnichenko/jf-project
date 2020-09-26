const openBtn = document.querySelectorAll('.js-open-modal');
const modal = document.querySelector('.overlay');

openBtn.forEach(btn => {
    btn.addEventListener('click', openModal);
});
modal.addEventListener('click', closeModal);

function openModal(e) {
    e.preventDefault();
    modal.classList.add('active');
}

function closeModal(e) {
    if(e.target.dataset.close !== 'close') return;

    modal.classList.remove('active');
}