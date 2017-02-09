System.register(['@angular/core', '../service/route.service', '../service/latlng', '../service/businfo', '../service/bus-position', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, route_service_1, latlng_1, businfo_1, bus_position_1, router_1;
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
            function (businfo_1_1) {
                businfo_1 = businfo_1_1;
            },
            function (bus_position_1_1) {
                bus_position_1 = bus_position_1_1;
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
                    this.destinations = { stop_name: "Siruseri", lat: 12.831225, lng: 80.219626 };
                    this.busAvailable = false;
                    this.buses = [];
                    this.selectedBus = null;
                    this.showNoBusMsg = false;
                    this.socket = io(this.host);
                    this.nroute.getRoute()
                        .subscribe(function (res) { return _this.stops = res.stops; });
                }
                UserComponent.prototype.search = function () {
                    //this.socket.emit("registerstop", this.boardingstop);
                    var _this = this;
                    this.nroute.getAvailableBus(this.boardingstop)
                        .subscribe(function (availableBuses) {
                        console.log("availableBuses");
                        console.log(availableBuses);
                        for (var _i = 0, availableBuses_1 = availableBuses; _i < availableBuses_1.length; _i++) {
                            var availableBus = availableBuses_1[_i];
                            var bus = new businfo_1.BusInfo();
                            bus.bus_id = availableBus.bus_id;
                            bus.latlng = new latlng_1.LatLng(availableBus.latitude, availableBus.longitude);
                            _this.identifyBusCrossedBoardingStop(bus);
                        }
                        if (availableBuses.length == 0) {
                            _this.showNoBusMsg = true;
                        }
                    });
                };
                UserComponent.prototype.identifyBusCrossedBoardingStop = function (bus) {
                    var _this = this;
                    var origins = bus.latlng.getlatlng() + "|" + this.getselectedStopPostition();
                    var destination = new latlng_1.LatLng(this.destinations.lat, this.destinations.lng);
                    this.nroute.calculateDistance(origins, destination)
                        .subscribe(function (res) {
                        console.log("calculateDistance");
                        console.log(res);
                        if (_this.calculateDistance(JSON.parse(res))) {
                            _this.nroute.getBusDetails(bus.latlng.getlatlng(), _this.getselectedStopPostition())
                                .subscribe(function (res) { _this.extractValues(JSON.parse(res), bus); });
                            console.log("true");
                        }
                        else {
                            if (_this.busAvailable) {
                                _this.showNoBusMsg = false;
                            }
                            else {
                                _this.showNoBusMsg = true;
                            }
                        }
                    });
                };
                UserComponent.prototype.calculateDistance = function (res) {
                    var bus_dis = res[0].elements[0].distance.text.replace("km", "");
                    var stop_dis = res[1].elements[0].distance.text.replace("km", "");
                    console.log(bus_dis.trim() + ", " + stop_dis.trim());
                    console.log(+bus_dis.trim() > +stop_dis.trim());
                    if (+bus_dis.trim() > +stop_dis.trim()) {
                        return true;
                    }
                    return false;
                };
                UserComponent.prototype.extractValues = function (res, bus) {
                    for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                        var places = res_1[_i];
                        for (var _a = 0, _b = places.elements; _a < _b.length; _a++) {
                            var element = _b[_a];
                            var duration = new bus_position_1.BusPosition(element.duration.text, this.boardingstop);
                            duration.bus_id = bus.bus_id;
                            duration.latlng = bus.latlng;
                            if (!this.duplicateBus(bus.bus_id)) {
                                this.buses.push(duration);
                            }
                            this.busAvailable = true;
                        }
                    }
                };
                UserComponent.prototype.duplicateBus = function (bus_id) {
                    for (var _i = 0, _a = this.buses; _i < _a.length; _i++) {
                        var bus = _a[_i];
                        if (bus_id == bus.bus_id) {
                            return true;
                        }
                    }
                    return false;
                };
                UserComponent.prototype.openMap = function (selectedBus) {
                    console.log(selectedBus);
                    this.router.navigate(['/mapview', { lat: selectedBus.latlng.lat, lng: selectedBus.latlng.lng,
                            bus_id: selectedBus.bus_id, stop: this.boardingstop }], { relativeTo: this.route });
                };
                UserComponent.prototype.getselectedStopPostition = function () {
                    for (var _i = 0, _a = this.stops; _i < _a.length; _i++) {
                        var stop = _a[_i];
                        if (this.boardingstop == stop.stop_name) {
                            var stopLatLng = new latlng_1.LatLng(stop.latitude, stop.longitude);
                            return stopLatLng.getlatlng();
                        }
                    }
                    return "";
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