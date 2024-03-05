// Mini Challenge dari Materi

// Nomor 1
const hitungSaldoAkun = (Y, X) => (X % 5 === 0 && Y >= X + 0.5) ? Y - (X + 0.5) : Y
// Contoh
const saldoAwal = 100
const jumlahDitarik = 50

const saldoAkhir = hitungSaldoAkun(saldoAwal, jumlahDitarik)

console.log(`Saldo akhir Yudi setelah transaksi: Rp.${saldoAkhir}`)


// Nomor 2
const nilaiMahasiswa = (nilai) => {
  if (nilai < 0 || nilai > 100 || isNaN(nilai)) {
    return "Nilai tidak valid";
  }

  if (nilai >= 91 && nilai <= 100) {
    return "A"
  } else if (nilai >= 81 && nilai <= 90) {
    return "B"
  } else if (nilai >= 71 && nilai <= 80) {
    return "C"
  } else if (nilai >= 61 && nilai <= 70) {
    return "D"
  } else {
    return "E"
  }
}

// Contoh penggunaan
const nilaiUjian = 85
console.log("Kategori nilai:", nilaiMahasiswa(nilaiUjian))

// Nomor 3
const replaceDot = (ipAddress) => ipAddress.replace(/\./g, '()')

// Contoh penggunaan
const ipAddress = "192.168.0.1";
const newIpAddress = replaceDot(ipAddress)
console.log("Alamat IP baru:", newIpAddress)


// Nomor 4
const jumlahDigit = (n) => {
  const angkaString = n.toString();
  let total = 0;
  for (let i = 0; i < angkaString.length; i++) {
    total += parseInt(angkaString[i]);
  }
  return total;
}

// Contoh penggunaan
const angka = 12345;
console.log("Jumlah digit:", jumlahDigit(angka));


// Nomor 5
const checkDistance = (s) => {
  let lastIndexOfA = -1;
  let lastIndexOfB = -1;

  for (let i = 0; i < s.length; i++) {

    if (s[i] === 'a') {
      lastIndexOfA = i;

      if (lastIndexOfB !== -1 && i - lastIndexOfB >= 3) {
          return "YES";
      }
    }

    else if (s[i] === 'b') {
      lastIndexOfB = i;
    
      if (lastIndexOfA !== -1 && i - lastIndexOfA >= 3) {
          return "YES";
      }
    }
  }

  return "NO";
}

const stringS = "abcdefgahijk";
console.log(checkDistance(stringS));



// latihan dari mas reza
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
