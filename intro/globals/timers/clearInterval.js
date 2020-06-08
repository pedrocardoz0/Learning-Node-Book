var count = 0
var intervalObject = setInterval(function () {
    count++
    console.log(count, 'second passed')

    if (count == 5) {
        console.log('Exiting')
        clearInterval(intervalObject)
    }
}, 1000)