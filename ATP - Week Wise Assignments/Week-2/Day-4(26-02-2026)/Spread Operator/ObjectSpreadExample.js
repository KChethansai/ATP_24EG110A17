//original user object
let user = {
  name: 'Ravi',
  city: 'Hyderabad'
}

//new object with spread of original plus additional field
let updatedUser = { ...user, age: 25 }

//original remains unchanged — spread creates a new object
console.log('Original:', user)
console.log('Copy:', updatedUser)
