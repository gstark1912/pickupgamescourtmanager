(function () {
    var module = angular.module('app.admin.login');
    module.controller('AdminLoginController', ['$scope', '$location', '$window', 'AuthAPIServices',
    function ($scope, $location, $window, AuthAPIServices) {
        $scope.user = null;
        $scope.incorrectLogin = false;

        init();

        function init() {
            if ($window.localStorage.token)
                $location.path('admin/home');
        };

        $scope.login = function () {
            AuthAPIServices.loginAdmin($scope.user)
            .then(function (response) {
                if (response)
                    $location.path('admin/home');
                else
                    $scope.incorrectLogin = true;
            });
        }
    }]);

}());