import {Component, OnInit} from '@angular/core';
import {RouteService} from '../service/route.service';
import {LatLng} from '../service/latlng';
import {BusDuration} from '../service/bus-duration';
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
public stops:string[] =[];
public busAvailable:boolean=false;
public buses:BusDuration[] = [];
public selectedBus:any ="";

  lat: number = 0;
  lng: number = 0;

 constructor(private nroute:RouteService, private router:Router,private route:ActivatedRoute){
    this.socket = io(this.host); 
    this.nroute.getRoute()
        .subscribe( (res:any) => this.stops = res.stops);
 }

search():void{
  this.socket.emit("registerstop", this.boardingstop);

  let  destination:LatLng = new LatLng(12.964851,80.256690);
  let origin:LatLng = new LatLng(12.987651,80.256800);

  this.nroute.getBusDetails(origin.getlatlng(),destination.getlatlng())
        .subscribe((res:any) => {console.log(res); this.extractValues(JSON.parse(res));});

  this.busAvailable = true;

}

extractValues(res:any):void{

   for(let places of res){
      for(let element of places.elements)
        {
          let duration:BusDuration = new BusDuration( element.duration.text, this.boardingstop)
              this.buses.push(duration);
        }

    }

}

openMap():void{

 this.router.navigate(['/mapview',{lat:12.987651, lng:80.256800, bus_id:"100" }], {relativeTo:this.route});
  //this.router.navigate(['/mapview'],{ relativeTo: this.route });
}

typeaheadOnSelect(e:any):void {
  console.log(e);

}



}
