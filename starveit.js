function fibonacci (n) {
    if ( n < 2)
        return 1
    else
        return fibonacci( n - 2 ) + fibonacci( n - 1 )
}

console.time('timer')
setTimeout(function() {
    console.timeEnd('timer')
}, 1000)

fibonacci(44)