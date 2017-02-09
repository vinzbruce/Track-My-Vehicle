System.register(['@angular/core', '../../service/auth.service', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, auth_service_1, router_1;
    var template, HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            template = './app/client/others/home.component.html';
            HomeComponent = (function () {
                function HomeComponent(authService, route, router) {
                    this.authService = authService;
                    this.route = route;
                    this.router = router;
                }
                HomeComponent.prototype.login = function () {
                    if (this.authService.loggedIn()) {
                        this.router.navigate(['/user']);
                    }
                    else {
                        this.authService.login();
                    }
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        templateUrl: template
                    }), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.ActivatedRoute, router_1.Router])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map