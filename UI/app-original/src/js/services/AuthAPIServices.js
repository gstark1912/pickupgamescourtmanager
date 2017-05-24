(function () {

    var module = angular.module("Brapp");
    module.factory('AuthAPIServices', AuthAPIServices);
    AuthAPIServices.$inject = ['$q', '$http', 'configurationLinks'];

    function AuthAPIServices($q, $http, configurationLinks) {

        return {
            loginOrRegister: function (user) {                
                var promise = $http.post(configurationLinks.usersApi, JSON.stringify(user))
                    .success(function (data) {
                        return data;
                    });
            }
        };
    }
}
());