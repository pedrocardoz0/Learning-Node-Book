var t1 = new Date().getTime();
var foo1 = require("../base/foo");
console.log(new Date().getTime() - t1);

var t2 = new Date().getTime();
var foo2 = require("../base/foo");
console.log(new Date().getTime() - t2);
