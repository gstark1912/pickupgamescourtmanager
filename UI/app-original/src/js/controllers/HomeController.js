(function () {
    var module = angular.module("Brapp");
    module.controller('HomeController', ['$scope', '$http', 'Facebook',
        'AuthAPIServices', 'uiGmapGoogleMapApi', '$geolocation',
    function ($scope, $http, Facebook, AuthAPIServices, uiGmapGoogleMapApi, $geolocation) {
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
            }, { scope: 'public_profile,user_friends,user_about_me,email' });
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
                debugger;
                $scope.user.photoUrl = response.picture.data.url;
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

        $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 15 };

        $geolocation.getCurrentPosition({
            timeout: 60000,
            maximumAge: 250,
            enableHighAccuracy: true
        }).then(function (position) {
            $scope.myPosition = $geolocation.position;
        });

        $scope.$watch('myPosition.coords',
            function (newValue, oldValue) {
                if (newValue != undefined) {
                    $scope.map = {
                        center: {
                            latitude: newValue.latitude,
                            longitude: newValue.longitude
                        },
                        zoom: 15
                    };
                }
            }, true);

        // uiGmapGoogleMapApi is a promise.
        // The "then" callback function provides the google.maps object.
        uiGmapGoogleMapApi.then(function (maps) {

        });
    }]);


}());