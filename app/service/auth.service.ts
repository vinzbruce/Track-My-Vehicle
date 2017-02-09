import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';


declare var Auth0Lock: any;

@Injectable()
export class AuthService {

 options:any = {
  auth: {
  redirect:false,
  responseType: 'token'
  },
  additionalSignUpFields: [{
    type: "select",
    name: "role",
    placeholder: "choose your role",
    options: [
      {value: "user", label: "User"},
      {value: "driver", label: "Driver"}
    ]
  }],
  socialButtonStyle: 'small',
  languageDictionary: { title: "Log In"},
  theme: {
   primaryColor: '#1f9e89'
  }
};

  lock = new Auth0Lock('yvCQjHbzTeUFgxfMnxZrTQ91OfFswcMC', 'vinzbruce.auth0.com',
                      this.options);

  navigate:string = '/user';

constructor(private router: Router) {


  console.log("inside auth service");
    // We'll listen for an authentication event to be raised and if successful will log the user in.
    this.lock.on('authenticated', (authResult: any) => {



      localStorage.setItem('id_token', authResult.idToken);

      this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
        if (error) {
          console.log(error);
        }

        console.log(profile);

       if(profile.hasOwnProperty('user_metadata') && profile.user_metadata.hasOwnProperty('role')) {
        if(profile.user_metadata.role == 'driver')
          {
            console.log(profile.user_metadata.role);

            this.navigate = '/driver';
          }
        }

        localStorage.setItem('profile', JSON.stringify(profile));

        this.router.navigate([this.navigate]);

      });

      this.lock.hide();

    });

   this.lock.on('authorization_error', (authResult: any) => {
      console.log(authResult);
    });

  // this.handleRedirectWithHash();
  }

  // This method will display the lock widget
  login() {
    this.lock.show();
  }

  logout() {
    // To log out, just remove the token and profile from local storage
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');

    // Send the user back to the public deals page after logout
    this.router.navigateByUrl('/home');
  }

  // Finally, this method will check to see if the user is logged in. We'll be able to tell by checking to see if they have a token and whether that token is valid or not.
  loggedIn() {
    return tokenNotExpired();
  }
}
