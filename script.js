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
}