const openBtn = document.querySelectorAll('.js-open-modal');
const modal = document.querySelector('.overlay');
const formId = document.querySelector('.js-form');


openBtn.forEach(btn => {
    btn.addEventListener('click', openModal);
});
modal.addEventListener('click', closeModal);

function openModal(e) {
    e.preventDefault();
    const id = e.target.dataset.id;

    formId.id = id;
    modal.classList.add('active');
}

function closeModal(e) {
    if(e.target.dataset.close !== 'close') return;

    formId.id = '';
    modal.classList.remove('active');
}