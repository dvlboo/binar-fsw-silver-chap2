class shapeParent {
  constructor() {
    if (this.construtor === shapeParent) {
      throw new Error ("Abstract classes can't be instantiated.")
    }
  }

  // method buat ngitung luas
  calArea() {
    throw new Error("Method 'calArea()' must be implemented.")
  }
  
  // method buat ngitung keliling
  calPerimeter() {
    throw new Error("Method 'calPerimeter()' must be implemented.")
  }
}

export default new shapeParent()