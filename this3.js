var foo = {
    bar: 123
}

function bas() {
    if (this === global)
        console.log('Called from global')

    if (this === foo)
        console.log('Called from foo')
}

bas()

foo.bas = bas
foo.bas()