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
                $scope.pepe = function () {
                    debugger;
                    var a = 1;
                }
                $scope.map = { center: { latitude: -34.6076282, longitude: -58.4530358 }, zoom: 13 };
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
                    if ($scope.client.coordenates != null) {
                        var coord = $scope.client.coordenates;
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

            }]
        };
    });
}());