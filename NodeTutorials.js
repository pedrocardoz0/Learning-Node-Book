var Tutor = require('./Tutorial.js')

exports.NodeTutorial = function () {
    console.log("Node Tutorial")

    var PTutor = Tutor
    console.log(PTutor.tutorial())
    
}