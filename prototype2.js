function foo() { }
foo.prototype.bar = 123

var bas = new foo ()

console.log(bas.__proto__ === foo.prototype)
console.log(bas.bar)