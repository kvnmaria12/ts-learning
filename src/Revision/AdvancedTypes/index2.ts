//with Type Alias
type myInfoObjType = {
  id: number;
  age: number;
  name: string;
};

const myInfoObjT: myInfoObjType = { id: 2, age: 23, name: 'daniel' };

// Union Types
// function kgToLbs(weight: number | string): number {
//   if (typeof weight == 'number') {
//     return weight * 2;
//   }
//   return parseInt(weight) * 2;
// }

// Literal Types
type myAge = 25 | 45;
let age: myAge = 25;

//nulling coleasing operator
let bikeSpeed: number | null = null;
let ride3 = {
  speed: speed ?? 30,
};

// type assertion
const input = document.getElementById('id') as HTMLInputElement;
// or
const input2 = <HTMLInputElement>document.getElementById('id');
