"use strict";
var _a;
let employee2 = {
    id: 1,
    name: 'Kvn',
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight == 'number')
        return weight * 1.2;
    else
        return parseInt(weight) * 2.2;
}
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 50;
let metric = 'cm';
function getCustomer(id) {
    return id == 0 ? null : { birthDay: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthDay) === null || _a === void 0 ? void 0 : _a.getFullYear());
const levels = null;
console.log(levels === null || levels === void 0 ? void 0 : levels[0]);
let log = null;
log === null || log === void 0 ? void 0 : log('a');
let speed = 0;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
console.log(ride === null || ride === void 0 ? void 0 : ride.speed);
const phone = document.getElementById('phone');
const phone2 = document.getElementById('phone');
function processEvents() {
    while (true) { }
}
processEvents();
//# sourceMappingURL=index.js.map