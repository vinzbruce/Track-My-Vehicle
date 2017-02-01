import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RouteService {
  
 routeUrl:string = "api/service/route";
 gmapUrl:string = "https://maps.googleapis.com/maps/api/directions/json?origin=&destination=&key=YOUR_API_KEY";
distanceurl:string = "api/service/distance";
  
 constructor( private http:Http){}
  
  getRoute():Observable<any> {    
    return this.http.get(this.routeUrl)
         .map((res:any) => {console.log(res.json()); return res.json();})
         .catch((error:any) => {console.log(error); return Observable.throw(error);});  
    
  }
  
  getBusDetails(origin:any, destination:any):Observable<any> {
   let params :URLSearchParams = new URLSearchParams();
    params.set('origins', origin);
    params.set('destinations', destination);
    
    return this.http.get(this.distanceurl, {search:params})
                    .map((res:any)=> {return res._body;})
                    .catch(this.handleError);
  }
  
  private handleError(error:Response|any){
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  
}