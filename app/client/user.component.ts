import {Component, OnInit} from '@angular/core';
import {RouteService} from '../service/route.service';
import {LatLng} from '../service/latlng';
import {BusInfo} from '../service/businfo';
import {BusPosition} from '../service/bus-position';
import {Router, ActivatedRoute} from '@angular/router';


var template = './app/client/user.component.html';
var style = './app/client/user-style.css';


@Component({
  templateUrl:template,
  styleUrls: [style]
})

export class UserComponent{



 name:string = 'Its user component';
 socket:any = null;
 host = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port;

public boardingstop:string = "";
public destination:string = "";
public stops:any[] =[];
public destinations = {stop_name:"Siruseri", lat:12.831225, lng:80.219626}
public busAvailable:boolean=false;
public buses:BusPosition[] = [];
public selectedBus:BusPosition =null;
public showNoBusMsg:boolean = false;


 constructor(private nroute:RouteService, private router:Router,private route:ActivatedRoute){
    this.socket = io(this.host);
    this.nroute.getRoute()
        .subscribe( (res:any) => this.stops = res.stops);

 }

search():void{

  //this.socket.emit("registerstop", this.boardingstop);

  this.nroute.getAvailableBus(this.boardingstop)
      .subscribe( (availableBuses:any) => {
     console.log("availableBuses");
    console.log(availableBuses);
   for( let availableBus of availableBuses){
          let bus:BusInfo = new BusInfo();
          bus.bus_id = availableBus.bus_id;
          bus.latlng = new LatLng(availableBus.latitude, availableBus.longitude);
          this.identifyBusCrossedBoardingStop(bus);
      }

      if(availableBuses.length == 0)
      {
        this.showNoBusMsg = true;
      }

  });

}

identifyBusCrossedBoardingStop(bus:BusInfo):void {

  let origins:string = bus.latlng.getlatlng()+"|"+this.getselectedStopPostition();
  let destination:LatLng = new LatLng(this.destinations.lat, this.destinations.lng) ;

   this.nroute.calculateDistance(origins,destination)
        .subscribe((res:any) => {

     console.log("calculateDistance");
     console.log(res);

       if(this.calculateDistance(JSON.parse(res)))
         {
           this.nroute.getBusDetails(bus.latlng.getlatlng(), this.getselectedStopPostition())
          .subscribe((res:any) => { this.extractValues(JSON.parse(res), bus);});

           console.log("true");
         }
       else
         {
            if(this.busAvailable){
              this.showNoBusMsg = false;
            }
           else{
              this.showNoBusMsg = true;
           }
         }

      });
}

calculateDistance(res:any):boolean{

       let bus_dis:any = res[0].elements[0].distance.text.replace("km","");
       let stop_dis:any =  res[1].elements[0].distance.text.replace("km", "");

        console.log(bus_dis.trim() + ", "+stop_dis.trim());
        console.log(+bus_dis.trim()>+stop_dis.trim());

        if(+bus_dis.trim()>+stop_dis.trim()){
          return true;
        }
  return false;
}

extractValues(res:any, bus:BusInfo):void {

   for(let places of res){

      for(let element of places.elements)
        {
          let duration:BusPosition = new BusPosition( element.duration.text, this.boardingstop);
              duration.bus_id = bus.bus_id;
              duration.latlng =  bus.latlng;

            if(!this.duplicateBus(bus.bus_id))
              {
                this.buses.push(duration);
              }
          this.busAvailable = true;

        }
    }

}

duplicateBus(bus_id:any):boolean{

  for(let bus of this.buses){
      if(bus_id == bus.bus_id)
        {
          return true;
        }
    }
  return false;
}

openMap(selectedBus:BusPosition):void{
  console.log(selectedBus);
 this.router.navigate(['/mapview',{lat:selectedBus.latlng.lat, lng:selectedBus.latlng.lng,
                                   bus_id:selectedBus.bus_id, stop:this.boardingstop}], {relativeTo:this.route});
}

getselectedStopPostition():string{

   for(let stop of this.stops)
        {
          if(this.boardingstop == stop.stop_name){
            let  stopLatLng:LatLng = new LatLng(stop.latitude,stop.longitude);
              return stopLatLng.getlatlng();
          }
        }
  return "";

}


}
