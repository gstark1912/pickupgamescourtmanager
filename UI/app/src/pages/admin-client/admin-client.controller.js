(function () {
    var module = angular.module('app.admin.client');
    module.controller('AdminClientController', ['$scope', '$location', '$stateParams', 'clientApiService',
    function ($scope, $location, $stateParams, clientApiService) {
        $scope.idClient = $stateParams.idClient;
        $scope.client = {
            court: [],
            clientSchedule: []
        };
        $scope.errors = [];

        if ($scope.idClient !== "") {
            clientApiService
                .getClient($scope.idClient)
                .then(function (response) {
                    $scope.client = response.data;
                });
        }

        $scope.sendForm = function () {
            $scope.errors = [];

            //$scope.validInfo();
            //$scope.validSchedule();
            //$scope.validNotes();
            //$scope.validCourts();
            var saveFunction;
            if ($scope.idClient === "")
                saveFunction = clientApiService.insertClientAsAdmin;
            else
                saveFunction = clientApiService.updateClientAsAdmin;

            saveFunction($scope.client)
                .then(function (response) {
                    if (response.status === 400) {
                        $scope.errors = response.data.errors;
                    }
                });
        }
    }]);

}());