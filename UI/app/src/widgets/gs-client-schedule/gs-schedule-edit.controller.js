(function () {
    angular.module('gs.client.courts')
    .controller('ScheduleEditController', ['$scope', '$uibModalInstance', 'schedule', 'days', '$uibModal',
    function ($scope, $uibModalInstance, schedule, days, $uibModal) {
        $scope.schedule = schedule;
        $scope.days = days;

        if (schedule.startTime === undefined) {
            $scope.schedule.startTime = "08:00";
            $scope.schedule.endTime = "00:00";
            $scope.schedule.startTimeBreak = undefined;
            $scope.schedule.endTimeBreak = undefined;
            $scope.schedule.noonbreak = false;
        }
        else {
            if (schedule.startTimeBreak != undefined)
                $scope.schedule.noonbreak = true;
        }

        $scope.leave = function () {
            $uibModalInstance.dismiss('cancel');
        };


        $scope.save = function () {
            if ($scope.scheduleform.$valid) {
                if (!$scope.schedule.noonbreak) {
                    $scope.schedule.startTimeBreak = undefined;
                    $scope.schedule.endTimeBreak = undefined;
                }

                if ($scope.schedule.idDay === undefined) {
                    var response = [];
                    var days = $scope.days.filter(function (d) {
                        return (d.enabled == true);
                    });
                    angular.forEach(days, function (value, key) {
                        var aux = angular.copy($scope.schedule);
                        aux.idDay = value.value;
                        response.push(aux);
                    });
                    $uibModalInstance.close(response);
                }
                else
                    $uibModalInstance.close($scope.schedule);
            }
        };
    }]);
}());