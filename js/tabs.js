const tabs = document.querySelectorAll('.tab__nav-item')
const tabItems = document.querySelectorAll('.location-body-item')

tabs.forEach((tab, key) => {
    tab.addEventListener('click', () => {
        document.querySelector('.tab__nav-item.active').classList.remove('active')
        document.querySelector('.location-body-item.active').classList.remove('active')
        setTimeout(() => {
            tab.classList.add('active')
            tabItems[key].classList.add('active')
        }, 300)
    })
})