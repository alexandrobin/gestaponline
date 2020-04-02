// To launch : node -r esm server.js

// Dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var mongoose = require('mongoose');
var cors = require('cors')
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');



//importing models
import Session from './models/session'
import User from './models/user'


// setting up the server & DB
var app = express();
var server = http.Server(app);
var io = socketIO(server);
var mongoDB = 'mongodb://127.0.0.1/gestaponline'
mongoose.connect(mongoDB,{useNewUrlParser:true})
var db = mongoose.connection

app.set('port', 5000);
app.use(cors())
app.use('/static', express.static(__dirname + '/static'));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function(req,res,next) {
    req.io=io;
    next()
})

io.on('connection', function(socket) {

});

// Routing
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '/static/index.html'));
});

app.get('/user/:_id', (req,res)=>{
    
    setInterval(function() {
        io.sockets.emit('message', 'hi!');
    }, 1000);
    res.sendFile(path.join(__dirname,'/static/party.html'))
})

app.get('/join/:_id', (req,res)=>{
    
    setInterval(function() {
        io.sockets.emit('message', 'hi!');
    }, 1000);
    res.sendFile(path.join(__dirname,'/static/join.html'))
})




//API routes


app.post('/createsession', (req,res) => {
    console.log(req.body)
    let {pseudo,name} = req.body
    let adminID, sessionID
    User.create({pseudo:pseudo},(err,small) => {
        if (err) return console.error(err)
        adminID = small._id
        Session.create({name:name,isAdmin:adminID},(err,small) =>{
            if (err) return console.error(err)
            sessionID = small._id 
            User.findByIdAndUpdate(adminID,{session:sessionID}, (err, small) => {
                if (err) return console.error(err)
                res.json(small)
                // res.redirect(`/user/${adminID}`);
            })
            
        })  
    })
    
})

app.post('/joinsession', (req,res) => {
    let {pseudo, session} = req.body
    User.create({pseudo:pseudo,session:session},(err,small) => {
        if (err) return (handleError(err))
        res.redirect(`/user/${small._id}`);  
    })
    
})

app.get('/api/user/:_id', (req,res) => {
    console.log('hello')
    User.findById(req.params._id, (err,user) => {
        console.log(user)
        res.json(user)
    })
})

app.get('/api/session/:_id', (req,res) => {
    Session.findById(req.params._id,function(err, session){
        console.log(session)
        res.json(session)
    })
})

app.get('/api/getusers/:_id', (req,res) => {
    User.find({session:req.params._id},function(err, users){
        console.log(users)
        res.json(users)
    })
})



// Starts the server.
server.listen(5000, function() {
    console.log('Starting server on port 5000');
});

// Add the WebSocket handlers
io.on('connection', function(socket) {

});