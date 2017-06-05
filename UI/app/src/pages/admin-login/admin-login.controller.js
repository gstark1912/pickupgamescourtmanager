(function () {
    var module = angular.module('app.admin.login');
    module.controller('AdminLoginController', ['$scope', '$location', '$window', 'AuthAPIServices',
    function ($scope, $location, $window, AuthAPIServices) {
        $scope.user = null;
        $scope.incorrectLogin = false;

        $scope.login = function () {
            AuthAPIServices.loginAdmin($scope.user)
            .then(function (response) {
                if (response) {
                    $window.localStorage.role = 1; // hacer esto pero más lindo
                    $location.path('admin/home');
                }
                else
                    $scope.incorrectLogin = true;
            });
        }
    }]);

}());