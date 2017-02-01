import {NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DriverComponent} from './client/driver.component';
import {UserComponent} from './client/user.component';
import {MapViewComponent} from './client/mapview.component';
import {HomeComponent} from './client/others/home.component';
import {ContactUsComponent} from './client/others/contact-us.component';
import { AuthGuard } from './service/auth-guard.service';

const routes : Routes = [
  { path:'driver', component: DriverComponent, canActivate: [AuthGuard] },
  { path:'user', component: UserComponent, canActivate: [AuthGuard] },
  { path:'home', component: HomeComponent},
  { path:'contactus', component: ContactUsComponent},
  { path:'mapview', component: MapViewComponent}
];

@NgModule ({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingComponent{

}
