import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { AppRoutingComponent }  from './app-routing.component';
import {DriverComponent} from './client/driver.component';
import {UserComponent} from './client/user.component';
import {MapViewComponent} from './client/mapview.component';
import {HomeComponent} from './client/others/home.component';
import {ContactUsComponent} from './client/others/contact-us.component';
import {AuthService} from './service/auth.service';
import {AuthGuard} from './service/auth-guard.service';
import { AUTH_PROVIDERS }      from 'angular2-jwt';
import {RouteService} from './service/route.service';
import {GeolocationService} from './service/geolocation.service';
import { TypeaheadModule,ModalModule } from 'ng2-bootstrap';
import { HttpModule} from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, AppRoutingComponent,
                 TypeaheadModule.forRoot(),AgmCoreModule.forRoot({apiKey: 'AIzaSyDKBkgQKUM4iwiL2oGFhxdT8rLjMYZN-EM'}) ],
  declarations: [ AppComponent,UserComponent,DriverComponent,HomeComponent
                ,ContactUsComponent,MapViewComponent],
  providers:  [AuthService, AuthGuard,AUTH_PROVIDERS,RouteService,GeolocationService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
