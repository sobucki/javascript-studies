function Square(side) {
    this.side = side;
}

Square.prototype.calculateArea = function() {
    return Math.pow(this.side, 2);
}

Square.prototype.toString = function() {
    return `side: ${this.side} area: ${this.calculateArea()}`
}

Square.fromArea = function(area) {
    return new Square(Math.sqrt(area))
}

const square = new Square(4)
console.log(square);
console.log(square.toString());
console.log(square.calculateArea());

const newSquare = Square.fromArea(16);

console.log(newSquare);
console.log(newSquare.toString());
console.log(newSquare.calculateArea());