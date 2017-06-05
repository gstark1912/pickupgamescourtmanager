(function () {
    'use strict';

    /**
    * @ngdoc overview
    * @name app.core
    * @requires ui.router
    *
    * @description
    * Module for the home section.
    */
    var app = angular.module('app.core', ['ui.router']);


    app
        .constant('CONFIG', {
            ROL_CURRENT_USER: 3
        })
        .constant('ROLES', {
            ADMIN: {
                ROL: 1,
                PATH: "adminlogin"
            },
            REGISTERED: {
                ROL: 2,
                PATH: "home"
            },
            GUEST: {
                ROL: 3,
                PATH: "login"
            }
        })

    app
        .config(['$httpProvider', function ($httpProvider) {
            $httpProvider.interceptors.push(['$window', '$location', '$q', function ($window, $location, $q) {
                return {
                    request: function (httpConfig) {
                        var token = $window.localStorage.token ? $window.localStorage.token : null;
                        if (token) {
                            httpConfig.headers['Token'] = token;
                        }
                        return httpConfig;
                    },
                    responseError: function (response) {
                        if (response.status === 401 && $window.localStorage.token !== undefined) {
                            $window.localStorage.removeItem("token");
                            if (CONFIG.ROL_CURRENT_USER == 1) {
                                $location.path(ROLES.ADMIN.PATH);
                            }
                            else if (CONFIG.ROL_CURRENT_USER == 2) {
                                $location.path(ROLES.REGISTERED.PATH);
                            }
                            else if (CONFIG.ROL_CURRENT_USER == 3) {
                                $location.path(ROLES.GUEST.PATH);
                            }
                        }

                        return response;
                    }
                };
            }]);
        }]);
})();
