(function () {
    var module = angular.module('app.core');
    module.directive('matchResult', function () {
        return {
            restrict: 'E',
            scope: { m: '=' },
            templateUrl: 'app/src/common/match-result/matchResult.html'
        };
    });
}());