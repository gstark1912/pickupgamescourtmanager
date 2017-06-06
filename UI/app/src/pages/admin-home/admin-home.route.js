(function () {
    'use strict';

    angular
      .module('app.admin.home')
      .config(configuration)
      .run(runModule);

    /* @ngInject */
    function configuration($stateProvider, $urlRouterProvider, ROLES) {
        $stateProvider
          .state('adminHome', {
              url: '/adminhome',
              templateUrl: 'app/src/pages/admin-home/admin-home.html',
              controller: 'AdminMainController',
              data: {
                  pageTitle: 'Home',
                  authorized: [ROLES.ADMIN.ROL]
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
