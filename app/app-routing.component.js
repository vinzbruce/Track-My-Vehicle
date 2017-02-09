System.register(['@angular/core', '@angular/router', './client/driver.component', './client/mapview.component', './client/others/home.component', './client/others/contact-us.component', './service/auth-guard.service'], function(exports_1, context_1) {
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
    var core_1, router_1, driver_component_1, mapview_component_1, home_component_1, contact_us_component_1, auth_guard_service_1;
    var routes, AppRoutingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (driver_component_1_1) {
                driver_component_1 = driver_component_1_1;
            },
            function (mapview_component_1_1) {
                mapview_component_1 = mapview_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (contact_us_component_1_1) {
                contact_us_component_1 = contact_us_component_1_1;
            },
            function (auth_guard_service_1_1) {
                auth_guard_service_1 = auth_guard_service_1_1;
            }],
        execute: function() {
            routes = [
                { path: 'driver', component: driver_component_1.DriverComponent, canActivate: [auth_guard_service_1.AuthGuard] },
                { path: 'user', loadChildren: 'app/client/user.module#UserModule', canActivate: [auth_guard_service_1.AuthGuard] },
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'contactus', component: contact_us_component_1.ContactUsComponent },
                { path: 'mapview', component: mapview_component_1.MapViewComponent },
                { path: '**', component: home_component_1.HomeComponent }
            ];
            AppRoutingComponent = (function () {
                function AppRoutingComponent() {
                }
                AppRoutingComponent = __decorate([
                    core_1.NgModule({
                        imports: [router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules })],
                        exports: [router_1.RouterModule]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppRoutingComponent);
                return AppRoutingComponent;
            }());
            exports_1("AppRoutingComponent", AppRoutingComponent);
        }
    }
});
//# sourceMappingURL=app-routing.component.js.map