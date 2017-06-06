(function () {

    var module = angular.module('app.core');
    module.factory('clientApiService', AuthAPIServices);
    AuthAPIServices.$inject = ['$http', 'configurationLinks'];

    function AuthAPIServices($http, configurationLinks) {

        return {
            getClients: function () {
                var link = configurationLinks.clientsApi;
                return $http({ method: 'post', url: link });
                //.then(function (response) {
                //    return response;
                //});
            }
        };


    }
}
());