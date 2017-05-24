(function () {
    'use strict';

    angular
      .module('app.matchTeams')
      .config(configuration)
      .run(runModule);

    /* @ngInject */
    function configuration($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('matchTeams', {
              url: '/equiposPartido/:matchId',
              templateUrl: 'app/src/pages/match-teams/match-teams.html',
              controller: 'MatchTeamsController',
              data: {
                  pageTitle: 'Equipos de Partido'
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
