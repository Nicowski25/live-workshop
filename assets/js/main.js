//function construcotr
//funzione che sta dentro l'oggetto

/* class Product {
    in_stock = false

    /**
     * Product constructor
     * @param {String} name 
     * @param {String} descriprion 
     * @param {Flow} price 
     * @param {String} category 
     * @param {String} image_path 
     * @param {Number} likes 
     *
    constructor(name, descriprion, price, category, image_path, likes = 100) {
        this.name = name
        this.descriprion = descriprion
        this.price = price
        this.category = category
        this.image_path = image_path
        this.likes = likes
    }

    addLikes () {
        this.likes ++
    }
} */

/* const products = [
    new Product('SSD 1TB Crucial Disk', 'Super fast SSD drive', 49.99, 'PC Hardware', './assets/img/ssd.jpg'),
    new Product('Aoc 24inc Monitor', 'ultra thin monitor', 149.99, 'PC Monitors', './assets/img/monitor.jpg'),
    new Product('Corsair ATX Case', 'Small form factor atx desktop pc case', 99.99, 'PC Accessories', './assets/img/case.jpg'),
    new Product('Anker Vertical mouse', 'Comfy vertical mouse', 29.99, 'PC accessories', './assets/img/mouse.jpg'),
    new Product('Lenovo Idea pad', 'Modern 8gb ram ultra thin laptop', 549.99, 'Laptops', './assets/img/laptop.webp'),
    new Product('Walking desk', 'Get fit with the best walking desk', 649.99, 'Office equipment', './assets/img/desk.webp')
] */

import { products } from "../../db.js";

import Product from "./Models/Product.js";

/* function printProductCards(domElement, products) {
    products.forEach(product => {
        const {name, price, descriprion, image_path} = product
        const markup = `
        <div class="product">
            <div class="price">${price}</div>
            <img src="${image_path}" alt="">
            <div class="-body">
                <h4>${name}</h4>
                <p>${descriprion}</p>
                <button data-product-price="${price}" data-product-name="${name}">Buy Now</button>
            </div>
        </div>
        `
        productsElement.insertAdjacentHTML('beforeend', markup)
    })
}
 */

import { printProductCards,printCart } from "./Helpers/function.js";

const productsElement = document.getElementById('products')
printProductCards(productsElement, products)

//select all buttons in product - add event listener
const buttonList = document.querySelectorAll('.product button')
printCart(buttonList)

/* function printCart(nodeList) {
    let sum = 0
    
    buttonList.forEach(node => {
        //recupero i valori degli attributi di custom data-
        nodeList.addEventListener('click', function() {
            const product_name = this.getAttribute('data-product-name')
            const product_price = this.getAttribute('data-product-price')
            console.log(product_name, product_price);
            //sommo i prezzi per ottentere il totale
            sum += parseInt(product_price)
            //aggiungo alla dom gli elementi nel carrello
            document.querySelector('.cart').insertAdjacentHTML('beforeend', `<li>${product_name} ${product_price}</li>`)
            //aggiorno il totale del carrello
            document.querySelector('.total').innerHTML = `<strong>€ ${sum.toFixed(2)}</strong>`
        })
    })
} */




