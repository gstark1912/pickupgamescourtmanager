(function () {
    var module = angular.module("dttMailSender");
    module.controller('ProjectFeatureController', projectFeatureController);
    projectFeatureController.$inject = ['$scope', '$http', '$uibModalInstance', 'projectFeature'];

    function projectFeatureController($scope, $http, $uibModalInstance, projectFeature) {
        if (projectFeature != null)
            $scope.feature = { "idProjectFeature": projectFeature.idProjectFeature, "description": projectFeature.description, "mailtype": projectFeature.mailtype };
        else
            $scope.feauture = {
                "idProjectFeature": 0,
                "description": null,
                "mailtype": null
            };
        $scope.ok = function () {
            $uibModalInstance.close($scope.feature);
        };
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    };
}());