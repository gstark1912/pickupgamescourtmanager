(function () {
    'use strict';

    /**
     * @ngdoc object
     * @name Brapp
     *
     * @description
     * Main application module.
     */
    var app = angular.module('gs.client.info', ['uiGmapgoogle-maps', 'ngGeolocation'])
        .config(['uiGmapGoogleMapApiProvider', function (GoogleMapApiProviders) {
            GoogleMapApiProviders.configure({
                china: true
            });
        }])
        .config(['uiGmapGoogleMapApiProvider', function (uiGmapGoogleMapApiProvider) {
            uiGmapGoogleMapApiProvider.configure({
                key: 'AIzaSyDcVhGbhH5-foftcpWP8WCR8CcmhV9D_fM',
                //v: '3.25', //defaults to latest 3.X anyhow
                libraries: 'weather,geometry,visualization'
            });
        }]);
})();
