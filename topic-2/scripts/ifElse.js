const score = 102

if (score > 100) {
  console.log("The score is not valid!")
}

// if (score > 80) {
//   console.log("A")
// } else if (score > 70) {
//   console.log("B")
// } else {
//   console.log("C")
// }

const grade = score > 80 ? "A" : score > 70 ? "B" : "C";
console.log(grade);