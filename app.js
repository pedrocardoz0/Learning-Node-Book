const express = require('express')
var Addition = require('./Addition')
var localTutor = require('./NodeTutorials')
var app = express()
app.set('View emngine', 'jade')
app.get('/', function(req, res){
    console.log(Addition(1, 1))
    localTutor.NodeTutorial()
    
})

var server = app.listen(3000, function(){

})