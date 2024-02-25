class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  logWalk() {
    this.walk();
  }

  // can be accessible only inside the Person class
  protected walk(): void {
    console.log('Walking');
  }
}

const person = new Person('Ave', 'Maria');
person.logWalk();

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest(): void {
    this.walk();
    console.log('Taking Test');
  }
}

const student = new Student(1, 'Kvn', 'Maria');
console.log(student.fullName);
// student.walk();
student.takeTest();

// Method Overriding
class Teacher extends Person {
  override get fullName(): string {
    return 'Professor ' + super.fullName;
  }
}

class Principal extends Person {
  override get fullName(): string {
    return 'Principal ' + super.fullName;
  }
}

let teacher = new Teacher('Kvn', 'Maria');
console.log(teacher.fullName);

// Principal Object
const principal = new Principal('Kvn', 'Maria');
console.log(principal.fullName);

// Polymorphism
function printName(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

printName([new Student(1, 'John', 'Smith'), new Teacher('Mosh', 'Hamedani')]);
