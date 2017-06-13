(function () {
    angular.module('gs.client.courts')
    .controller('CourtEditController', ['$scope', '$uibModalInstance', 'court', 'floortypes', 'courttypes',
    function ($scope, $uibModalInstance, court, floortypes, courttypes) {
        $scope.court = court;
        $scope.floortypes = floortypes;
        $scope.courttypes = courttypes;
        $scope.leave = function () {
            $uibModalInstance.dismiss('cancel');
        };

        $scope.save = function () {
            if ($scope.courtform.$valid) {
                $uibModalInstance.close(court);
            }
        };
    }]);
}());