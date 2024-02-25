class Squaree {
  public static side: number = 0;
  constructor(public length: number) {}

  static findPerimeter() {
    return 4 * Squaree.side;
  }

  getPerimeter() {
    Squaree.findPerimeter();
  }

  static checkThis() {
    return this == Squaree; // return true
  }
}

let squareeee1 = new Squaree(23);
let squareeee2 = new Squaree(23);

// static method can also be inherited
class Perimeter extends Squaree {
  calculatePerimeterWidth() {
    Squaree.findPerimeter();
  }
}

// accessing static method inside another static method
class User {
  static helloMail = 'hello@company.com';

  static checkValidEmail(email: string) {
    if (email) {
      console.log('email look valid');
    }
  }

  static loginHelloEmail() {
    this.checkValidEmail(this.helloMail);
  }
}

User.loginHelloEmail();
