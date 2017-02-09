System.register(['@angular/core', '@angular/http', 'rxjs/Observable', 'rxjs/add/operator/map', 'rxjs/add/operator/catch'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var RouteService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            RouteService = (function () {
                function RouteService(http) {
                    this.http = http;
                    this.routeUrl = "api/service/route";
                    this.gmapUrl = "https://maps.googleapis.com/maps/api/directions/json?origin=&destination=&key=YOUR_API_KEY";
                    this.distanceurl = "api/service/distance";
                    this.busAvailabilityUrl = "api/service/bus-availability";
                }
                /*getRoute():any{
                  return "";
                }
                
                 getBusDetails(origin:any, destination:any):any{
                   return "";
                 }*/
                RouteService.prototype.getRoute = function () {
                    return this.http.get(this.routeUrl)
                        .map(function (res) { console.log(res.json()); return res.json(); })
                        .catch(function (error) { console.log(error); return Observable_1.Observable.throw(error); });
                };
                RouteService.prototype.getAvailableBus = function (boardingstop) {
                    var params = new http_1.URLSearchParams();
                    params.set("boardingstop", boardingstop);
                    return this.http.get(this.busAvailabilityUrl, { search: params })
                        .map(function (res) { return JSON.parse(res._body); })
                        .catch(this.handleError);
                };
                RouteService.prototype.getBusDetails = function (origin, destination) {
                    var params = new http_1.URLSearchParams();
                    params.set('origins', origin);
                    params.set('destinations', destination);
                    return this.http.get(this.distanceurl, { search: params })
                        .map(function (res) { return res._body; })
                        .catch(this.handleError);
                };
                RouteService.prototype.calculateDistance = function (origin, destination) {
                    var params = new http_1.URLSearchParams();
                    params.set('origins', origin);
                    params.set('destinations', destination.getlatlng());
                    return this.http.get(this.distanceurl, { search: params })
                        .map(function (res) { return res._body; })
                        .catch(this.handleError);
                };
                RouteService.prototype.handleError = function (error) {
                    var errMsg;
                    if (error instanceof http_1.Response) {
                        var body = error.json() || '';
                        var err = body.error || JSON.stringify(body);
                        errMsg = error.status + " - " + (error.statusText || '') + " " + err;
                    }
                    else {
                        errMsg = error.message ? error.message : error.toString();
                    }
                    console.error(errMsg);
                    return Observable_1.Observable.throw(errMsg);
                };
                RouteService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RouteService);
                return RouteService;
            }());
            exports_1("RouteService", RouteService);
        }
    }
});
//# sourceMappingURL=route.service.js.map