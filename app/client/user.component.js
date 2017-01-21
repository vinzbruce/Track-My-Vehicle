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
    var template, UserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            template = './app/client/user.component.html';
            UserComponent = (function () {
                function UserComponent() {
                    this.name = 'Its user component';
                    this.socket = null;
                    this.host = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port;
                    console.log("url " + this.host);
                    this.socket = io(this.host);
                    // this.socket = io();
                    this.socket.emit("user", "angular component is emiting");
                }
                UserComponent = __decorate([
                    core_1.Component({
                        templateUrl: template
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserComponent);
                return UserComponent;
            }());
            exports_1("UserComponent", UserComponent);
        }
    }
});
//# sourceMappingURL=user.component.js.map