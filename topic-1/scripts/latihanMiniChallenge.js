// Struktur Data : Menghasilkan nilai 25 dari variabel x dan y
const x = 21;
const y = 23;

const z = y + (y - x);

console.log("Nilai z:", z);

// Logical Operator : false tanpa mengubah operator yang digunakan
// console.log(true || 10 && null);
console.log(false || (10 && false));

// Data Type - Array Sorting
const scores = [10, 8, 7, 5, 6, 3, 2, 4, 1]
const min = scores.sort((a,b) => a - b)
console.log(`ini min ke max : ${min}`)

const max = scores.sort((a, b) => b - a)
console.log(`ini max ke min : ${max}`)

// Data Type - Array Find
const countries = ["Albania", "Turkey", "Netherland", "Germany", "Spain", "England"];

const result = countries.find(country => country === "Spain" || country === "England");

console.log(result); 



// Data Type - Array Filter
const newCountries = ["Albania", "Turkey", "Netherland", "Germany", "Spain", "England", "Albania", "Germany", "Spain"];

const duplicates = newCountries.filter((country, index) => newCountries.indexOf(country) !== index);

console.log(duplicates);