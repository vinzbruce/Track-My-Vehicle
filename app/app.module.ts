import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { AppRoutingComponent }  from './app-routing.component';
import {DriverComponent} from './client/driver.component';
import {UserComponent} from './client/user.component';
import {LoginComponent} from './client/login/login.component';
import {HomeComponent} from './client/others/home.component';
import {ContactUsComponent} from './client/others/contact-us.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule,AppRoutingComponent],
  declarations: [ AppComponent,UserComponent,DriverComponent,LoginComponent,HomeComponent
                ,ContactUsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
