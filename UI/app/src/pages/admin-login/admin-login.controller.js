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
                    debugger;
                    $window.sessionStorage.role = 1; // hacer esto pero más lindo
                    $window.sessionStorage.adminUser = $scope.user.email;
                    $window.sessionStorage.adminPassword = $scope.user.password;
                    $location.path('adminHome');
                }
                else {
                    $scope.incorrectLogin = true;
                }
            });
        }
    }]);

}());