(function () {
    angular.module('gs.client.schedule')
    .directive('gsClientSchedule', function () {
        return {
            restrict: 'E', //Default in 1.3+
            scope: {
                client: '='
            },
            templateUrl: "app/src/widgets/gs-client-schedule/gs-client-schedule.html",
            link: function (scope, element, attrs) {
                var list = element.find("ul");
            },
            controller: ['$scope', '$uibModal', function ($scope, $uibModal) {

                $scope.editSchedule = function (c) {
                    if (c === undefined) {
                        c = {
                            idClient: $scope.client.idClient
                        };
                    }
                    var modalInstance = $uibModal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'app/src/widgets/gs-client-schedule/gs-schedule-edit.html',
                        controller: 'ScheduleEditController',
                        size: 'lg',
                        resolve: {
                            schedule: function () { return angular.copy(c); },
                        }
                    });

                    modalInstance.result.then(function (result) {
                        var index = $scope.client.clientSchedule.map(function (v) { return v.idClientSchedule }).indexOf(result.idClientSchedule);
                        if (!~index)
                            result.idClientSchedule = assignNewId();
                        $scope.client.clientSchedule[~index ? index : $scope.client.clientSchedule.length] = result
                    });
                };

                $scope.removeSchedule = function (c) {
                    var index = $scope.client.clientSchedule.map(function (v) { return v.idSchedule }).indexOf(c.idClientSchedule);
                    $scope.client.clientSchedule.splice(index, 1);
                }

                function assignNewId() {
                    var length = ($scope.client.clientSchedule.length) * -1;
                    while (~($scope.client.clientSchedule.map(function (v) { return v.idClientSchedule }).indexOf(length)))
                        length--;
                    return length;
                }
            }]
        };
    });
}());