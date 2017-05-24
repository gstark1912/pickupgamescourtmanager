(function () {

    var module = angular.module("dttMailSender");
    module.factory('AuthAPIServices', AuthAPIServices);
    AuthAPIServices.$inject = ['$q', '$http'];

    function AuthAPIServices($q, $http) {

        return {
            loginOrRegister: function (user) {
                // $http returns a promise, which has a then function, which also returns a promise

                var promise = $http.post("http://localhost:55692/api/users/loginOrRegister", user)
                    .success(function (data) {
                        debugger;
                        //The then function here is an opportunity to modify the response
                        console.log(data);
                        //The return value gets picked up by the then in the controller.
                        return data;
                    });

                //    $http(
                //{
                //    url: "http://localhost:55692/api/users/loginOrRegister",
                //    method: "POST",
                //    data: { "user": user }                    
                //})
                //    .then(function (response) {
                //        debugger;
                //        // The then function here is an opportunity to modify the response
                //        console.log(data);
                //        // The return value gets picked up by the then in the controller.
                //        return data;
                //    });
                // Return the promise to the controller
                return promise;
            }
        };
    };

}
());