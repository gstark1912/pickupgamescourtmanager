(function () {
    'use strict';

    angular
      .module('app.admin.client')
      .config(configuration)
      .run(runModule);

    /* @ngInject */
    function configuration($stateProvider, $urlRouterProvider, ROLES) {
        $stateProvider
          .state('admin.client', {
              url: '/adminclient/:idClient',
              templateUrl: 'app/src/pages/admin-client/admin-client.html',
              controller: 'AdminClientController',
              data: {
                  pageTitle: 'Clientes',
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
