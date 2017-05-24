(function () {
    var module = angular.module('app.matchView');
    module.controller('MatchViewController', ['$scope', '$http',
        'MatchesServices', '$location', '$stateParams', '$filter',
    function ($scope, $http, MatchesServices, $location, $stateParams, $filter) {
        $scope.matchId = $stateParams.matchId;
        $scope.match = null;
        $scope.playersInvited = null;
        $scope.players = null;
        $scope.isOwner = true;
        $scope.invitePlayers = function () {
            $location.path('/invitarPartido/' + $scope.matchId)
        };
        $scope.editMatch = function () {
            $location.path('/crearpartido/' + $scope.matchId)
        };

        MatchesServices.getMatch($scope.matchId, 1)
            .then(function (result) {
                $scope.match = result.data;
                $scope.playersInvited = $scope.match.confirmedPlayers + '/' + getInvitados($scope.match);
                $scope.players = $scope.match.invites;
                $scope.isOwner = $scope.match.isOwner;
            });;
    }]);

    function getInvitados(match) {
        var count = 0;
        count = match.invites.length;
        return count;
    }

}());