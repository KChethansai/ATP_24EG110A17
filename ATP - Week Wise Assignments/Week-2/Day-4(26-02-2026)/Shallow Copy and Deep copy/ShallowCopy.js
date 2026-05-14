//original user object with nested preferences
const user = {
  id: 101,
  name: 'Ravi',
  preferences: {
    theme: 'dark',
    language: 'en'
  }
}

//shallow copy — nested objects still share the same reference
let copyUser = { ...user }

//only affects copyUser (primitive — copied by value)
copyUser.name = 'Bhanu'

//affects BOTH user and copyUser (object — copied by reference)
copyUser.preferences.theme = 'Light'

//original.name stays "Ravi" but original.preferences.theme changes to "Light"
console.log('Original:', user)
console.log('Copy:', copyUser)
