"use strict";

class Square {
  perimeter(side) {
    console.log(side * 4);
  }
  area(side) {
    console.log(Math.pow(side, 2));
  }
}
const square = new Square();
square.perimeter(9);
square.area(9);
