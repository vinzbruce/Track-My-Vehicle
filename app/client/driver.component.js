System.register(['@angular/core', '../service/geolocation.service'], function(exports_1, context_1) {
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
    var core_1, geolocation_service_1;
    var template, style, DriverComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (geolocation_service_1_1) {
                geolocation_service_1 = geolocation_service_1_1;
            }],
        execute: function() {
            template = './app/client/driver.component.html';
            style = './app/client/user-style.css';
            DriverComponent = (function () {
                function DriverComponent(geoservice) {
                    this.geoservice = geoservice;
                    this.bus_id = "";
                    this.startFlag = null;
                    this.routes = [{ bus_id: "100", route_id: "1" },
                        { bus_id: "101", route_id: "2" }];
                    this.options = {};
                    this.startFlag = false;
                }
                DriverComponent.prototype.registerBus = function () {
                    this.options = { bus_id: this.bus_id };
                    this.geoservice.getLocation(this.options);
                    this.startFlag = true;
                };
                DriverComponent.prototype.unregisterBus = function () {
                    this.startFlag = false;
                };
                DriverComponent = __decorate([
                    core_1.Component({
                        templateUrl: template,
                        styleUrls: [style]
                    }), 
                    __metadata('design:paramtypes', [geolocation_service_1.GeolocationService])
                ], DriverComponent);
                return DriverComponent;
            }());
            exports_1("DriverComponent", DriverComponent);
        }
    }
});
//# sourceMappingURL=driver.component.js.map