(function () {
    angular.module('gs.client.schedule')
    .directive('gsClientSchedule', function () {
        return {
            restrict: 'E', //Default in 1.3+
            scope: {
                client: '='
            },
            templateUrl: "app/src/widgets/gs-client-schedule/gs-client-schedule.html",
            link: function (scope, element, attrs) {
                var list = element.find("ul");
            },
            controller: ['$scope', function ($scope) {
                $scope.demo1 = {
                    min: 06,
                    max: 24
                };
            }]
        };
    });
}());