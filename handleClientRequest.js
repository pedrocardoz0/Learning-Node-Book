var myDB = {
    users: {
        one:{
                name: 'Pedro',
                age: 19,
            },
        two:{
            name: 'Carlos',
            age: 22,
        },
        three:{
            name: 'Roberto',
            age: 23,
        },
    }
}


function makeDbCall (request) {
    console.log(request)
    return console.log(request.users.one)
}

function handleClientRequest (request) {
    makeDbCall( request )
}

handleClientRequest(myDB)

//Simulate DB request
console.log('\n\n')
console.log('Simulate DB req')
var myDBusers = {
    users: {
        1: {
            name: 'Alhes',
            age: 22,
            occupation: 'Dev'
        },
        2: {
            name: 'Thales',
            age: 25,
            occupation: 'Dev'
        },
        3: {
            name: 'Carlos',
            age: 23,
            occupation: 'Dev'
        },
    }
}

function getUser(id) {
    return myDBusers.users[id]
}

function postUser(id) {
    myDBusers.users[4] = id
    return myDBusers.users[4]
}

function reqHandller(callback, id) {
    return callback(id)
}

console.log(reqHandller(getUser, 2))
console.log(reqHandller(postUser, { name: 'Pedro', age: 19, occupation: 'Student' }))
console.log(myDBusers)