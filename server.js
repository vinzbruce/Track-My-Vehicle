var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
var routes = require('./routes/app-route.js');
var server = http.createServer(app);

/* Socket is listening under http server */
var socketio = require('socket.io').listen(server);

//Todo - Socket Logic needs to be written
socketio.on("connection", function(socket){  
  socket.on("user", function(data){
    console.log(data);
  });  
});

/* static libraries has to be loaded in express */
app.use('/app/',express.static(__dirname+ '/app/'));
app.use('/node_modules/@angular', express.static(__dirname+ '/node_modules/@angular'));
app.use('/node_modules/rxjs', express.static(__dirname+ '/node_modules/rxjs'));
app.use('/node_modules/angular-in-memory-web-api', express.static(__dirname+ '/node_modules/angular-in-memory-web-api'));
app.use('/node', express.static(__dirname+'/node_modules/'));
app.use('/node_modules/', express.static(__dirname+'/node_modules/'));
app.use('/scripts', express.static(__dirname+'/config/'));

/* all routing logic is available in app-route component */
app.use('/',routes);

var port = process.env.PORT || 3000;

server.listen(port, function(){
  console.log("Server is listening");  
});
