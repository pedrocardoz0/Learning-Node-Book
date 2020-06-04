var foo = 123
console.log(foo)

console.log(true && true)
console.log(true && false)
console.log(true || false)
console.log(true || true)
console.log(!true)
console.log(!false)

//Array

var foo = []
foo.push(1)
console.log(foo)

foo.unshift(2)
console.log(foo)

console.log(foo[0])

//Object

var foo = {
    bar: 123,
    bas: {
        bas1: 'Some String',
        bas2: 324
    }
}

var foo2 = {
    bar: 123,
    bas: [{
        qux: 1
    },
    {
        qux: 2,
    },
    {
        qux: 3
    }
]
}

function fooFunc() {
    return 123
}
console.log(foo2.bas[0])
console.log(fooFunc())

//High Order Functions

setTimeout(function() {
    console.log('2 Seconds')
}, 2000)

//Clouser

function sayHi(arg) {
    var varibleHi = arg

    function say () {
        console.log('Hi ' + arg)
    }

    say()
}

sayHi('Pedro')

function sayHi2(arg) {
    var varibleHi = arg
    return function say() {
        console.log('Hello ' + varibleHi)
    }
}

var innerFuntion = sayHi2('Pedro 2')
innerFuntion()

ob1 = {
    here: {
        one: 1
    }
}

ob2 = 2
ob1.here.two = ob2
console.log(ob1)