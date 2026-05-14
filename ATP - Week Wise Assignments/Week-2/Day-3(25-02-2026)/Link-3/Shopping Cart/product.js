//in-memory product catalogue
const products = [
  { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
  { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' }
]

//find product by id
function getProductById(id) {
  return products.find((p) => p.id === id)
}

//return all products
function getAllProducts() {
  return products
}

//check if product has enough stock for requested qty
function checkStock(id, qty) {
  const product = getProductById(id)
  return product && product.stock >= qty
}

//deduct qty from product stock after purchase
function reduceStock(id, qty) {
  const product = getProductById(id)
  if (product) product.stock -= qty
}

export { getProductById, getAllProducts, checkStock, reduceStock }
