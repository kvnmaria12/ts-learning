let sales = 123456789;
let course = 'Typescript';
let is_published = true;

let level;

level = 'basic';
level = 23;
level = false;

// never ever use type any

function render(document: string) {
  console.log(document);
}

render('<h1>Hello</h1>');

// arrays

const numbers = [1, 2, 3];
const ages: number[] = [1, 2];

const infos: number[] = [];

// Tuple
const myInfo: [number, string] = [1, 'Kvn'];
myInfo.push(3); // small bug in ts
console.log(myInfo);

// enums
// PascalCase
// always use const along with enum
// so that the ts compiler generates optimized code
const enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}

const mySize: Size = Size.Medium;
console.log(mySize);

// functions
function calculateTax(income: number) {
  if (income < 50_000) return income * 1.2;
  return income * 1.3;
}

console.log(calculateTax(2000));

const number = 50_000;
console.log(number);

// with Objects
let employee: {
  readonly id: number; // readonly modifier allows only to read and not to modify
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: 'Kvn',
  retire(date: Date) {
    console.log(date);
  },
};

// employee.id = 2; // we can't modify because of readonly
