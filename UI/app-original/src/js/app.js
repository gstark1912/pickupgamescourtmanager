//angular.module('Brapp', [
//  'ngRoute',
//  'mobile-angular-ui',
//  'Brapp.controllers.Main'
//])

//.config(function($routeProvider) {
//    $routeProvider.when('/', { templateUrl: 'app/src/templates/home.html', reloadOnSearch: false });
//});

(function () {
    var app = angular
        .module("Brapp", ['ngRoute', 'mobile-angular-ui',
            'facebook', 'uiGmapgoogle-maps', 'ngGeolocation', 'ui.bootstrap']);

    app.config(['FacebookProvider',
        function (FacebookProvider) {
            var myAppId = '1756722441212827';

            // You can set appId with setApp method
            // FacebookProvider.setAppId('myAppId');

            /**
             * After setting appId you need to initialize the module.
             * You can pass the appId on the init method as a shortcut too.
             */
            FacebookProvider.init(myAppId);
            //FacebookProvider.setInitCustomOption('scope','');
            //debugger;
        }
    ]);

    app.config(function (uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyBur_GhmdrUw4iNDMGa2D2SCHkBoCpXuLM',
            v: '3.20', //defaults to latest 3.X anyhow
            libraries: 'weather,geometry,visualization'
        });
    })

    app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/src/templates/home1.html',
                controller: 'MainController'

            })
            .when('/crearPartido', {
                templateUrl: 'app/src/templates/matchData.html',
                controller: 'MatchController'
            })
            .when('/geer', {
                templateUrl: 'app/src/templates/home.html',
                controller: 'HomeController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
})();