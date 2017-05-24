(function () {
    var app = angular
        .module("dttMailSender", ['ngRoute', 'ui.bootstrap',
            'facebook']);

    app.config(['FacebookProvider',
        function (FacebookProvider) {
            var myAppId = '1756722441212827';

            // You can set appId with setApp method
            // FacebookProvider.setAppId('myAppId');

            /**
             * After setting appId you need to initialize the module.
             * You can pass the appId on the init method as a shortcut too.
             */
            FacebookProvider.init(myAppId);

        }
    ]);

    app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/home.html',
                controller: 'HomeController'
            })
            .when('/projects/', {
                templateUrl: 'app/views/projectList.html',
                controller: 'ProjectListController'
            })
            .when('/projects/:projectId', {
                templateUrl: 'app/views/projectEdit.html',
                controller: 'ProjectEditController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
})();