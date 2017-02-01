System.register(['@angular/core', '../service/route.service', '../service/latlng', '../service/bus-duration', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, route_service_1, latlng_1, bus_duration_1, router_1;
    var template, style, UserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (route_service_1_1) {
                route_service_1 = route_service_1_1;
            },
            function (latlng_1_1) {
                latlng_1 = latlng_1_1;
            },
            function (bus_duration_1_1) {
                bus_duration_1 = bus_duration_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            template = './app/client/user.component.html';
            style = './app/client/user-style.css';
            UserComponent = (function () {
                function UserComponent(nroute, router, route) {
                    var _this = this;
                    this.nroute = nroute;
                    this.router = router;
                    this.route = route;
                    this.name = 'Its user component';
                    this.socket = null;
                    this.host = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port;
                    this.boardingstop = "";
                    this.destination = "";
                    this.stops = [];
                    this.busAvailable = false;
                    this.buses = [];
                    this.selectedBus = "";
                    this.lat = 0;
                    this.lng = 0;
                    this.socket = io(this.host);
                    this.nroute.getRoute()
                        .subscribe(function (res) { return _this.stops = res.stops; });
                }
                UserComponent.prototype.search = function () {
                    var _this = this;
                    this.socket.emit("registerstop", this.boardingstop);
                    var destination = new latlng_1.LatLng(12.964851, 80.256690);
                    var origin = new latlng_1.LatLng(12.987651, 80.256800);
                    this.nroute.getBusDetails(origin.getlatlng(), destination.getlatlng())
                        .subscribe(function (res) { console.log(res); _this.extractValues(JSON.parse(res)); });
                    this.busAvailable = true;
                };
                UserComponent.prototype.extractValues = function (res) {
                    for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                        var places = res_1[_i];
                        for (var _a = 0, _b = places.elements; _a < _b.length; _a++) {
                            var element = _b[_a];
                            var duration = new bus_duration_1.BusDuration(element.duration.text, this.boardingstop);
                            this.buses.push(duration);
                        }
                    }
                };
                UserComponent.prototype.openMap = function () {
                    this.router.navigate(['/mapview', { lat: 12.987651, lng: 80.256800, bus_id: "100" }], { relativeTo: this.route });
                    //this.router.navigate(['/mapview'],{ relativeTo: this.route });
                };
                UserComponent.prototype.typeaheadOnSelect = function (e) {
                    console.log(e);
                };
                UserComponent = __decorate([
                    core_1.Component({
                        templateUrl: template,
                        styleUrls: [style]
                    }), 
                    __metadata('design:paramtypes', [route_service_1.RouteService, router_1.Router, router_1.ActivatedRoute])
                ], UserComponent);
                return UserComponent;
            }());
            exports_1("UserComponent", UserComponent);
        }
    }
});
//# sourceMappingURL=user.component.js.map