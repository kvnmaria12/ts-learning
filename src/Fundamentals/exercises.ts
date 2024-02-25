// For each of these values,
//what type will the TypeScript compiler infer?

// Exercise 1
let a = 100; // number
let b = 'Coffee'; // string
let c = [true, false, false]; // boolean[]
let d = { age: 23 };
let e = [3];
let f;
let g = [];

// Exercise 2
let song: {
  title: string;
  releaseYear?: number;
} = { title: 'My Song' };

// Ans :
//Property releaseYear is not given when initializing the object

// Exercise 3
let prices = [100, 200, 300];
// prices[0] = '100'; //
// Ans :
//We’ve declared a number[] but we’re trying to store a string in this array.
