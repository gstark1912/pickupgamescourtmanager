(function () {
    var module = angular.module("dttMailSender");
    module.controller('HomeController', ['$scope', '$http', 'Facebook',
        'AuthAPIServices',
    function ($scope, $http, Facebook, AuthAPIServices) {

        $scope.loginStatus = 'disconnected';
        $scope.facebookIsReady = false;
        $scope.user = null;

        $scope.$watch(function (scope) { return scope.facebookIsReady },
              function (newValue, oldValue) {
                  $scope.login();
              });

        $scope.$watch(function (scope) { return scope.loginStatus },
              function (newValue, oldValue) {
                  if (newValue == 'connected') {
                      $scope.api();                      
                  }
                  else {
                      $scope.user = null;
                  }
              });

        $scope.login = function () {
            Facebook.login(function (response) {
                $scope.loginStatus = response.status;
            });
        };

        $scope.removeAuth = function () {
            Facebook.api({
                method: 'Auth.revokeAuthorization'
            }, function (response) {
                Facebook.getLoginStatus(function (response) {
                    $scope.loginStatus = response.status;
                });
            });
        };

        $scope.api = function () {
            Facebook.api('/me?fields=name,email,gender,first_name,last_name,picture,birthday', function (response) {
                $scope.user = response;
                var data = AuthAPIServices.loginOrRegister($scope.user);
                if (data == false)
                    $scope.removeAuth();
            });
        };

        $scope.$watch(function () {
            return Facebook.isReady();
        }, function (newVal) {
            if (newVal) {
                $scope.facebookIsReady = true;
            }
        }
        );

    }]);


}());