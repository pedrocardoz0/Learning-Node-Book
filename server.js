var http = require('http')
var server = http.createServer((function(req, res){
    res.writeHead(200,
        {"Content-Type" : "text/plain"})
    res.end("hello world")
})).listen(7000)

var request = require('request')
request("https://www.google.com", function(error, response,body) {
    console.log(body)
})