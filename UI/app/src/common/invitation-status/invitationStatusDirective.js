(function () {
    var module = angular.module('app.core');
    module.directive('invitationStatus', function () {
        return {
            restrict: 'E',
            scope: { i: '=i' },
            replace: true,
            template: function (tElement, tAttrs) {
                return '<img src="{{imageSrc()}}"></img>';
            },
            link: function (scope, element, attrs) {
                // unwrap the function
                scope.imageSrc = function () {
                    if (scope.i == 1)
                        return "app/src/assets/img/pending.png";
                    if (scope.i == 2)
                        return "app/src/assets/img/confirmed.png";
                    if (scope.i == 3)
                        return "app/src/assets/img/rejected.png";
                };
            }
        };
    });
}());