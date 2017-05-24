(function () {
    var module = angular.module("dttMailSender");
    module.controller('ProjectEditController', projectEditController);
    projectEditController.$inject = ['ProjectServices', '$scope', '$http', '$routeParams', '$uibModal'];

    function projectEditController(ProjectServices, $scope, $http, $routeParams, $uibModal) {
        $scope.project = ProjectServices.getId($routeParams.projectId);
        $scope.removeLead = removeLeadDialog;
        $scope.removeFeature = removeFeatureDialog;
        $scope.editFeature = editFeature;

        function removeFeatureDialog(id) {
            confirmDialog('Are you sure you want to remove this Feature?', removeFeature, id);
        };

        function removeFeature(id) {
            var result = [];
            for (var i = 0; i < $scope.project.projectFeatures.length; i++) {
                if ($scope.project.projectFeatures[i].idProjectFeature != id)
                    result.push($scope.project.projectFeatures[i]);
            }
            $scope.project.projectFeatures = result;
        };

        function removeLeadDialog(id) {
            confirmDialog('Are you sure you want to remove this Leader?', removeLead, id);
        };

        function removeLead(id) {
            var result = [];
            for (var i = 0; i < $scope.project.leads.length; i++) {
                if ($scope.project.leads[i].idLead != id)
                    result.push($scope.project.leads[i]);
            }
            $scope.project.leads = result;
        };

        function confirmDialog(message, success, id) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'app/views/common/confirmationModal.html',
                controller: 'ConfirmationController',
                size: 'sm',
                resolve: {
                    message: function () { return message; }
                }
            });

            modalInstance.result.then(function (result) {
                success(id);
            });
        };

        function editFeature(id) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'app/views/projectFeature.html',
                controller: 'ProjectFeatureController',
                size: 'lg',
                resolve: {
                    projectFeature: function () {
                        return getProjectFeature(id);
                    }
                }
            });

            modalInstance.result.then(function (feature) {
                if (id != 0) {
                    var features = $scope.project.projectFeatures;
                    var result = [];
                    for (var i = 0; i < features.length; i++) {
                        if (features[i].idProjectFeature == feature.idProjectFeature) {
                            features[i] = feature;
                        }
                        result.push(features[i]);
                    }
                    $scope.project.projectFeatures = result;
                }
                else {
                    $scope.project.projectFeatures.push(feature)
                }
            });
        };

        function getProjectFeature(id) {
            var features = $scope.project.projectFeatures;
            for (var i = 0; i < features.length; i++) {
                if (features[i].idProjectFeature === id)
                    return features[i];
            }
            return null;
        };
    };
}());