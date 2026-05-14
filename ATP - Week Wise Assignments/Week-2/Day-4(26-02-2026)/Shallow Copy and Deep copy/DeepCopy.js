//original order object with nested address and items
const order = {
  orderId: 'ORD1001',
  customer: {
    name: 'Anita',
    address: {
      city: 'Hyderabad',
      pincode: 500085
    }
  },
  items: [{ product: 'Laptop', price: 70000 }]
}

//deep copy — changes to copyOrder won't affect original
let copyOrder = structuredClone(order)

//modify city and price on the copy
copyOrder.customer.address.city = 'Chennai'
copyOrder.items[0].price = 68000

//verify original remains unchanged
console.log('Original:', order)
console.log('Copy:', copyOrder)
