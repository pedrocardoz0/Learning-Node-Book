function longRunningOperation(callback) {
    setTimeout(callback, 3000)
}

function webRequest(request) {
    console.log('Starting a long operation from: ', request.id)
    longRunningOperation(function(){
        console.log('Ending a long operation from request: ', request.id)
    })
}

webRequest({ id: 1 })
webRequest({ id: 2 })