"use strict";

class Square {
  constructor(side) {
    this.side = side;
  }
  perimeter() {
    return this.side * 4;
  }
  area() {
    return Math.pow(this.side, 2);
  }
}

const oneSquare = new Square(1);
console.log(oneSquare.perimeter());
console.log(oneSquare.area());

const secondSquare = new Square(3);
console.log(secondSquare.perimeter());
console.log(secondSquare.area());

const thirdSquare = new Square(7);
console.log(thirdSquare.perimeter());
console.log(thirdSquare.area());
