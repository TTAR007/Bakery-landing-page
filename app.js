// nav bar
const menu = document.querySelector('nav');
const menuBar = document.querySelector('.hamburger-menu_box');
const closeBtn = document.querySelector('.close-button_box');

menuBar.addEventListener('click', () => {
    menu.classList.add('open')
})

closeBtn.addEventListener('click', () => {
    menu.classList.remove('open')
})

// cookies and matcha bun
const cookiesImg = document.querySelector('.cookies-image');
const matchaBunImg = document.querySelector('.matcha-bun-image')
const matcha = document.querySelector('.matcha-bun');
const cookies = document.querySelector('.cookies');
const matchaTxt = document.querySelector('.name-text-matcha')
const cookiesTxt = document.querySelector('.name-text-cookies')

matcha.addEventListener('click', () => {
    matcha.classList.add('change-to-matcha')
    cookies.classList.add('reset-cookies')
    matchaBunImg.classList.add('show-matcha-bun')
    cookiesImg.classList.add('undisplay-cookies')
    matchaTxt.classList.add('show-matcha-name')
    cookiesTxt.classList.add('undisplay-cookies-name')
})

cookies.addEventListener('click', () => {
    matcha.classList.remove('change-to-matcha')
    cookies.classList.remove('reset-cookies')
    matchaBunImg.classList.remove('show-matcha-bun')
    cookiesImg.classList.remove('undisplay-cookies')
    matchaTxt.classList.remove('show-matcha-name')
    cookiesTxt.classList.remove('undisplay-cookies-name')
})
