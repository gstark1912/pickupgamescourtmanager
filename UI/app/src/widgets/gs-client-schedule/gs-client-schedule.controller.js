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

                $scope.days = [
                    { "label": 'Lunes', "value": 1, "enabled": false },
                    { "label": 'Martes', "value": 2, "enabled": false },
                    { "label": 'Miercoles', "value": 3, "enabled": false },
                    { "label": 'Jueves', "value": 4, "enabled": false },
                    { "label": 'Viernes', "value": 5, "enabled": false },
                    { "label": 'Sabado', "value": 6, "enabled": false },
                    { "label": 'Domingo', "value": 7, "enabled": false },
                    { "label": 'Feriados', "value": 8, "enabled": false }
                ];

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
                            days: function () { return angular.copy($scope.days); }
                        }
                    });

                    modalInstance.result.then(function (result) {
                        var list = [];
                        if (result.length > 0)
                            list = result;
                        else
                            list.push(result);

                        angular.forEach(list, function (value, key) {
                            var index = $scope.client.clientSchedule.map(function (v) { return v.idDay }).indexOf(value.idDay);
                            if (!~index)
                                value.idClientSchedule = assignNewId();
                            $scope.client.clientSchedule[~index ? index : $scope.client.clientSchedule.length] = value;
                        });
                        console.log($scope.client.clientSchedule);
                    });
                };

                $scope.removeSchedule = function (c) {
                    var index = $scope.client.clientSchedule.map(function (v) { return v.idDay }).indexOf(c.idDay);
                    $scope.client.clientSchedule.splice(index, 1);
                }

                function assignNewId() {
                    var length = ($scope.client.clientSchedule.length + 1) * -1;
                    while (~($scope.client.clientSchedule.map(function (v) { return v.idClientSchedule }).indexOf(length)))
                        length--;
                    return length;
                };
            }]
        };
    });
}());