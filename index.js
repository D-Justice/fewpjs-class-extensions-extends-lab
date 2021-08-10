class Polygon {
    constructor(sides) {
        this.sides = sides
    }
    get countSides() {
        return this.sides.length
    }
    get perimeter() {
        return this.sides.reduce((elem, total) => total += elem )
    }
}

class Triangle extends Polygon {
    get isValid() {
        let side1 = this.sides[0];
        let side2 = this.sides[1]
        let side3 = this.sides[2]

        return ((side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2))
    }
}
class Square extends Polygon {
    get isValid() {
        if (this.sides.length !== 4) return;
        let total = this.sides.reduce((elem, total) => total += elem)
        return ((total / 4) === this.sides[0]) 
    }
    get area() {
        return (this.sides[0] * this.sides[3])
    }
}