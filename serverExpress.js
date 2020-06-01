var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.send('Hello World!')
}).listen(3000, () => console.log('Running ...'))

app.route('/Node').get(function(req, res) {
    res.send('Tutorial Node')
})

app.route('/Angular').get(function(req, res) {
    res.send('Tutorial Angular')
})