(function () {
    var module = angular.module("dttMailSender");
    module.controller('ProjectListController', projectListController);
    projectListController.$inject = ['ProjectServices', '$scope', '$http'];

    function projectListController(ProjectServices, $scope, $http) {
        $scope.projects = ProjectServices.getAll();
    };
}());