var express = require('express');
var path = require('path');
var app = express();
var socket = require('socket.io');


// EXPRESS SERVER SETUP=============================================================
//set routes
app.get('/', function(req, res){res.sendFile(path.join(__dirname + '/resources/public/homepage.html'))});

// serve static and set port
app.use(express.static(__dirname + '/resources/public'));   // set static
app.set('port', (process.env.PORT || 3000));    

// listen
var server = app.listen(app.get('port') || 3000, function(){console.log('running on port ' + app.get('port'))});
//==================================================================================



// SOCKET SETUP====================================================================
var io = socket(server);
var socketHolder;


io.on('connection', function(socket){               // upon establishing a connection  

    console.log('Socket.io Connection with the client established');            // log it    
    // as soon as you establish connection, send a message to client
    socket.emit('connectionEstablished', {field1: 'connection to server established'});
    
    // upon receiving messages from the client, log it and then respond back to the client
    socket.on('msgFromClient1', function(data){                         // upon receiving a message
        console.log(data);                                              // log it
        socket.emit('msgFromServer1', {field1: 'server message no 1'}); // respond back
    });  

});
//==================================================================================






console.log('hi hi');