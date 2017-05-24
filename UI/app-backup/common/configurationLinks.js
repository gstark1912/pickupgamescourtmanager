(function () {
    var module = angular.module("dttMailSender");
    module.factory('configurationLinks', ConfigurationLinks);

    function ConfigurationLinks() {
        var api = "localhost:8080/app"
        return {
            projectsApi: api + "/projects"
        }
    };

}());