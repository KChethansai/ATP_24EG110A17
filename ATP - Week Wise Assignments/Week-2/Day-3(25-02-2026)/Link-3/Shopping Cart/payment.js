import { reduceStock } from './product.js'
import { getCartItems, getCartTotal, clearCart } from './cart.js'

//process payment, reduce stock, clear cart, return order summary
function processPayment() {
  //get current cart state
  const items = getCartItems()
  const total = getCartTotal()

  //reduce stock for each item
  items.forEach((item) => {
    reduceStock(item.id, item.qty)
  })

  //clear cart after payment
  clearCart()

  return {
    items,
    total,
    status: 'Payment Successful'
  }
}

export { processPayment }
