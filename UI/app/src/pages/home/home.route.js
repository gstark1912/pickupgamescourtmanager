(function () {
    'use strict';

    angular
      .module('app.home')
      .config(configuration)
      .run(runModule);

    /* @ngInject */
    function configuration($stateProvider, $urlRouterProvider, ROLES) {
        $stateProvider
          .state('home', {
              url: '/home',
              templateUrl: 'app/src/pages/home/home.html',
              controller: 'MainController',
              data: {
                  pageTitle: 'Home',
                  authorized: [ROLES.REGISTERED.ROL]
              }
          });

        //$urlRouterProvider.otherwise('/home');
    }

    /* @ngInject */
    function runModule($rootScope) {
        $rootScope.$on('$stateChangeSuccess',
          function (event, current, previous) {
              var title = 'Brapp';
              if (current.data && current.data.pageTitle) {
                  title = current.data.pageTitle + ' - ' + title;
              }
              $rootScope.pageTitle = title;
          }
        );
    }
})();
