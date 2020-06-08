import {a, b} from '../exports/foo1.js'

var a1 = a
/*
a()
b()
*/

var a1 = function() {
    console.log('testing...')
}

export default a1