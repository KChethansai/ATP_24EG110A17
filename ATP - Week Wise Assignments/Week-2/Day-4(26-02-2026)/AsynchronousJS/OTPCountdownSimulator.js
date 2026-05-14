//notify user OTP has been sent
console.log('OTP sent successfully')

let n = 10

//countdown timer — logs remaining seconds and stops at 0
let timer = setInterval(() => {
  console.log(`wait ${n} seconds to resend`)
  n--
  if (n <= 0) {
    clearInterval(timer)
  }
}, 1000)

//enable resend option after countdown ends
setTimeout(() => {
  console.log('Resend is available')
}, 11000)
