(function () {
    var module = angular.module("dttMailSender");
    module.controller('ConfirmationController', confirmationController);
    confirmationController.$inject = ['$scope', '$http', '$uibModalInstance', 'message'];

    function confirmationController($scope, $http, $uibModalInstance, message) {
        $scope.message = message;
        $scope.ok = function () {
            $uibModalInstance.close(true);
        };
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    };
}());