// 1. any (never use any type)
let number2: number;
number2 = 23;

// array
const friends: string[] = ['kvn', 'daniel', 'viji'];

// tuple - fixed array length
const myInfo2: [number, string] = [23, 'Daniel'];

const enum myShirtSizez {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}

const pantSize: myShirtSizez = myShirtSizez.Medium;

// 4 functions
function printMyInfo(name: string, age: number): string {
  return `My Name is ${name} and age ${age}`;
}

const myInfoObj: { id: number; age: number; name: string } = {
  id: 12,
  age: 23,
  name: 'Kvn',
};

console.log('myInfoObj', myInfoObj);
