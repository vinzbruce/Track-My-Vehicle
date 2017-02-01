var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
var routes = require('./routes/app-route.js');
var server = http.createServer(app);


const cors = require('cors');

app.use(cors());


/* Socket is listening under http server */
var socketio = require('socket.io').listen(server);

var routeBusInfo = require('./routes/route-bus-info');


socketio.on("connection", function(socket){

  // driver connection socket to retrieve the driver location details
    socket.on("registerbus", function(resp)
    {
      console.log(resp);
      routeBusInfo.getBusDetails(resp);

      for(var i=0; i<routeBusInfo.availableBus.length; i++)
        {
           for(var stopcount = 0; stopcount<routeBusInfo.availableBus[i].bus_stops.length; stopcount++)
           {
          socketio.sockets.in(routeBusInfo.availableBus[i].bus_stops[stopcount])
           .emit("availableBus", routeBusInfo.getListOfBus(routeBusInfo.availableBus[i].bus_stops[stopcount]));
           }
        }

    });

  // user socket to retrieve the list of available buses to be displayed in the map
    socket.on("registerstop", function(bus_stop)
    {
      console.log("registered bus name "+bus_stop);
      socket.join(bus_stop);
      routeBusInfo.addBus_stop(bus_stop);
    });

    // disconnect socket
    socket.on("disconnect", function()
    {
      socketio.emit("user disconnected");
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
