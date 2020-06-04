var foo = {
    bar: 123,
    bas: function() {
        console.log('Inside this.bar is: ', this.bar)
    }
}

console.log('Foo.bar is: ', foo.bar)
foo.bas()