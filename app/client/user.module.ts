import {NgModule} from '@angular/core';
import {UserComponent} from './user.component';

import {RouteService} from '../service/route.service';
import { HttpModule} from '@angular/http';
import { FormsModule }   from '@angular/forms';
import {UserRoutingComponent} from './user-routing.module';
import { TypeaheadModule} from 'ng2-bootstrap';
import { CommonModule }   from '@angular/common';



@NgModule({

imports: [HttpModule, CommonModule, UserRoutingComponent,FormsModule,TypeaheadModule.forRoot(),
          ],
declarations:[UserComponent],
providers:[RouteService]
})

export class UserModule{

}
