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
        , 'app.admin.login', 'app.admin.home', 'app.admin.client']);
    app
        .run(["$rootScope", "$location", '$state', "$window", "ROLES", function ($rootScope, $location, $state, $window, ROLES) {
            $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
                if ($window.sessionStorage.role == undefined)
                    $window.sessionStorage.role = 3;

                if (toState.data !== undefined && toState.data.authorized !== undefined) {
                    if (toState.data.authorized.indexOf($window.sessionStorage.role) !== -1) {
                        console.log("entró como anoche");
                    }
                    else {
                        e.preventDefault();
                        if ($window.sessionStorage.role == 1) {
                            return $state.go(ROLES.ADMIN.PATH);
                        }
                        else if ($window.sessionStorage.role == 2) {
                            return $state.go(ROLES.REGISTERED.PATH);
                        }
                        else if ($window.sessionStorage.role == 3) {
                            return $state.go(ROLES.GUEST.PATH);
                        }

                    }
                }

                return;
            });
        }]);
})();
