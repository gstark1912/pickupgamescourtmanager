(function () {
    angular.module('gs.client.info')
    .directive('gsClientInfo', function () {
        return {
            restrict: 'E', //Default in 1.3+
            scope: {
                client: '='
            },
            templateUrl: "app/src/widgets/gs-client-info/gs-client-info.html",
            link: function (scope, element, attrs) {
                var list = element.find("ul");
            },
            controller: ['$scope', 'uiGmapGoogleMapApi', '$geolocation', function ($scope, uiGmapGoogleMapApi, $geolocation) {
                $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 15 };
                $scope.markers = [];
                $scope.mapevents = {
                    click: function (mapModel, eventName, originalEventArgs) {
                        $scope.markers = [{
                            id: 0,
                            coords: {
                                latitude: originalEventArgs[0].latLng.lat(),
                                longitude: originalEventArgs[0].latLng.lng()
                            }
                        }];
                        $scope.client.coordenates = originalEventArgs[0].latLng.lat() + ',' + originalEventArgs[0].latLng.lng();
                        $scope.$apply();
                    }
                }

                uiGmapGoogleMapApi.then(function (maps) {
                    var coord = $scope.client.coordenates;
                    if (coord === undefined) {
                        $geolocation.getCurrentPosition({
                            timeout: 60000,
                            maximumAge: 250,
                            enableHighAccuracy: true
                        }).then(function (position) {
                            $scope.myPosition = $geolocation.position;
                        });
                    }
                    else {
                        $scope.map.center.latitude = parseFloat(coord.split(',')[0]);
                        $scope.map.center.longitude = parseFloat(coord.split(',')[1]);
                        $scope.map.zoom = 15;
                        $scope.markers = [{
                            id: 0,
                            coords: {
                                latitude: parseFloat(coord.split(',')[0]),
                                longitude: parseFloat(coord.split(',')[1])
                            }
                        }];

                    }
                });

                $scope.$watch('myPosition.coords', function (newValue, oldValue) {
                    if (newValue != undefined) {
                        $scope.map = {
                            center: {
                                latitude: newValue.latitude,
                                longitude: newValue.longitude
                            },
                            zoom: 13
                        };
                    }
                }, true);
            }]
        };
    });
}());