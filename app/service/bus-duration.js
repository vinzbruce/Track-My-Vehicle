System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BusDuration;
    return {
        setters:[],
        execute: function() {
            BusDuration = (function () {
                function BusDuration(duration, stopname) {
                    this.duration = null;
                    this.stopname = null;
                    this.duration = duration;
                    this.stopname = stopname;
                }
                return BusDuration;
            }());
            exports_1("BusDuration", BusDuration);
        }
    }
});
//# sourceMappingURL=bus-duration.js.map