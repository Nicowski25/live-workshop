export default class Product {
    in_stock = false

    /**
     * Product constructor
     * @param {String} name 
     * @param {String} descriprion 
     * @param {Flow} price 
     * @param {String} category 
     * @param {String} image_path 
     * @param {Number} likes 
     */
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
}



//named export
//per importare un named export si usa
//import { Product } from "./Models/Product.js";

//export {Product}

//to rename export
//export {Product as ProductClass}

/* Opzione 2 Default export (one per file)
import Product from "./models/product.js"
*/

//export {Product as default}