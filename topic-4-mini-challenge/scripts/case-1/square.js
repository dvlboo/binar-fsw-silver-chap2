import shapeParent from "./shapeParent"

class Square extends shapeParent {
  constructor(side) {
    super()
    this.side = side
  }

  // implemen baut ngitung luas
  calArea = () => this.side * this.side

  // implementasi buat ngitung keliling
  calPerimeter = () => 4 * this.side
}

export default new Square()