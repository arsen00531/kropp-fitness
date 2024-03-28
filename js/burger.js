const load = () => {
    const header = document.querySelector('.header')
    const burger = document.querySelector('.header-burger-button')
    burger.addEventListener('click', (event) => {
        burger.classList.toggle('active')
        header.classList.toggle('active')
    })
}

window.addEventListener('load', load)