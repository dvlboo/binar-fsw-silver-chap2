// const btnAlert = document.getElementsById('btn-alert')

// btnAlert.addEventListener(
//   'click', () => alert("I'm Clicked")
// )


var priceTotal = 1000000
var discount = 25
var total = 0

const getTotal = () => {
  var totalDiscount = priceTotal * (discount / 100)

  var total = priceTotal - totalDiscount
  console.log('total', total)
}

getTotal()
console.log('total', total)