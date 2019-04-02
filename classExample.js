class Shape {
    toString() {
        return `area: ${this.calculateArea()}`
    }
}


class Square extends Shape{
    constructor(side) {
        super();
        this.side = side;
    }

    calculateArea() {
        return Math.pow(this.side, 2);
    }

    toString() {
        return `side: ${this.side} ${super.toString()}`
    }

    static fromArea(area) {
        return new Square(Math.sqrt(area))
    }
}
const square = new Square(4)
console.log(square);
console.log(square.toString());
console.log(square.calculateArea());

const newSquare = Square.fromArea(16);

console.log(newSquare);
console.log(newSquare.toString());
console.log(newSquare.calculateArea());

class Circle extends Shape{
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    toString() {
        return `radius: ${this.radius} ${super.toString()}`
    }

    static fromArea(area) {
        return new Circle(Math.sqrt(area / Math.PI))
    }
}

const circle = new Circle(10);
const circle2 = Circle.fromArea(314.1592653589793)

console.log(circle);
console.log(circle.toString());

console.log(circle2);
console.log(circle2.calculateArea());

