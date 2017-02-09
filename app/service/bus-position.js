System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BusPosition;
    return {
        setters:[],
        execute: function() {
            BusPosition = (function () {
                function BusPosition(duration, stopname) {
                    this.duration = null;
                    this.stopname = null;
                    this.bus_id = null;
                    this.latlng = null;
                    this.duration = duration;
                    this.stopname = stopname;
                }
                return BusPosition;
            }());
            exports_1("BusPosition", BusPosition);
        }
    }
});
//# sourceMappingURL=bus-position.js.map