(function () {

    var module = angular.module('app.core');
    module.factory('MatchesServices', MatchesServices);
    MatchesServices.$inject = ['$q', '$http', 'configurationLinks'];

    function MatchesServices($q, $http, configurationLinks) {

        return {
            getMatches: function (userId) {
                var promise = $http.get(configurationLinks.matchesApi + "/user/" + userId);
                return promise;
            },
            createMatch: function (object, userId) {
                var promise = $http.post(configurationLinks.matchesApi + "/user/" + userId, JSON.stringify(object));
                return promise;
            },
            updateMatch: function (object, userId, matchId) {
                var promise = $http.put(configurationLinks.matchesApi + "/user/" + userId + "/" + matchId, JSON.stringify(object));
                return promise;
            },
            getMatch: function (matchId, userId) {
                var promise = $http.get(configurationLinks.matchesApi + "/user/" + userId + "/" + matchId);
                return promise;
            },
            updatePlayers: function (object, matchId, userId) {
                var promise = $http.put(configurationLinks.matchesApi + "/user/" + userId + "/" + matchId + "/invite", JSON.stringify(object));
                return promise;
            }
        };
    }
}
());