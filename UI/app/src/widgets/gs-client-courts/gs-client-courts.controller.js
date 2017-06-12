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
            controller: ['$scope', 'lookupApiService', '$uibModal', function ($scope, lookupApiService, $uibModal) {
                $scope.floortypes = null;
                $scope.courttypes = null;

                $scope.editCourt = function (c) {
                    var modalInstance = $uibModal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'app/src/widgets/gs-client-courts/gs-court-edit.html',
                        controller: 'CourtEditController',
                        size: 'lg',
                        resolve: {
                            court: function () { return c; },
                            floortypes: function () { return $scope.floortypes },
                            courttypes: function () { return $scope.courttypes }
                        }
                    });

                    modalInstance.result.then(function (result) {
                        console.log(result);
                    });
                };

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