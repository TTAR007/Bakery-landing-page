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

// addfood and also display at the same time
function addFood(food) {
    addCart(food);
    displayCart();
}

//menu array
const foodArray = [
    {id: 1, menuName: "Matcha Cream Bun", price: 3.59, quantity: 0},
    {id: 2, menuName: "Red Bean Bun", price: 3.59, quantity: 0}
]

let cartArray = [];

const cartNum = document.getElementById("cart-number");
let count = 0;

function addCart(food) {
    // cartNum.textContent = ++count; we use updateCart instead

    let myNewFood = food.getAttribute("data-name"); //get that name of the menu from html button

    let found = false;
    let foodIndex; // use for indicate where to add quantity


    for (let i = 0; i < foodArray.length; i++) {
        // current food that is in our store.
        let currentFood = {...foodArray[i]};

        if (currentFood.menuName === myNewFood) {
            //can add

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
                // console.log("increase quantity");
                break;
            } else { //add new food to cartArray
                currentFood.quantity++;
                cartArray[cartArray.length] = currentFood;
                // console.log("add new food");
                break;
            }
        }
    }
    cartNum.textContent = updateCartNumber();
}

//display cart
const cartBox = document.getElementById("cart_box");

// Open cart
const cartBtn = document.querySelector('.cart-btn'); //get cart-btn from html
cartBtn.addEventListener('click', () => {
    cartBox.classList.add('open-cart');
    displayCart();
})


function displayCart() {
    cartBox.innerHTML = "<div class='cart-close-btn' onclick='closeCart()'>" + "<div></div>" + "<div></div>" + "</div>";
    if (cartArray.length === 0) {
        cartBox.innerHTML += "<p>" + "Empty cart." + "</p>";
        return;
    }
    
    cartBox.innerHTML += "<p class='title'>" + "Your cart" + "</p>";

    let sumPrice = 0;
    for (let i = 0; i < cartArray.length; i++) {
        let endPrice = calPrice(cartArray[i]);

        cartBox.innerHTML += `<div class='menu-text'>
        <p>${cartArray[i].menuName}</p>
        <p class='quantity-number'>${cartArray[i].quantity}</p>
        <p>$${endPrice}</p>
        <button class='remove-btn' data-name='${cartArray[i].menuName}' data-quantity='${cartArray[i].quantity}' onclick='deleteFood(this)'>
        <div></div>
        </button>
        </div>
        `
        sumPrice += endPrice;
    }
    let roundPrice = Math.floor(sumPrice * 100) / 100;
    cartBox.innerHTML += "<p class='total-price'>" + "Total price: " + "<span>" + "$" + roundPrice + "</span>" + "</p>";
    cartBox.innerHTML += "<button class='confirm-btn'>" + "Confirm" + "</button>";
}

// function to close cart
function closeCart() {
    cartBox.classList.remove('open-cart');
}

//cal total price
function calPrice(food) {
    return Math.floor((food.price * food.quantity) * 100) / 100;
}

//delete food
function deleteFood(food) {
    // the name of the menu from "data-name" attribute in button
    let foodToDelete = food.getAttribute("data-name");

    //loop through the cardArray to find the match menuName
    for (let i = 0; i < cartArray.length; i++) {
        if (foodToDelete === cartArray[i].menuName) {

            //if quantity is 1. delete that obj
            if (cartArray[i].quantity <= 1) {
                cartArray.splice(i, 1);
                break;
            }

            // if it's more than 1, decrease quantity by 1
            cartArray[i].quantity--;
            break;
        }
    }

    // cartNum.textContent = --count;
    cartNum.textContent = updateCartNumber();
    displayCart();
}

//update cart munber instedof using ++count;
function updateCartNumber() {
    let total = 0;

    for (let i = 0; i < cartArray.length; i++) {
        total += cartArray[i].quantity;
    }

    return total;
}