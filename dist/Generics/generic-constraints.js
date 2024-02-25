"use strict";
function echo(value) {
    return value;
}
echo('Kvn');
class PersonE {
    constructor(name) {
        this.name = name;
    }
}
class CustomerE extends PersonE {
}
function echo3(value) {
    return value;
}
echo3(new PersonE('daniel'));
echo3(new CustomerE('Viji'));
function echo2(value) {
    return value;
}
echo2({ id: 1, name: 'kevin', isEchoSound: false });
//# sourceMappingURL=generic-constraints.js.map