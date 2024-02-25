"use strict";
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    get objects() {
        return this._objects;
    }
}
let store = new Store();
store.add({ name: 'Yuves Laurent', price: 300 });
console.log(store.objects);
//# sourceMappingURL=extend-generic-class.js.map