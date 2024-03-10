// Study Case 1 : implementasi OOP dari bangun datar di atas dengan menghitung luas dan keliling.


import Square from "./square";
import Retangle from "./retangle";
import Triangle from "./triangle";

const square = new Square(5);
console.log("Luas persegi:", square.calculateArea());
console.log("Keliling persegi:", square.calculatePerimeter());

// Membuat objek persegi panjang
const rectangle = new Retangle(4, 6);
console.log("Luas persegi panjang:", rectangle.calculateArea());
console.log("Keliling persegi panjang:", rectangle.calculatePerimeter());

// Membuat objek segitiga
const triangle = new Triangle(4, 5, 3, 4, 5);
console.log("Luas segitiga:", triangle.calculateArea());
console.log("Keliling segitiga:", triangle.calculatePerimeter());