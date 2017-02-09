import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {LatLng} from './latlng';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RouteService {

 routeUrl:string = "api/service/route";
 gmapUrl:string = "https://maps.googleapis.com/maps/api/directions/json?origin=&destination=&key=YOUR_API_KEY";
 distanceurl:string = "api/service/distance";
 busAvailabilityUrl:string = "api/service/bus-availability";

 constructor( private http:Http){}

/*getRoute():any{
  return "";
}

 getBusDetails(origin:any, destination:any):any{
   return "";
 }*/


  getRoute():Observable<any> {
    return this.http.get(this.routeUrl)
         .map((res:any) => {console.log(res.json()); return res.json();})
         .catch((error:any) => {console.log(error); return Observable.throw(error);});

  }

  getAvailableBus(boardingstop:string):Observable<any>{

    let params:URLSearchParams = new URLSearchParams();
    params.set("boardingstop",boardingstop);

    return this.http.get(this.busAvailabilityUrl, {search:params})
               .map((res:any)=> {return JSON.parse(res._body);})
               .catch(this.handleError);

  }

  getBusDetails(origin:string, destination:string):Observable<any> {
   let params :URLSearchParams = new URLSearchParams();
    params.set('origins', origin);
    params.set('destinations', destination);

    return this.http.get(this.distanceurl, {search:params})
                    .map((res:any)=> {return res._body;})
                    .catch(this.handleError);
  }

  calculateDistance(origin:string, destination:LatLng):Observable<any> {

    let params :URLSearchParams = new URLSearchParams();
    params.set('origins', origin);
    params.set('destinations', destination.getlatlng());

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
