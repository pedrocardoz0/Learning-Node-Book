function foo () { }
foo.prototype.bar = 123

var bas = new foo()
var qux = new foo()

console.log(bas.bar)
console.log(qux.bar)

foo.prototype.bar = 456

console.log(bas.bar)
console.log(qux.bar)