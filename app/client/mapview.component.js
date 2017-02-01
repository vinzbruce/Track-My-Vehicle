System.register(['@angular/core', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var template, style, MapViewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            template = './app/client/mapview.component.html';
            style = './app/client/user-style.css';
            MapViewComponent = (function () {
                function MapViewComponent(route) {
                    this.route = route;
                    this.lat = 12.987651;
                    this.lng = 80.256800;
                    this.bus_id = "";
                    this.socket = null;
                    this.host = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port;
                    this.socket = io(this.host);
                    this.socket.on("availableBus", function (availableBuses) {
                        // console.log(res);
                        /* for(let bus of availableBuses)
                           {
                             if(this.bus_id == bus.bus_id)
                               {
                                 this.lat = bus.latitude;
                                 this.lng = bus.longitude;
                               }
                           }*/
                    });
                }
                MapViewComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.subscribe(function (params) {
                        _this.lat = +params['lat'];
                        _this.lng = +params['lng'];
                        _this.bus_id = params['bus_id;'];
                    });
                };
                MapViewComponent = __decorate([
                    core_1.Component({
                        templateUrl: template,
                        styleUrls: [style]
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute])
                ], MapViewComponent);
                return MapViewComponent;
            }());
            exports_1("MapViewComponent", MapViewComponent);
        }
    }
});
//# sourceMappingURL=mapview.component.js.map