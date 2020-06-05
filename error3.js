setTimeout(() => {
    try {
        console.log('About to throw an error')
        throw new Error('Error thrown')
    }
    catch (e) {
        console.log('Error caught !')
    }
}, 1000);

console.log('I will be executed firstly')