(function () {
    'use strict';

    angular
      .module('app.matchInvite')
      .config(configuration)
      .run(runModule);

    /* @ngInject */
    function configuration($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('matchInvite', {
              url: '/invitarPartido/:matchId',
              templateUrl: 'app/src/pages/match-invite/match-invite.html',
              controller: 'MatchInviteController',
              data: {
                  pageTitle: 'Invitar a Partido'
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
