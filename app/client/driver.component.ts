import {Component} from '@angular/core';
import {GeolocationService} from '../service/geolocation.service';

var template = './app/client/driver.component.html';
var style = './app/client/user-style.css';

@Component({
  templateUrl:template,
  styleUrls:[style]
})

export class DriverComponent {

 bus_id:string = "";
 startFlag:boolean = null;
 routes:any[]=[{bus_id:"100", route_id:"1"},
               {bus_id:"101", route_id:"2"},
               {bus_id:"102", route_id:"3"}];
  options:any = {};

 constructor(private geoservice:GeolocationService){
   this.startFlag = false;
 }

registerBus():void{

  this.options = {bus_id:this.bus_id};

  this.geoservice.getLocation(this.options);

   this.startFlag = true;
}

unregisterBus():void{
  this.options = {bus_id:this.bus_id};
  this.startFlag = false;
  this.geoservice.disconnectService( this.options);
}

}
