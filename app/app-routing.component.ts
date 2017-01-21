import {NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DriverComponent} from './client/driver.component';
import {UserComponent} from './client/user.component';
import {LoginComponent} from './client/login/login.component';
import {HomeComponent} from './client/others/home.component';
import {ContactUsComponent} from './client/others/contact-us.component';

const routes : Routes = [
  { path:'driver', component: DriverComponent},
  { path:'user', component: UserComponent},
  { path:'login', component: LoginComponent},
  { path:'home', component: HomeComponent},
  { path:'contactus', component: ContactUsComponent},
  { path:'signup', component: LoginComponent},
  { path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule ({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule] 
})
 
export class AppRoutingComponent{
  
}
