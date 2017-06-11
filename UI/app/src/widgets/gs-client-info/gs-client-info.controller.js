(function () {
    angular.module('gs.client.info')
    .directive('gsClientInfo', function () {
        return {
            restrict: 'E', //Default in 1.3+
            scope: {
                client: '='
            },
            templateUrl: "app/src/widgets/gs-client-info/gs-client-info.html",
            link: function (scope, element, attrs) {
                var list = element.find("ul");
            }
        };                
    });
}());