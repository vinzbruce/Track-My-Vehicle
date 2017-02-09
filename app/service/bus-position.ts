import {LatLng} from './latlng';

export class BusPosition {

 duration:string = null;
 stopname:string = null;
 bus_id:any = null;
 latlng:LatLng = null;

  constructor(duration:string, stopname:string) {
    this.duration = duration;
    this.stopname = stopname;
  }

}
