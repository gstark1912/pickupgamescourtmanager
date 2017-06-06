(function () {
    var module = angular.module('app.admin.home');
    module.controller('AdminMainController', ['$scope', '$http', 'clientApiService',
    function ($scope, $http, clientApiService) {
        $scope.clients = null;

        init();

        function init() {
            refreshData();
        };

        function refreshData() {
            clientApiService.getClients()
            .then(function (response) {
                $scope.clients = response.data;
            });
        };

    }]);

}());