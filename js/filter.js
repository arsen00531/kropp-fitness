const filterMenu = document.querySelectorAll('.filter__menu h2')
const filterItems = document.querySelectorAll('.filter__body .filter__item')

filterMenu.forEach((filter, key) => {
    filter.addEventListener('click', () => {
        filterMenu.forEach(item => item.classList.remove('active'))
        filter.classList.add('active')

        if(filter.classList[0] === 'all') {
            filterItems.forEach(item => item.style.display = 'block')
        } else {
            filterItems.forEach(item => {
                if(item.classList[1] === filter.classList[0]) {
                    item.style.display = 'block'
                } else {
                    item.style.display = 'none'
                }
            })
        }
    })
})