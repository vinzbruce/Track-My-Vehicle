import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { AppRoutingComponent }  from './app-routing.component';
import {DriverComponent} from './client/driver.component';
import {HomeComponent} from './client/others/home.component';
import {ContactUsComponent} from './client/others/contact-us.component';
import {AuthService} from './service/auth.service';
import {AuthGuard} from './service/auth-guard.service';
import {GeolocationService} from './service/geolocation.service';
import { AUTH_PROVIDERS }      from 'angular2-jwt';
import { TypeaheadModule} from 'ng2-bootstrap';
import {MapViewComponent} from './client/mapview.component';
import { AgmCoreModule } from 'angular2-google-maps/core';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingComponent,TypeaheadModule.forRoot(),
                AgmCoreModule.forRoot({apiKey: 'AIzaSyDKBkgQKUM4iwiL2oGFhxdT8rLjMYZN-EM'})],
  declarations: [ AppComponent,HomeComponent,ContactUsComponent,DriverComponent, MapViewComponent],
  providers:    [AuthService, AuthGuard,AUTH_PROVIDERS,GeolocationService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
