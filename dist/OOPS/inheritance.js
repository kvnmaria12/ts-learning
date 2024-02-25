"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    logWalk() {
        this.walk();
    }
    walk() {
        console.log('Walking');
    }
}
const person = new Person('Ave', 'Maria');
person.logWalk();
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        this.walk();
        console.log('Taking Test');
    }
}
const student = new Student(1, 'Kvn', 'Maria');
console.log(student.fullName);
student.takeTest();
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
class Principal extends Person {
    get fullName() {
        return 'Principal ' + super.fullName;
    }
}
let teacher = new Teacher('Kvn', 'Maria');
console.log(teacher.fullName);
const principal = new Principal('Kvn', 'Maria');
console.log(principal.fullName);
function printName(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
printName([new Student(1, 'John', 'Smith'), new Teacher('Mosh', 'Hamedani')]);
//# sourceMappingURL=inheritance.js.map