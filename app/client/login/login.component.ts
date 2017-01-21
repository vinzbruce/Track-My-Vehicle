import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

let template = './app/client/login/login.component.html';

@Component({
  templateUrl:template
})


export class LoginComponent {
  
  username:string;

  password:string;

constructor( private route: ActivatedRoute,
  private router: Router){}

onsubmit():void {
   
  if(this.username == "user"){
    this.router.navigate(['/user']);
  }
  if(this.username == "driver"){
      this.router.navigate(['/driver']);
  }
  
}
  
}
