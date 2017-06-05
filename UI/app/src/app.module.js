(function () {
    'use strict';

    /**
     * @ngdoc object
     * @name Brapp
     *
     * @description
     * Main application module.
     */
    var app = angular.module('app', ['app.core', 'app.home', 'app.login'
        , 'ui.bootstrap', 'angular-jwt'
        , 'app.admin.login']);
    app
        .run(["$rootScope", "$location", '$state', "CONFIG", "ROLES", function ($rootScope, $location, $state, CONFIG, ROLES) {
            $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
                if (toState.data !== undefined && toState.data.authorized !== undefined) {
                    if (toState.data.authorized.indexOf(CONFIG.ROL_CURRENT_USER) !== -1) {
                        console.log("entra");
                    }
                    else {
                        e.preventDefault();
                        if (CONFIG.ROL_CURRENT_USER == 1) {
                            //$location.path(ROLES.ADMIN.PATH);
                            return $state.go(ROLES.ADMIN.PATH);
                        }
                        else if (CONFIG.ROL_CURRENT_USER == 2) {
                            //$location.path(ROLES.REGISTERED.PATH);
                            return $state.go(ROLES.REGISTERED.PATH);
                        }
                        else if (CONFIG.ROL_CURRENT_USER == 3) {
                            //$location.path(ROLES.GUEST.PATH);
                            return $state.go(ROLES.GUEST.PATH);
                        }

                    }
                }

                return;
            });
        }]);
})();
