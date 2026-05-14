//notify student of successful submission
console.log('Exam submitted successfully')

//simulate evaluation delay
setTimeout(() => {
  console.log('Evaluating answers...')
}, 2000)

//display result after evaluation
setTimeout(() => {
  console.log('Result: pass')
}, 4000)
