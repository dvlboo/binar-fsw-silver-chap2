let priceTotal = 2000000
let discount = 30
let price = 0

const getPrice = () => {
  let totalDiscount = priceTotal * (discount / 100)
  
  let total = priceTotal - totalDiscount

  console.log(`total : Rp.${total}`)

}

getPrice()