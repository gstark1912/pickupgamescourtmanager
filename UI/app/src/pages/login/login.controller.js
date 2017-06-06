(function () {
    var module = angular.module('app.login');
    module.controller('LoginController', ['$scope', '$location', '$window', 'AuthAPIServices',
    function ($scope, $location, $window, AuthAPIServices) {
        $scope.user = null;
        $scope.incorrectLogin = false;

        init();

        function init() {
            if ($window.sessionStorage.token !== undefined)
                $location.path('/');
        };

        $scope.login = function () {
            AuthAPIServices.login($scope.user)
            .then(function (response) {
                if (response) {
                    $window.sessionStorage.role = 2;
                    $location.path('/');
                }
                else
                    $scope.incorrectLogin = true;
            });
        }
    }]);

}());