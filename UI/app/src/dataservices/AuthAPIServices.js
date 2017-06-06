(function () {

    var module = angular.module('app.core');
    module.factory('AuthAPIServices', AuthAPIServices);
    AuthAPIServices.$inject = ['$http', 'configurationLinks', '$base64', '$window'];

    function AuthAPIServices($http, configurationLinks, $base64, $window) {

        return {
            login: function (user) {
                return login(user, configurationLinks.authorizationApi);
            },
            loginAdmin: function (user) {
                return login(user, configurationLinks.adminAuthorizationApi);
            }
        };

        function login(user, link) {
            var encoded = $base64.encode(user.email + ':' + user.password);
            var headers = { "Authorization": "Basic " + encoded };
            return $http({ method: 'post', url: link, headers: headers })
                .then(function (response) {
                    if (response.status == 200) {
                        $window.sessionStorage.token = response.headers("Token");
                        return true;
                    }
                    else
                        return false;
                });
        }

    }
}
());