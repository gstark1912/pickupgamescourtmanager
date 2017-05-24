(function () {
    'use strict';

    angular
      .module('app.matchView')
      .config(configuration)
      .run(runModule);

    /* @ngInject */
    function configuration($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('matchView', {
              url: '/partido/:matchId',
              templateUrl: 'app/src/pages/match-view/match-view.html',
              controller: 'MatchViewController',
              data: {
                  pageTitle: 'Partido'
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
