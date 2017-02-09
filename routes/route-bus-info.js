
// driver Service
module.exports =
  {
    "availableBus":[],
    "bus_stops":[],
    "isBusAvailable":false,
    "bus": require('../config/route/bus.json'),
    "routes": require('../config/route/route.json'),
  // router to driver service
  //router.post("/enable", (req,res) =>
    getBusDetails : function (res)
    {
      if(!this.isBusavailable(res))
      {
      for(var i = 0;i<this.bus.length;i++)
        {
          if(res.bus_id == this.bus[i].bus_id)
          {
            this.isBusAvailable = true;
            var route_id = this.bus[i].route_id;
            for(var count = 0;count<this.routes.length;count++)
            {
              if(route_id == this.routes[count].route_id)
              {
                var createNewbus = {
                  "bus_id":res.bus_id,
                  "route_id": route_id,
                  "longitude": res.longitude,
                  "latitude":res.latitude,
                  "bus_stops":this.routes[count].bus_stops
                };
                this.availableBus.push(createNewbus);
             }
            }
          }
        }
      }
  },
  // user service to request the list of buses to be displayed in the map.
  //router.post("/requestBus", (req,res) =>
  getListOfBus : function (bus_stop)
  {
    var requested_bus = [];
    for (var count = 0; count<this.availableBus.length;count++)
    {
      var bus_stops = this.availableBus[count].bus_stops;
      for(var stopcount = 0; stopcount<bus_stops.length;stopcount++)
      {
        if(bus_stop == bus_stops[stopcount])
        {
          requested_bus.push(this.availableBus[count]);
        }
      }
    }
   console.log("sokcet emiting for bus_Stop "+ bus_stop + " and list of bus: "+ requested_bus.length);
  return requested_bus;
},

  // latitude & longitude of the driver will over-ride by the above loop and if it over-rides the below logic will execute
  isBusavailable : function (bus)
  {
    for (var count = 0; count<this.availableBus.length;count++)
    {
      if(bus.bus_id == this.availableBus[count].bus_id)
      {
        this.availableBus[count].latitude = bus.latitude;
        this.availableBus[count].longitude = bus.longitude;
        return true;
      }
    }
    return false;
  },

  addBus_stop: function(bus_stop)
  {
    if(bus_stop != null && !this.isDuplicateBusStop(bus_stop))
    {
      this.bus_stops.push(bus_stop);
    }
    console.log("list of buses");
    console.log(this.bus_stops);
  },

  isDuplicateBusStop: function(bus_stop)
  {
    for (var count = 0; count<this.bus_stops.length;count++)
    {
      if(bus_stop == this.bus_stops[count])
      {
        return true;
      }
    }
    return false;
  },
  deleteBus:function(bus_id){
    var slice = -1;

    console.log("Before removing bus"+ this.availableBus.length);

    for (var count = 0; count<this.availableBus.length;count++)
    {
      if(bus_id == this.availableBus[count].bus_id)
      {
        slice = count;
        break;
      }
    }
    this.availableBus.slice(slice);
     console.log("After removing bus"+ this.availableBus.length);
  }


}
