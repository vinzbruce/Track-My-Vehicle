System.register(['@angular/core', './user.component', '../service/route.service', '@angular/http', '@angular/forms', './user-routing.module', 'ng2-bootstrap', '@angular/common'], function(exports_1, context_1) {
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
    var core_1, user_component_1, route_service_1, http_1, forms_1, user_routing_module_1, ng2_bootstrap_1, common_1;
    var UserModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            },
            function (route_service_1_1) {
                route_service_1 = route_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (user_routing_module_1_1) {
                user_routing_module_1 = user_routing_module_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            UserModule = (function () {
                function UserModule() {
                }
                UserModule = __decorate([
                    core_1.NgModule({
                        imports: [http_1.HttpModule, common_1.CommonModule, user_routing_module_1.UserRoutingComponent, forms_1.FormsModule, ng2_bootstrap_1.TypeaheadModule.forRoot(),
                        ],
                        declarations: [user_component_1.UserComponent],
                        providers: [route_service_1.RouteService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserModule);
                return UserModule;
            }());
            exports_1("UserModule", UserModule);
        }
    }
});
//# sourceMappingURL=user.module.js.map