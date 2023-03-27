function printProductCards(domElement, products) {
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
        domElement.insertAdjacentHTML('beforeend', markup)
    })
}

function printCart(nodeList) {
    let sum = 0
    
    nodeList.forEach(node => {
        //recupero i valori degli attributi di custom data-
        node.addEventListener('click', function() {
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
}

export {printProductCards, printCart}

