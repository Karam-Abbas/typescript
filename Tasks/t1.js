"use strict";
var a = 123;
console.log(a);
var codes;
(function (codes) {
    codes[codes["NotFound"] = 404] = "NotFound";
    codes[codes["Error"] = 500] = "Error";
})(codes || (codes = {}));
console.log(codes.NotFound);
