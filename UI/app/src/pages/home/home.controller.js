(function () {
    var module = angular.module('app.home');
    module.controller('MainController', ['$scope', '$http', 'MatchesServices', 
    function ($scope, $http, MatchesServices) {
        $scope.pendingMatches = null;
        MatchesServices.getMatches(1)
            .then(function (result) {
                $scope.pendingMatches = result.data.pendingMatches;
            });
    }]);

}());