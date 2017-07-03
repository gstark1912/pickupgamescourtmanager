(function () {
    angular.module('gs.client.notes')
    .directive('gsClientNotes', function () {
        return {
            restrict: 'E', //Default in 1.3+
            scope: {
                client: '='
            },
            templateUrl: "app/src/widgets/gs-client-notes/gs-client-notes.html",
            link: function (scope, element, attrs) {
                var list = element.find("ul");
            },
            controller: ['$scope', '$uibModal', function ($scope) {
                $scope.text = "";

                $scope.addComment = function () {
                    if ($scope.text !== "") {
                        $scope.client.clientNotes.push({ idClient: $scope.client.idClient, text: $scope.text });
                        $scope.text = "";
                    }
                }
            }]
        };
    });
}());