System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', './app.component', './app-routing.component', './client/driver.component', './client/user.component', './client/mapview.component', './client/others/home.component', './client/others/contact-us.component', './service/auth.service', './service/auth-guard.service', 'angular2-jwt', './service/route.service', './service/geolocation.service', 'ng2-bootstrap', '@angular/http', 'angular2-google-maps/core'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, app_component_1, app_routing_component_1, driver_component_1, user_component_1, mapview_component_1, home_component_1, contact_us_component_1, auth_service_1, auth_guard_service_1, angular2_jwt_1, route_service_1, geolocation_service_1, ng2_bootstrap_1, http_1, core_2;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routing_component_1_1) {
                app_routing_component_1 = app_routing_component_1_1;
            },
            function (driver_component_1_1) {
                driver_component_1 = driver_component_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
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
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (auth_guard_service_1_1) {
                auth_guard_service_1 = auth_guard_service_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            },
            function (route_service_1_1) {
                route_service_1 = route_service_1_1;
            },
            function (geolocation_service_1_1) {
                geolocation_service_1 = geolocation_service_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_component_1.AppRoutingComponent,
                            ng2_bootstrap_1.TypeaheadModule.forRoot(), core_2.AgmCoreModule.forRoot({ apiKey: 'AIzaSyDKBkgQKUM4iwiL2oGFhxdT8rLjMYZN-EM' })],
                        declarations: [app_component_1.AppComponent, user_component_1.UserComponent, driver_component_1.DriverComponent, home_component_1.HomeComponent,
                            contact_us_component_1.ContactUsComponent, mapview_component_1.MapViewComponent],
                        providers: [auth_service_1.AuthService, auth_guard_service_1.AuthGuard, angular2_jwt_1.AUTH_PROVIDERS, route_service_1.RouteService, geolocation_service_1.GeolocationService],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map