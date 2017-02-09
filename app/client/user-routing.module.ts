import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }                from '../service/auth-guard.service';
import {UserComponent} from './user.component';


const userRoutes : Routes = [
  { path: '',component: UserComponent, canActivate: [AuthGuard]
  }]

@NgModule({

imports: [RouterModule.forChild(userRoutes)],
exports:[RouterModule]
})

export class UserRoutingComponent{}
