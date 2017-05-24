(function () {
    var module = angular.module('app.matchTeams');
    module.controller('MatchTeamsController', ['$scope', '$http',
        'MatchesServices', '$location', '$stateParams', '$uibModal',
    function ($scope, $http, MatchesServices, $location, $stateParams, $uibModal) {
        $scope.matchId = $stateParams.matchId;
        $scope.match = null;

        MatchesServices.getMatch($scope.matchId, 1)
            .then(function (result) {
                $scope.match = result.data;
                $scope.awayTeam = result.data.teams.away;
                $scope.homeTeam = result.data.teams.home;
            });

        $scope.awayTeam = null;
        $scope.homeTeam = null;

        $scope.switchToHome = function (aux) {
            var player = $scope.awayTeam.players.filter(function (obj) {
                return obj.id == aux;
            });

            $scope.awayTeam.players = $scope.awayTeam.players.filter(function (obj) {
                return obj.id != aux;
            });

            $scope.homeTeam.players.push(player[0]);
        };

        $scope.switchToAway = function (aux) {
            var player = $scope.homeTeam.players.filter(function (obj) {
                return obj.id == aux;
            });

            $scope.homeTeam.players = $scope.homeTeam.players.filter(function (obj) {
                return obj.id != aux;
            });

            $scope.awayTeam.players.push(player[0]);
        };

        $scope.deletePlayer = function (aux) {
            $scope.homeTeam.players = $scope.homeTeam.players.filter(function (obj) {
                return obj.id != aux;
            });

            $scope.awayTeam.players = $scope.awayTeam.players.filter(function (obj) {
                return obj.id != aux;
            });
        };

        $scope.updateMatch = function () {
            $scope.match.teams.away = $scope.awayTeam;
            $scope.match.teams.home = $scope.homeTeam;
            var result = MatchesServices.updatePlayers($scope.match.teams, $scope.match.matchId, 1).then(function (response) {
                $location.path('/partido/' + $scope.match.matchId)
            });
        };

        $scope.invitePlayers = function () {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'app/src/pages/player-invite/player-invite.html',
                controller: 'PlayerInviteController',
                size: 'lg',
                resolve: {
                    players: function () { return $scope.awayTeam.players.concat($scope.homeTeam.players); }
                }
            });

            modalInstance.result.then(function (result) {
                console.log(result);
            });
        }


    }]);

}());