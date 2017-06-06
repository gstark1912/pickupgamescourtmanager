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
    var app = angular.module('app.core', ['ui.router', 'base64']);


    app
        .constant('CONFIG', {
            ROL_CURRENT_USER: 3
        })
        .constant('ROLES', {
            ADMIN: {
                ROL: "1",
                PATH: "adminhome"
            },
            REGISTERED: {
                ROL: "2",
                PATH: "home"
            },
            GUEST: {
                ROL: "3",
                PATH: "login"
            }
        })

    app
        .config(['$httpProvider', function ($httpProvider) {
            $httpProvider.interceptors.push(['$window', '$location', '$q', '$base64', function ($window, $location, $q, $base64) {
                return {
                    request: function (httpConfig) {
                        var token = $window.sessionStorage.token ? $window.sessionStorage.token : null;
                        if (token) {
                            httpConfig.headers['Token'] = token;
                        }

                        var username = $window.sessionStorage.adminUser ? $window.sessionStorage.adminUser : null;
                        var password = $window.sessionStorage.adminPassword ? $window.sessionStorage.adminPassword : null;
                        if (username) {
                            var encoded = $base64.encode(username + ':' + password);
                            httpConfig.headers['Authorization'] = "Basic " + encoded;
                        }

                        return httpConfig;
                    },
                    responseError: function (response) {
                        if (response.status === 401 && $window.sessionStorage.token !== undefined) {
                            $window.sessionStorage.removeItem("token");
                            $window.sessionStorage.removeItem("adminUser");
                            $window.sessionStorage.removeItem("password");
                            $window.sessionStorage.role = 3;
                            $location.path(ROLES.GUEST.PATH);
                        }

                        return response;
                    }
                };
            }]);
        }]);
})();
