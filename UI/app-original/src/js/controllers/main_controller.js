(function () {
    var module = angular.module("Brapp");
    module.controller('MainController', ['$scope', '$http', 'MatchesServices', 
    function ($scope, $http, MatchesServices) {
        $scope.pendingMatches = null;
        MatchesServices.getMatches(1)
            .then(function (result) {
                $scope.pendingMatches = result.data.pendingMatches;
            });
    }]);

}());