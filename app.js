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


//Add food to cart

//menu array
const foodArray = [
    {id: 1, menuName: "Matcha Cream Bun", price: 3.59, quantity: 0},
    {id: 2, menuName: "Red Bean Bun", price: 3.59, quantity: 0}
]

let cartArray = [];
let cartSize = 0;

const cartNum = document.getElementById("cart-number");
let count = 0;

function addCart(food) {
    cartNum.textContent = ++count;

    let myNewFood = food.getAttribute("data-name"); //get that name of the menu from html button

    let found = false;
    let foodIndex; // use for indicate where to add quantity

    for (let i = 0; i < foodArray.length; i++) {
        // current food that is in our store.
        let currentFood = foodArray[i];

        if (currentFood.menuName === myNewFood) {
            //can add

            // if size == 0
            if (cartSize === 0) {
                currentFood.quantity++;
                cartArray[cartArray.length] = currentFood;
                cartSize++;
                console.log("add new food");
                break;
            }

            // if size is not 0
            //before adding, we have to check Is it already store in my cart?
            for (let j = 0; j < cartArray.length; j++) {
                if (cartArray[j].menuName === myNewFood) {
                    found = true;
                    foodIndex = j; // this is tne index of food that we are going to increase quantity.
                    break;
                }
            }

            if (found) { // increase just quantity
                cartArray[foodIndex].quantity++;
                console.log("increase quantity");
                break;
            } else { //add new food to cartArray
                currentFood.quantity += 1;
                cartArray[cartArray.length] = currentFood;
                cartSize++;
                console.log("add new food");
                break;
            }
        }
    }
}