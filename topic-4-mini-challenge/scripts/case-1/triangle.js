import shapeParent from "./shapeParent"

class Triangle extends shapeParent {
  constructor(
      sideOne, 
      sideTwo, 
      sideThree, 
      base, 
      height
    ) {
    super()
    this.sideOne = sideOne
    this.sideTwo = sideTwo
    this.sideThree = sideThree
    this.base = base
    this.height = height
  }

  // implemen baut ngitung luas
  calArea = () => 0.5 * (this.base * this.height)

  // implementasi buat ngitung keliling
  calPerimeter = () => this.sideOne + this.sideTwo + this.sideThree
}

export default new Triangle()