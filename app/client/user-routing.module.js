System.register(['@angular/core', '@angular/router', '../service/auth-guard.service', './user.component'], function(exports_1, context_1) {
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
    var core_1, router_1, auth_guard_service_1, user_component_1;
    var userRoutes, UserRoutingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_guard_service_1_1) {
                auth_guard_service_1 = auth_guard_service_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            }],
        execute: function() {
            userRoutes = [
                { path: '', component: user_component_1.UserComponent, canActivate: [auth_guard_service_1.AuthGuard]
                }];
            UserRoutingComponent = (function () {
                function UserRoutingComponent() {
                }
                UserRoutingComponent = __decorate([
                    core_1.NgModule({
                        imports: [router_1.RouterModule.forChild(userRoutes)],
                        exports: [router_1.RouterModule]
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserRoutingComponent);
                return UserRoutingComponent;
            }());
            exports_1("UserRoutingComponent", UserRoutingComponent);
        }
    }
});
//# sourceMappingURL=user-routing.module.js.map