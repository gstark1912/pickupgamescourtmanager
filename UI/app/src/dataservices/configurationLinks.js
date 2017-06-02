(function () {
    var module = angular.module('app.core');
    module.factory('configurationLinks', ConfigurationLinks);

    function ConfigurationLinks() {
        var api = "http://localhost:55692"
        return {
            authorizationApi: api + "/authentication",
            clientsApi: api + "/clients"
        }
    };

}());