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
                    $window.sessionStorage.role = 1;
                    $window.sessionStorage.adminUser = $scope.user.email;
                    $window.sessionStorage.adminPassword = $scope.user.password;
                    $location.path('adminhome');
                }
                else {
                    $scope.incorrectLogin = true;
                }
            });
        }
    }]);

}());