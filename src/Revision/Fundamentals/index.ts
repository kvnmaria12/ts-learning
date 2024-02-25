// any
let myAge: number;

let frnds: number[] = [];

frnds.push(23, 43, 23, 54);
console.log(frnds);

// tuple
const myBio: [string, number] = ['Kvn', 23];

// enum
// pascal Case
// always use const with enum so that
// compiler gives you an optimized code
const enum ShirtSize {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
  XtraLarge = 'xl',
}

const size: ShirtSize = ShirtSize.Medium;

// function
function calculateAge(
  birthYear: number,
  currentYear: number,
  age?: number
): number {
  console.log(age);
  return currentYear - birthYear;
}

console.log(calculateAge(1999, 2023));

// Object

const myDetails: { id: number; age: number; name: string; dob?: number } = {
  id: 1,
  age: 23,
  name: 'Kvn',
};

console.log(myDetails);
