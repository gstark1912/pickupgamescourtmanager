(function () {

    var module = angular.module("Brapp");
    module.factory('MatchesServices', MatchesServices);
    MatchesServices.$inject = ['$q', '$http', 'configurationLinks'];

    function MatchesServices($q, $http, configurationLinks) {

        return {
            getMatches: function (userId) {
                var promise = $http.get(configurationLinks.matchesApi + "/user/" + userId);
                return promise;
            },
            createMatch: function (object, userId) {
                var promise = $http.post(configurationLinks.matchesApi + "/user/" + userId, JSON.stringify(object))
                    .success(function (data) {
                        return data;
                    });
            }
        };
    }
}
());