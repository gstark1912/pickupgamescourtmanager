(function () {
    angular.module('gs.client.courts')
    .directive('gsClientCourts', function () {
        return {
            restrict: 'E', //Default in 1.3+
            scope: {
                client: '='
            },
            templateUrl: "app/src/widgets/gs-client-courts/gs-client-courts.html",
            link: function (scope, element, attrs) {
                var list = element.find("ul");
            },
            controller: ['$scope', 'lookupApiService', function ($scope, lookupApiService) {
                $scope.floortypes = null;
                $scope.courttypes = null;


                lookupApiService
                    .getCourtTypes()
                    .then(function (response) {
                        console.log(response);
                        $scope.floortypes = response.data;
                    });


                lookupApiService
                    .getFloorTypes()
                    .then(function (response) {
                        console.log(response);
                        $scope.courttypes = response.data;
                    });
            }]
        };
    });
}());