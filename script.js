let header = document.querySelector('.header')
let navbar = document.querySelector('.header .navbar')
let menu = document.querySelector('#menu-btn')
let closeBtn = document.querySelector('#nav-close')

let formSearch = document.querySelector('.search-form')
let searchBtn = document.querySelector('#search-btn')
let closeSearchBtn = document.querySelector('#close-search')

menu.addEventListener('click', () => {
    navbar.classList.add('active')
})

closeBtn.addEventListener('click', () => {
    navbar.classList.remove('active')
})

searchBtn.addEventListener('click', () => {
    formSearch.classList.add('active')
})

closeSearchBtn.addEventListener('click', () => {
    formSearch.classList.remove('active')
})

window.onscroll = () => {
    navbar.classList.remove('active')

    if(window.scrollY > 0) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
}

window.onload = () => {

    if(window.scrollY > 0) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
}

var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});