(function () {

    var module = angular.module('app.core');
    module.factory('clientApiService', AuthAPIServices);
    AuthAPIServices.$inject = ['$http', 'configurationLinks'];

    function AuthAPIServices($http, configurationLinks) {
        var link = configurationLinks.clientsApi;
        return {
            getClients: function (data) {
                return $http({ method: 'post', url: link, data: data });
            },
            getClient: function (id) {
                return $http({ method: 'get', url: link + '/admin/' + id });
            }
        };


    }
}
());