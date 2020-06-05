try {
    setTimeout(function () {
        console.log('About to throw an error')
        throw new Error('Error Thrown')
    }, 1000)
}
catch (e) {
    console.log('I will never execute !')
}

console.log("I'm outside the try block")