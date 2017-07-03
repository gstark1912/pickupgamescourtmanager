(function () {
    'use strict';

    /**
     * @ngdoc overview
     * @name app.home
     * @requires ui.router
     *
     * @description
     * Module for the home section.
     */
    angular.module('app.admin.client', ['ui.router', 'app.core', 'gs.client.info', 'gs.client.courts', 'gs.client.schedule', 'gs.client.notes']);
})();
