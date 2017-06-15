(function () {
    angular.module('gs.client.courts')
    .controller('ScheduleEditController', ['$scope', '$uibModalInstance', 'schedule', '$uibModal',
    function ($scope, $uibModalInstance, schedule, $uibModal) {
        $scope.schedule = schedule;
        $scope.noonbreak = false;
        $scope.days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo', 'Feriados'];
        $scope.leave = function () {
            $uibModalInstance.dismiss('cancel');
        };


        $scope.save = function () {
            if ($scope.scheduleform.$valid) {
                $uibModalInstance.close(court);
            }
        };
    }]);
}());