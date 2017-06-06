(function () {
    'use strict';

    angular
      .module('app.admin.login')
      .config(configuration)
      .run(runModule);

    /* @ngInject */
    function configuration($stateProvider, $urlRouterProvider, ROLES) {
        $stateProvider
          .state('adminlogin', {
              url: '/adminlogin',
              templateUrl: 'app/src/pages/admin-login/admin-login.html',
              controller: 'AdminLoginController',
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
