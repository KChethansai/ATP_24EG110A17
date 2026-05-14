//original fruits array
let fruits = ['apple', 'banana']

//new array with spread of original plus additional item
let moreFruits = [...fruits, 'orange']

//original remains unchanged — spread creates a new array
console.log('Original:', fruits)
console.log('Copy:', moreFruits)
