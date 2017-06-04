(function () {
    'use strict';

    /**
     * @ngdoc object
     * @name Brapp
     *
     * @description
     * Main application module.
     */
    angular.module('app', ['app.core', 'app.home', 'app.login'
        , 'ui.bootstrap', 'angular-jwt'
        , 'app.admin.login']);

})();
