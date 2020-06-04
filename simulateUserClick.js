function loginRunningOperation(callback) {
    setTimeout(callback, 3000)
}

function userClicked() {
    console.log('Start a long operation')
    loginRunningOperation(function() {
        console.log('End of those 3 seconds')
    })
}

userClicked()