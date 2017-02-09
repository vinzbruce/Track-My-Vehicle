System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BusInfo;
    return {
        setters:[],
        execute: function() {
            BusInfo = (function () {
                function BusInfo() {
                    this.bus_id = null;
                    this.latlng = null;
                    this.duration = null;
                    this.stopname = null;
                }
                return BusInfo;
            }());
            exports_1("BusInfo", BusInfo);
        }
    }
});
//# sourceMappingURL=businfo.js.map