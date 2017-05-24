(function () {
    var module = angular.module('app.playerInvite');
    module.controller('PlayerInviteController', ['$scope', '$http',
        '$uibModalInstance', 'players',
    function ($scope, $http, $uibModalInstance, players) {
        $scope.players = players;
        //$uibModalInstance.close(true);
        $scope.photoUrl = "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf0/v/t1.0-1/p50x50/1962745_10153213031333126_2195391086615378261_n.jpg?oh=9c9c38682ce2c2eb2ba9eb39410e8180&oe=5844CA7C&__gda__=1482355185_7b26647d4b93b0f8ff5f7f34e9d0c5f3"
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

        $scope.users = [
            {
                "name": "Pepe"
            },
            {
                "name": "Marta"
            },
            {
                "name": "Juan"
            },
            {
                "name": "Uru"
            }
        ]

    }]);

}());