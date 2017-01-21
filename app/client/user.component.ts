import {Component} from '@angular/core';


var template = './app/client/user.component.html';

@Component({  
  templateUrl:template 
})

export class UserComponent {
  
 name:string = 'Its user component';
 socket:any = null;
  host = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port;

 
 constructor(){
   console.log("url "+this.host);
   
   this.socket = io(this.host);
  // this.socket = io();
   
   this.socket.emit("user", "angular component is emiting");
 }
  
}

