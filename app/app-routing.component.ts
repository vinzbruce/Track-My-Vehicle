import {NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {DriverComponent} from './client/driver.component';
import {UserComponent} from './client/user.component';
import {MapViewComponent} from './client/mapview.component';
import {HomeComponent} from './client/others/home.component';
import {ContactUsComponent} from './client/others/contact-us.component';
import { AuthGuard } from './service/auth-guard.service';

const routes : Routes = [
  { path:'driver', component: DriverComponent, canActivate:[AuthGuard] },
  { path:'user', loadChildren: 'app/client/user.module#UserModule', canActivate:[AuthGuard] },
  { path:'home', component: HomeComponent},
  { path:'contactus', component: ContactUsComponent},
  { path:'mapview', component: MapViewComponent},
  { path: '**', component: HomeComponent }
];

@NgModule ({
  imports:[RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],
  exports:[RouterModule]
})

export class AppRoutingComponent{

}
