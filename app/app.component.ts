import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthService } from './service/auth.service';

let template="./app/app.component.html";

@Component({
  selector: 'my-app',
  templateUrl:template

})
export class AppComponent  { 
  name = 'component';

constructor(private route:ActivatedRoute, private router:Router, private authService: AuthService){}

navigate(routename:string):boolean {
  console.log(routename);
  this.router.navigate([routename]);
  return false;
}

}
