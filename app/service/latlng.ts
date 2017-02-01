
export class LatLng
  {
    lng:number=0;
    lat:number=0;
   // latlng:string[] = [];

  constructor(lat:number, lng:number){
    this.lat = lat;
    this.lng = lng;
  }

  getlatlng(){
    return this.lat+","+this.lng;
  }
    
 }