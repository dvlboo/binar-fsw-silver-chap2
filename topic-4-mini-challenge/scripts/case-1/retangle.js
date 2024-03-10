import shapeParent from "./shapeParent"

class Retangle extends shapeParent {
  constructor(length, width) {
    super()
    this.length = length
    this.width = width
  }

  // implemen baut ngitung luas
  calArea = () => this.length * this.width

  // implementasi buat ngitung keliling
  calPerimeter = () => 2 * (this.length + this.width)

}

export default new Retangle()