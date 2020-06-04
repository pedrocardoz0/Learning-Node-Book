function foo() {
    this.foo = 123
    console.log('Is this global ?', this == global)
}

foo()
console.log(global.foo)

var newFoo =  new foo()
console.log(newFoo.foo)