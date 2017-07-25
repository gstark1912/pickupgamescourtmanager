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
            controller: ['$scope', 'lookupApiService', '$uibModal', '$filter', function ($scope, lookupApiService, $uibModal, $filter) {

                $scope.floortypes = null;
                $scope.courttypes = null;

                $scope.editCourt = function (c) {
                    if (c === undefined) {
                        c = {
                            idClient: $scope.client.idClient,
                            idCourtType: 1,
                            idFloorType: 1
                        };
                    }
                    var modalInstance = $uibModal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'app/src/widgets/gs-client-courts/gs-court-edit.html',
                        controller: 'CourtEditController',
                        size: 'lg',
                        resolve: {
                            court: function () { return angular.copy(c); },
                            floortypes: function () { return $scope.floortypes },
                            courttypes: function () { return $scope.courttypes }
                        }
                    });

                    modalInstance.result.then(function (result) {
                        var index = $scope.client.court.map(function (v) { return v.idCourt }).indexOf(result.idCourt);
                        if (!~index)
                            result.idCourt = assignNewId();
                        $scope.client.court[~index ? index : $scope.client.court.length] = result
                    });
                };

                $scope.removeCourt = function (c) {
                    var index = $scope.client.court.map(function (v) { return v.idCourt }).indexOf(c.idCourt);
                    $scope.client.court.splice(index, 1);
                }

                lookupApiService
                    .getCourtTypes()
                    .then(function (response) {
                        $scope.courttypes = response.data;
                    });


                lookupApiService
                    .getFloorTypes()
                    .then(function (response) {
                        $scope.floortypes = response.data;
                    });

                function assignNewId() {
                    var length = ($scope.client.court.length) * -1;
                    while (~($scope.client.court.map(function (v) { return v.idCourt }).indexOf(length)))
                        length--;
                    return length;
                }
            }]
        };
    });
}());