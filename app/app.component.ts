import { Component } from '@angular/core';

let template="./app/app.component.html";

@Component({
  selector: 'my-app',
  templateUrl:template 
})
export class AppComponent  { name = 'component'; }
