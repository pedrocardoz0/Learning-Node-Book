function foo () {
    console.log('Is this called from globals?', this === global)
}

foo()