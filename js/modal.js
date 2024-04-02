const modalButton = document.querySelectorAll('a, .button')
const modalWindow = document.querySelector('.modal__window')
const modalSpan = document.querySelector('.modal__button span')
const body = document.querySelector('body')
const closeButton = document.querySelector('.modal__window button')

modalButton.forEach(modal => {
    modal.addEventListener('click', (e) => {
        e.preventDefault()
        modalWindow.classList.toggle('active')
        body.classList.toggle('active')

        if(modalWindow.classList.contains('active')) {
            modalWindow.style.top = `calc(${window.scrollY}px + 35vh)`
        }
    })
})

closeButton.addEventListener('click', () => {
    modalWindow.classList.remove('active')
    body.classList.remove('active')
})

body.addEventListener('click', (e) => {
    if(body.classList.contains('active') && !e.target.classList.contains('modal__window')) {
        if(!Object.values(modalButton).find((elem) => elem.contains(e.target))) {
            modalWindow.classList.remove('active')
            body.classList.remove('active')
        }
    }
})