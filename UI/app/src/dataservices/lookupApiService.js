(function () {

    var module = angular.module('app.core');
    module.factory('lookupApiService', AuthAPIServices);
    AuthAPIServices.$inject = ['$http', 'configurationLinks'];

    function AuthAPIServices($http, configurationLinks) {
        var link = configurationLinks.lookupsApi;
        return {
            getCourtTypes: function () {
                return $http({ method: 'get', url: link + '/courttypes/' });
            },
            getFloorTypes: function (id) {
                return $http({ method: 'get', url: link + '/floortypes/' });
            }
        };


    }
}
());