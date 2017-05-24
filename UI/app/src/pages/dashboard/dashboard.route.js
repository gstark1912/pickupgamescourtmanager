(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .config(configuration)
    .run(runModule);

  /* @ngInject */
  function configuration($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/home',
        templateUrl: 'app/src/pages/dashboard/dashboard.html',
        data: {
          pageTitle: 'Home'
        }
      });

    $urlRouterProvider.otherwise('/home');
  }

  /* @ngInject */
  function runModule($rootScope) {
    $rootScope.$on('$stateChangeSuccess',
      function(event, current, previous) {
        var title = 'Payables';
        if (current.data && current.data.pageTitle) {
          title = current.data.pageTitle + ' - ' + title;
        }
        $rootScope.pageTitle = title;
      }
    );
  }
})();
