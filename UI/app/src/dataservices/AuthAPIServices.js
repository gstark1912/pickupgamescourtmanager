(function () {

    var module = angular.module('app.core');
    module.factory('AuthAPIServices', AuthAPIServices);
    AuthAPIServices.$inject = ['$http', 'configurationLinks', '$base64', '$window'];

    function AuthAPIServices($http, configurationLinks, $base64, $window) {

        return {
            login: function (user) {
                var encoded = $base64.encode(user.email + ':' + user.password);
                console.log('Email: ', user.email);
                console.log('Password: ', user.password);
                var headers = { "Authorization": "Basic " + encoded };
                return $http({ method: 'post', url: configurationLinks.authorizationApi, headers: headers })
                    .then(function (response) {
                        if (response.status == 200) {
                            $window.localStorage.token = response.headers("Token");
                            return true;
                        }
                        else
                            return false;
                    });

            }
        };
    }
}
());