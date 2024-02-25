interface ISquare {
  side: number;
}

class Square {
  public static area: number = 4;
  constructor(public side: number) {}

  findPerimeter() {
    return 4 * this.side * Square.area;
  }

  printPerimeter() {
    this.findPerimeter();
  }

  static comparePerimeter(square1: ISquare, square2: ISquare) {
    if (square1.side > square2.side) {
      console.log('First square has more perimeter');
    } else if (square1.side < square2.side) {
      console.log('Second square has more perimeter');
    } else {
      console.log('Both have same perimeter');
    }
  }

  static checkThis() {
    return this == Square;
  }
}

const square1 = new Square(23);
const square2 = new Square(12);
square1.findPerimeter();
square2.findPerimeter();
Square.comparePerimeter(square1, square2);
console.log(Square.checkThis());
