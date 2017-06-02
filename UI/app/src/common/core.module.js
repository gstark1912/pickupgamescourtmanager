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
    angular.module('app.core', ['ui.router']);

    angular.module('app.core').config(['$httpProvider', function ($httpProvider) {
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
                    if (response.status === 401) {
                        $window.localStorage.token = null;
                        $location.path('/login');
                    }

                    return response;
                }
            };
        }]);
    }]);
})();
