window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    if(window.scrollY >= 80){
        header.classList.add('scroll')
    }
    else{
        header.classList.remove('scroll')
    }
})

const humburger = document.querySelector('.dots')
const dots = document.querySelectorAll('.dot')
const nav = document.querySelector('.main-nav')

humburger.addEventListener('click', () => {
    dots.forEach(dot => {
        dot.classList.toggle('active')
        nav.classList.toggle('active')
    })
})