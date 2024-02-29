const priceTotal = 30000
const discount = 25
const price = 0

const totalPrice = () => {
  const totalDiscount = priceTotal * (discount / 100)

  const total = priceTotal - totalDiscount

  console.log(`total : Rp.${total}`)


  // by alert
  const btnAlert = document.getElementById('btn-alert')
  btnAlert.addEventListener(
    'click', () => alert(`total : Rp.${total}`)
  )
}

totalPrice()