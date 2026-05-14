import { getAllProducts } from './product.js'
import { addToCart, getCartItems, getCartTotal } from './cart.js'

//fetch and display all available products
console.log(getAllProducts())

//add 2 units of product with id 1 to cart
console.log(addToCart(1, 2))

//display current cart items with product details
console.log(getCartItems())

//display final cart total
console.log('Total:', getCartTotal())
