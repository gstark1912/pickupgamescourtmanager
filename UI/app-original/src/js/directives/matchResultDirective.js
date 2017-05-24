(function () {
    var module = angular.module("Brapp");
    module.directive('matchResult', function () {
        return {
            restrict: 'E',
            scope: { m: '=' },
            templateUrl: 'app/src/js/directives/matchResult.html'
        };
    });
}());