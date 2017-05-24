(function () {
    'use strict';

    /**
     * @ngdoc object
     * @name Brapp
     *
     * @description
     * Main application module.
     */
    angular.module('app', ['app.core', 'app.home', 'app.match', 'app.matchInvite', 'app.matchView', 'app.playerInvite', 'mobile-angular-ui', 'ui.bootstrap']);
})();
