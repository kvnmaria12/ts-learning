"use strict";
let sales = 123456789;
let course = 'Typescript';
let is_published = true;
let level;
level = 'basic';
level = 23;
level = false;
function render(document) {
    console.log(document);
}
render('<h1>Hello</h1>');
const numbers = [1, 2, 3];
const ages = [1, 2];
const infos = [];
const myInfo = [1, 'Kvn'];
myInfo.push(3);
console.log(myInfo);
const mySize = 2;
console.log(mySize);
function calculateTax(income) {
    if (income < 50000)
        return income * 1.2;
    return income * 1.3;
}
console.log(calculateTax(2000));
const number = 50000;
console.log(number);
let employee = {
    id: 1,
    name: 'Kvn',
    retire(date) {
        console.log(date);
    },
};
//# sourceMappingURL=index.js.map