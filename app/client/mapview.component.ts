import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';


var template = './app/client/mapview.component.html';
var style = './app/client/user-style.css';

declare var google: any;

@Component({
  templateUrl: template,
  styleUrls:[style]
})

export class MapViewComponent implements OnInit
{

lat: number = 12.987651;
lng: number = 80.256800;
bus_id: string = "";
stop_name:string = "";


socket:any = null;
host = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port;

ngOnInit() {
    this.route.params.subscribe((params:Params) => {
    this.lat = +params['lat'];
    this.lng = +params['lng'];
    this.bus_id = params['bus_id;'];
    this.stop_name = params['stop'];

       this.socket.emit("registerstop", this.stop_name);
    });
}

constructor(private route:ActivatedRoute, private router:Router){
  this.socket = io(this.host);


   this.socket.on("availableBus", function(availableBuses:any){
   console.log(availableBuses);

    for(let bus of availableBuses)
      {
        if(this.bus_id == bus.bus_id)
          {
            this.lat = bus.latitude;
            this.lng = bus.longitude;
          }
      }

 });
}


reset():void{

  this.router.navigate(['/user']);

}




}
