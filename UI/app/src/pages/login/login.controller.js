(function () {
    var module = angular.module('app.login');
    module.controller('LoginController', ['$scope', '$location', '$window', 'AuthAPIServices',
    function ($scope, $location, $window, AuthAPIServices) {
        $scope.user = null;
        $scope.incorrectLogin = false;

        init();

        function init() {
            if ($window.localStorage.token !== undefined)
                $location.path('/home');
        };

        $scope.login = function () {
            AuthAPIServices.login($scope.user)
            .then(function (response) {
                if (response)
                    $location.path('/home');
                else
                    $scope.incorrectLogin = true;
            });
        }
    }]);

}());