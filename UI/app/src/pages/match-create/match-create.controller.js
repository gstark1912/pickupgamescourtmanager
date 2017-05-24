(function () {
    var module = angular.module('app.match');
    module.controller('MatchController', ['$scope', '$window',
        'MatchesServices', 'ValuesServices', '$log', '$location', '$stateParams',
    function ($scope, $window, MatchesServices, ValuesServices, $log, $location, $stateParams) {
        $scope.match = {};
        $scope.match.Date = new Date();
        $scope.match.courtId = "";
        $scope.match.matchTypeId = "";
        $scope.error = null;

        $scope.goBack = function () {
            $window.history.back();
        };

        $scope.closeAlert = function (index) {
            $scope.error = null;
        };

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


        ValuesServices.getCourts()
        .then(function (result) {
            $scope.courts = result.data;
        });

        ValuesServices.getMatchTypes()
        .then(function (result) {
            $scope.matchTypes = result.data;
        });

        if ($stateParams.matchId == "")
            $scope.title = "Crear Partido";
        else {
            $scope.title = "Editar Partido";
            MatchesServices.getMatch($stateParams.matchId, 1)
               .then(function (result) {
                   $scope.existingMatch = result.data;
                   $scope.match.Name = result.data.matchName;
                   $scope.match.courtId = result.data.courtId;
                   $scope.match.matchTypeId = result.data.matchTypeId;
                   // Removing UTC shit
                   var date = new Date(result.data.matchDate);
                   $scope.mytime = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
                   $scope.dt = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
                   $scope.changed();
               });
        };

        $scope.saveMatch = function () {
            // check to make sure the form is completely valid
            if ($scope.match.$valid) {
                var object = {
                    "matchTypeId": $scope.match.matchTypeId,
                    "courtId": $scope.match.courtId,
                    "matchName": $scope.match.Name,
                    "matchDate": $scope.match.Date
                };
                if ($stateParams.matchId == "") {
                    var result = MatchesServices.createMatch(object, 1)
                        .success(function (response) {
                            debugger;
                            $location.path('/partido/' + response);
                        })
                        .error(function (error, status) {
                            $scope.error = error;
                        })
                }
                else {
                    var result = MatchesServices.updateMatch(object, 1, $stateParams.matchId)
                        .success(function (response) {
                            $location.path('/partido/' + $stateParams.matchId);
                        })
                        .error(function (error, status) {
                            $scope.error = error.message;
                        });
                }


            }
        }
    }]);

}());