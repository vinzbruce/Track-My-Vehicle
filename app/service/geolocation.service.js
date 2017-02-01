System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var GEOLOCATION_ERRORS, GeolocationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GEOLOCATION_ERRORS = {
                'errors.location.unsupportedBrowser': 'Browser does not support location services',
                'errors.location.permissionDenied': 'You have rejected access to your location',
                'errors.location.positionUnavailable': 'Unable to determine your location',
                'errors.location.timeout': 'Service timeout has been reached'
            };
            GeolocationService = (function () {
                function GeolocationService() {
                    this.socket = null;
                    this.busInfo = null;
                    this.host = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port;
                }
                GeolocationService.prototype.getLocation = function (opts) {
                    var _this = this;
                    if (window.navigator && window.navigator.geolocation) {
                        window.navigator.geolocation.watchPosition(function (position) {
                            console.log(position);
                            _this.socket = io(_this.host);
                            _this.busInfo = { bus_id: opts.bus_id, longitude: position.coords.longitude, latitude: position.coords.latitude };
                            _this.socket.emit("registerbus", _this.busInfo);
                        }, function (error) {
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
                        }, opts);
                    }
                    else {
                        console.error(GEOLOCATION_ERRORS['errors.location.unsupportedBrowser']);
                    }
                };
                GeolocationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], GeolocationService);
                return GeolocationService;
            }());
            exports_1("GeolocationService", GeolocationService);
        }
    }
});
//# sourceMappingURL=geolocation.service.js.map