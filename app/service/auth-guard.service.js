System.register(['@angular/core', '@angular/router', './auth.service'], function(exports_1, context_1) {
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
    var core_1, router_1, auth_service_1;
    var AuthGuard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            AuthGuard = (function () {
                function AuthGuard(auth, router) {
                    this.auth = auth;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function () {
                    // If user is not logged in we'll send them to the homepage
                    return this.checkLogin();
                };
                AuthGuard.prototype.canLoad = function (route) {
                    return this.checkLogin();
                };
                AuthGuard.prototype.checkLogin = function () {
                    if (!this.auth.loggedIn()) {
                        this.router.navigate(['/home']);
                        return false;
                    }
                    return true;
                };
                AuthGuard = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
                ], AuthGuard);
                return AuthGuard;
            }());
            exports_1("AuthGuard", AuthGuard);
        }
    }
});
//# sourceMappingURL=auth-guard.service.js.map