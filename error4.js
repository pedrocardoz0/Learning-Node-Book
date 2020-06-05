function getConnection (callback) {
    var connection
    try {
        throw new Error('Connection Faild')

        callback(null, connection)
    }
    catch (e) {
        callback(e, null)
    }
}

getConnection(function( error, connection ) {
    if(error) {
        console.log('Error:', error.message)
    } else {
        console.log('Connection Succeded:', connection)
    }
})