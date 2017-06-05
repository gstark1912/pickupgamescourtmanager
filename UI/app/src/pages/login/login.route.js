(function () {
    'use strict';

    angular
      .module('app.login')
      .config(configuration)
      .run(runModule);

    /* @ngInject */
    function configuration($stateProvider, $urlRouterProvider, CONFIG, ROLES) {
        $stateProvider
          .state('login', {
              url: '/login',
              templateUrl: 'app/src/pages/login/login.html',
              controller: 'LoginController',
              data: {
                  pageTitle: 'Login',
                  authorized: [ROLES.GUEST.ROL]
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
