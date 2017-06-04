(function () {
    'use strict';

    angular
      .module('app.admin.login')
      .config(configuration)
      .run(runModule);

    /* @ngInject */
    function configuration($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('adminlogin', {
              url: 'admin/login',
              templateUrl: 'app/src/pages/admin-login/admin-login.html',
              controller: 'AdminLoginController',
              data: {
                  pageTitle: 'Login'
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
