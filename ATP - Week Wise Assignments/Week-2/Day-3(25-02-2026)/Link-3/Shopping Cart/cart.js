import { getProductById, checkStock } from './product.js'

let cart = []
//add item to cart or increment qty if already present
function addToCart(id, qty) {
  if (!checkStock(id, qty)) return 'Not enough stock'

  const item = cart.find((i) => i.id === id)
  if (item) {
    item.qty += qty
  } else {
    cart.push({ id, qty })
  }

  return 'Added to cart'
}
//return cart items with product details and line total
function getCartItems() {
  return cart.map((item) => {
    const product = getProductById(item.id)
    return {
      name: product.name,
      price: product.price,
      qty: item.qty,
      total: product.price * item.qty
    }
  })
}
//sum all line totals
function getCartTotal() {
  return getCartItems().reduce((sum, item) => sum + item.total, 0)
}
//clear cart array
function clearCart() {
  cart = []
}
export { addToCart, getCartItems, getCartTotal, clearCart }
