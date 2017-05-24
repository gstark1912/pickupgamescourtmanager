(function () {
    var module = angular.module("Brapp");
    module.controller('MatchController', ['$scope', '$http',
        'MatchesServices', 'ValuesServices', '$log',
    function ($scope, $http, MatchesServices, ValuesServices, $log) {
        $scope.title = "Crear Partido";
        $scope.existingMatch = null;
        $scope.match = {
            "Date": new Date()
        };
        ValuesServices.getCourts()
        .then(function (result) {
            $scope.courts = result.data;
        });

        ValuesServices.getMatchTypes()
        .then(function (result) {
            $scope.matchTypes = result.data;
        });

        // Day
        $scope.today = function () {
            $scope.dt = new Date();
        };
        $scope.today();
        $scope.format = 'dd/MM/yyyy';
        $scope.popup1 = {
            opened: false
        };
        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };
        $scope.dateOptions = {
            formatYear: 'yyyy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };
        $scope.altInputFormats = ['M!/d!/yyyy'];

        $scope.finalDate = '';

        // Time
        $scope.mytime = new Date();
        if ($scope.mytime.getMinutes() < 30)
            $scope.mytime.setMinutes(30);
        else {
            $scope.mytime.setMinutes(0);
            $scope.mytime.setHours($scope.mytime.getHours() + 1);
        }
        $scope.changed = function () {
            $scope.match.Date = $scope.dt;
            $scope.match.Date.setHours($scope.mytime.getHours());
            $scope.match.Date.setMinutes($scope.mytime.getMinutes());
        };
        $scope.hstep = 1;
        $scope.mstep = 30;

        $scope.saveMatch = function () {
            // check to make sure the form is completely valid
            if ($scope.match.$valid) {
                var object = {
                    "matchTypeId": $scope.match.matchTypeId,
                    "courtId": $scope.match.courtId,
                    "matchName": $scope.match.Name,
                    "matchDate": $scope.match.Date
                };
                MatchesServices.createMatch(object, 1);
            }
        }
    }]);

}());