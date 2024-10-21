const modal = document.querySelector('.modal')
const modalButton = document.querySelector('.about__img-button')

modalButton.addEventListener('click', openModal)
modal.addEventListener('click', closeModal)

function openModal(e) {
    e.preventDefault()
    document.body.classList.toggle('body--modal-opened')
}

function closeModal(e) {
    e.preventDefault()
    const target = e.target

    // if (target.closest('.modal-cansel') || target.classList.contains('modal')) {
    //     document.body.classList.remove('body--modal-opened')
    if (target.classList.contains('modal-cansel') || target.classList.contains('modal')) {
        document.body.classList.remove('body--modal-opened');
    }
    }

}