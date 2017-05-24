(function () {
    'use strict';

    angular
      .module('app.match')
      .config(configuration)
      .run(runModule);

    /* @ngInject */
    function configuration($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('match', {
              url: '/crearpartido/{matchId}',
              templateUrl: 'app/src/pages/match-create/match-create.html',
              controller: 'MatchController',
              data: {
                  pageTitle: 'Nuevo Partido'
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
