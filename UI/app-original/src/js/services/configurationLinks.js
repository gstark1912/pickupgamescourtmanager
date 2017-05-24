(function () {
    var module = angular.module("Brapp");
    module.factory('configurationLinks', ConfigurationLinks);

    function ConfigurationLinks() {
        var api = "http://localhost:55692/api"
        return {
            matchesApi: api + "/matches",
            usersApi: api + "/users",
            valuesApi: api + "/values"
        }
    };

}());