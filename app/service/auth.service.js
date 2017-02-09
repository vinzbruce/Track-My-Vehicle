System.register(['@angular/core', 'angular2-jwt', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, angular2_jwt_1, router_1;
    var AuthService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService(router) {
                    var _this = this;
                    this.router = router;
                    this.options = {
                        auth: {
                            redirect: false,
                            responseType: 'token'
                        },
                        additionalSignUpFields: [{
                                type: "select",
                                name: "role",
                                placeholder: "choose your role",
                                options: [
                                    { value: "user", label: "User" },
                                    { value: "driver", label: "Driver" }
                                ]
                            }],
                        socialButtonStyle: 'small',
                        languageDictionary: { title: "Log In" },
                        theme: {
                            primaryColor: '#1f9e89'
                        }
                    };
                    this.lock = new Auth0Lock('yvCQjHbzTeUFgxfMnxZrTQ91OfFswcMC', 'vinzbruce.auth0.com', this.options);
                    this.navigate = '/user';
                    console.log("inside auth service");
                    // We'll listen for an authentication event to be raised and if successful will log the user in.
                    this.lock.on('authenticated', function (authResult) {
                        localStorage.setItem('id_token', authResult.idToken);
                        _this.lock.getProfile(authResult.idToken, function (error, profile) {
                            if (error) {
                                console.log(error);
                            }
                            console.log(profile);
                            if (profile.hasOwnProperty('user_metadata') && profile.user_metadata.hasOwnProperty('role')) {
                                if (profile.user_metadata.role == 'driver') {
                                    console.log(profile.user_metadata.role);
                                    _this.navigate = '/driver';
                                }
                            }
                            localStorage.setItem('profile', JSON.stringify(profile));
                            _this.router.navigate([_this.navigate]);
                        });
                        _this.lock.hide();
                    });
                    this.lock.on('authorization_error', function (authResult) {
                        console.log(authResult);
                    });
                    // this.handleRedirectWithHash();
                }
                // This method will display the lock widget
                AuthService.prototype.login = function () {
                    this.lock.show();
                };
                AuthService.prototype.logout = function () {
                    // To log out, just remove the token and profile from local storage
                    localStorage.removeItem('profile');
                    localStorage.removeItem('id_token');
                    // Send the user back to the public deals page after logout
                    this.router.navigateByUrl('/home');
                };
                // Finally, this method will check to see if the user is logged in. We'll be able to tell by checking to see if they have a token and whether that token is valid or not.
                AuthService.prototype.loggedIn = function () {
                    return angular2_jwt_1.tokenNotExpired();
                };
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});
//# sourceMappingURL=auth.service.js.map