System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LatLng;
    return {
        setters:[],
        execute: function() {
            LatLng = (function () {
                // latlng:string[] = [];
                function LatLng(lat, lng) {
                    this.lng = 0;
                    this.lat = 0;
                    this.lat = lat;
                    this.lng = lng;
                }
                LatLng.prototype.getlatlng = function () {
                    return this.lat + "," + this.lng;
                };
                return LatLng;
            }());
            exports_1("LatLng", LatLng);
        }
    }
});
//# sourceMappingURL=latlng.js.map