/*
var fooPersonalized = require('./foo')
fooPersonalized()
*/
iReallyNeedThisModule = false;

if (iReallyNeedThisModule) {
  var foo = require("./foo");
  foo();
}

console.log("Final");
