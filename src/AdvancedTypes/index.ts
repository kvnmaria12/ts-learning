// 1. type Alias
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee2: Employee = {
  id: 1,
  name: 'Kvn',
  retire: (date: Date) => {
    console.log(date);
  },
};

// 2. Union Types
function kgToLbs(weight: number | string): number {
  if (typeof weight == 'number') return weight * 1.2;
  else return parseInt(weight) * 2.2;
}

// 3. Intersection
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

// using an intersection type we can combine them
// into a new type

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//4. Literal

type Quantity = 50 | 100;
let quantity: Quantity = 50;

type Metric = 'cm' | 'inch';
let metric: Metric = 'cm';

// 5. Optional Chaining

type Customer = {
  birthDay: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id == 0 ? null : { birthDay: new Date() };
}

let customer = getCustomer(1);
// optional property access operator(?.)
console.log(customer?.birthDay?.getFullYear());

// optional element access operator(mainly used with arrays)
type Levels = number[] | null;

const levels: Levels = null;
console.log(levels?.[0]);

// optional call
let log: any = null;
log?.('a');

// 6. Nullish Coalescing Operator

type Speed = number | null | string | undefined;

let speed: Speed = 0;
let ride = {
  // Falsy (undefined, null, '', false,0)
  // Nullish Coalescing Operator
  speed: speed ?? 30,
};

console.log(ride?.speed);

// 7. TypeAssertion
const phone = document.getElementById('phone') as HTMLInputElement;
// or another easy syntax
const phone2 = <HTMLInputElement>document.getElementById('phone');

// 8. Unknow Type
// function render2(document: unknown) {
//   document.move();
//   document.fly();
//   document.shrink();
// }

// 9. never
function processEvents(): never {
  while (true) {}
}

processEvents();
// console.log('Hello'); // unreachable code
