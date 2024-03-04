// // Nomor 1
// const hitungSaldoAkun = (Y, X) => (X % 5 === 0 && Y >= X + 0.5) ? Y - (X + 0.5) : Y
// // Contoh
// const saldoAwal = 100
// const jumlahDitarik = 50

// const saldoAkhir = hitungSaldoAkun(saldoAwal, jumlahDitarik)

// console.log(`Saldo akhir Yudi setelah transaksi: Rp.${saldoAkhir}`)


const numbers = [2, 5, 8, 12, 15, 20, 17, 22, 25]


const findSumOfEven = (arr) => arr.reduce(
  (sum, number) => number % 2 == 0 
  ? sum + number : sum, 0)

const findAverageOfOdd = (arr) => {
  const oddNumbers = arr.filter(number => number % 2 !== 0)
  const sum = oddNumbers.reduce((acc, num) => acc + num, 0)
  return sum / oddNumbers.length
}

const findMax = (arr) => Math.max(...arr)

const findMin = (arr) => Math.min(...arr)

// Contoh penggunaan:
console.log("Sum of Even Numbers :", findSumOfEven(numbers));
console.log("Average of Odd Numbers :", findAverageOfOdd(numbers));
console.log("Max Number :", findMax(numbers));
console.log("Min Number :", findMin(numbers));
