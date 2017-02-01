import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';

const GEOLOCATION_ERRORS = {
	'errors.location.unsupportedBrowser': 'Browser does not support location services',
	'errors.location.permissionDenied': 'You have rejected access to your location',
	'errors.location.positionUnavailable': 'Unable to determine your location',
	'errors.location.timeout': 'Service timeout has been reached'
};

@Injectable()
export class GeolocationService {
	
socket:any = null;
busInfo:any = null;
 host = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port;
  
  public getLocation(opts:any): void {

		if (window.navigator && window.navigator.geolocation) {
				window.navigator.geolocation.watchPosition(
					(position) => {
						console.log(position);
						this.socket = io(this.host);  
		
						this.busInfo = {bus_id:opts.bus_id, longitude:position.coords.longitude, latitude:position.coords.latitude};
   
  				  this.socket.emit("registerbus", this.busInfo);
						
					},
					(error) => {
						switch (error.code) {
							case 1:
								console.error(GEOLOCATION_ERRORS['errors.location.permissionDenied']);
								break;
							case 2:
								console.error(GEOLOCATION_ERRORS['errors.location.positionUnavailable']);
								break;
							case 3:
								console.error(GEOLOCATION_ERRORS['errors.location.timeout']);
								break;
						}
					},
					opts);
			}
			else {
				console.error(GEOLOCATION_ERRORS['errors.location.unsupportedBrowser']);
			}

		}

}