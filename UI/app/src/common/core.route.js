(function () {
    'use strict';

    angular
      .module('app.core')
      .config(configuration)
      .run(runModule);

    /* @ngInject */
    function configuration($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('404', {
              url: '/404',
              templateUrl: 'app/src/common/core.html',
              data: {
                  pageTitle: '404 - Error'
              }
          });

        $urlRouterProvider.otherwise('/home');
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
