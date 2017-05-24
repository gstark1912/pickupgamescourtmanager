(function () {

    var module = angular.module('app.core');
    module.factory('ValuesServices', ValuesServices);
    ValuesServices.$inject = ['$q', '$http', 'configurationLinks'];

    function ValuesServices($q, $http, configurationLinks) {
        return {
            getCourts: function () {
                var promise = $http.get(configurationLinks.valuesApi + "/courts");
                return promise;
            },
            getMatchTypes: function () {
                var promise = $http.get(configurationLinks.valuesApi + "/matchTypes");
                return promise;
            }
        };
    }
}
());