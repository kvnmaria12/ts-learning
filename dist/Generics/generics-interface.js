"use strict";
var _a;
function fetch(url) {
    return { data: null, error: null, url: url };
}
let user = fetch('url');
console.log((_a = user.data) === null || _a === void 0 ? void 0 : _a.userName);
console.log(user.url);
//# sourceMappingURL=generics-interface.js.map