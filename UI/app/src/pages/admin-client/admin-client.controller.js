(function () {
    var module = angular.module('app.admin.client');
    module.controller('AdminClientController', ['$scope', '$location', '$stateParams', 'clientApiService',
    function ($scope, $location, $stateParams, clientApiService) {
        $scope.idClient = $stateParams.idClient;
        $scope.client = {};

        if ($scope.idClient !== "") {
            clientApiService
                .getClient($scope.idClient)
                .then(function (response) {
                    $scope.client = response.data;
                });
        }

        $scope.sendForm = function () {
            console.log($scope.client);
            clientApiService
                .updateClientAsAdmin($scope.client)
                .then(function (response) {
                    console.log(response);
                });
        }
    }]);

}());