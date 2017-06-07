(function () {
    var module = angular.module('app.admin.home');
    module.controller('AdminMainController', ['$scope', '$location', 'clientApiService',
    function ($scope, $location, clientApiService) {
        $scope.clients = null;
        $scope.criteria = "";
        $scope.currentPage = 1;
        $scope.totalPages = 0;
        $scope.totalCount = 0;
        $scope.pages = [];

        $scope.buscar = function () {
            $scope.currentPage = 1;
            refreshData();
        };

        $scope.previousPage = function () {
            if ($scope.currentPage > 1) {
                $scope.currentPage--;
                refreshData();
            }
        };

        $scope.nextPage = function () {
            if ($scope.currentPage < $scope.totalPages) {
                $scope.currentPage++;
                refreshData();
            }
        };

        $scope.switchToPage = function (p) {
            if ($scope.currentPage != p) {
                $scope.currentPage = p;
                refreshData();
            }
        }

        $scope.editClient = function (c) {
            $location.path('adminclient/' + c.idCliente);
        };

        init();

        function init() {
            refreshData();
        };

        function refreshData() {
            var paginationObject =
                {
                    currentPage: $scope.currentPage,
                    criteria: $scope.criteria
                };
            clientApiService.getClients(paginationObject)
            .then(function (response) {
                $scope.clients = response.data.results;
                $scope.totalPages = response.data.totalPages;
                $scope.totalCount = response.data.totalCount;
                $scope.currentPage = response.data.page;
                $scope.pages = buildPages();
            });
        };

        function buildPages() {
            var pages = [];
            for (var i = 1; i <= $scope.totalPages; i++) {
                var aux = { page: i, active: i == $scope.currentPage };
                pages.push(aux);
            }
            return pages;
        };

    }]);

}());