(function () {
    var module = angular.module('app.admin.client');
    module.controller('AdminClientController', ['$scope', '$location', '$stateParams', 'clientApiService',
    function ($scope, $location, $stateParams, clientApiService) {
        $scope.idClient = $stateParams.idClient;
        $scope.client = null;

        clientApiService
            .getClient($scope.idClient)
            .then(function (response) {
                $scope.client = response.data;
            });
    }]);

}());