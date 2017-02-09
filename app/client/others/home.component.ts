import {Component} from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router, ActivatedRoute} from '@angular/router';

let template = './app/client/others/home.component.html';

@Component({
  templateUrl:template
})

export class HomeComponent {

 name: 'Home';

 constructor(private authService: AuthService,private route:ActivatedRoute, private router:Router){}

 login():void{

   if(this.authService.loggedIn())
     {
        this.router.navigate(['/user']);
     }
   else
     {
       this.authService.login();
     }

 }

}
