abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

// we cannot create an instance of an abstract class
// const shape = new Shape('red');
// shape.render();

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log('Rendering a Circle');
  }
}
