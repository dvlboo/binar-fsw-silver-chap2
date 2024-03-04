// AND
// Will be find the first false and then that value will be returned

// If there are no false, or there are all is true, it'll get last of true value

const a = true
const b = true
const c = true
const d = true
const e = a && b && c && 1 && d && 20 && [] && ""

console.log(e)


// OR
// Will be find the first true and then that value will be returned

// If there are no true, or there are all is false, it'll get last of false value

const f = false 
const g = f || false || "" || 0
console.log(g)