(function () {
    var module = angular.module('app.matchInvite');
    module.controller('MatchInviteController', ['$scope', '$http',
        'MatchesServices', '$location', '$stateParams', '$uibModal',
    function ($scope, $http, MatchesServices, $location, $stateParams, $uibModal) {
        $scope.matchId = $stateParams.matchId;
        $scope.match = null;
        $scope.playersInvited = null;
        $scope.players = null;
        $scope.isOwner = true;

        MatchesServices.getMatch($scope.matchId, 1)
            .then(function (result) {
                $scope.match = result.data;
                $scope.playersInvited = $scope.match.confirmedPlayers + '/' + getInvitados($scope.match);
                $scope.players = $scope.match.invites;
                $scope.isOwner = $scope.match.isOwner;
            });;

        $scope.deletePlayer = function (aux) {
            $scope.players = $scope.players.filter(function (obj) {
                return obj.id != aux;
            });
        };

        $scope.invitePlayers = function () {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'app/src/pages/player-invite/player-invite.html',
                controller: 'PlayerInviteController',
                size: 'lg',
                resolve: {
                    players: function () { return $scope.players; }
                }
            });

            modalInstance.result.then(function (result) {
                console.log(result);
            });
        }

    }]);

    function getInvitados(match) {
        var count = 0;
        count = match.invites.length;
        return count;
    }

}());