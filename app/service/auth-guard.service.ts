import { Injectable } from '@angular/core';
import { Router,Route } from '@angular/router';
import { CanActivate,CanLoad } from '@angular/router';
// Import our authentication service
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    // If user is not logged in we'll send them to the homepage
    return this.checkLogin();
  }

  canLoad(route: Route): boolean {

    return this.checkLogin();
  }

  checkLogin():boolean {
      if (!this.auth.loggedIn()) {
          this.router.navigate(['/home']);
          return false;
       }
    return true;
  }


}
