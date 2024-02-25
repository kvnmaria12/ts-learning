"use strict";
class Square {
    constructor(side) {
        this.side = side;
    }
    findPerimeter() {
        return 4 * this.side * Square.area;
    }
    printPerimeter() {
        this.findPerimeter();
    }
    static comparePerimeter(square1, square2) {
        if (square1.side > square2.side) {
            console.log('First square has more perimeter');
        }
        else if (square1.side < square2.side) {
            console.log('Second square has more perimeter');
        }
        else {
            console.log('Both have same perimeter');
        }
    }
    static checkThis() {
        return this == Square;
    }
}
Square.area = 4;
const square1 = new Square(23);
const square2 = new Square(12);
square1.findPerimeter();
square2.findPerimeter();
Square.comparePerimeter(square1, square2);
console.log(Square.checkThis());
//# sourceMappingURL=static.js.map