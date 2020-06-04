function foo () { }
foo.prototype.bar = 123

var bas = new foo ()
var qux = new foo ()

bas.bar = 456

console.log(bas.bar)
console.log(qux.bar)