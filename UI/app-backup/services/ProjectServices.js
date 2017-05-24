(function () {
    var module = angular.module("dttMailSender");
    var projectsApi = "/projects";
    module.factory('ProjectServices', ProjectServices);
    ProjectServices.$inject = ['$http', '$q'];

    function ProjectServices($http, $q) {
        var data = [
                    { idProject: 1, description: "FTS", leads: ['Silvina Lespade', 'Germán Stark', 'Mariano Rivera'], projectFeatures: [] },
                    {
                        idProject: 2, description: "CP3", leads: ['José Lopez', 'Flavio Mendoza'], projectFeatures: [
                            {
                                idProjectFeature: 1,
                                idmailtype: 1,
                                mailtype: 'Correo de Bienvenida',
                                description: 'El tfs del proyecto es http://tfs2012.deloitte.com/tfs/ITS/ExpenseTwoRelease3'
                            }
                        ]
                    }];
        return {
            getAll: function () {
                return data;
                /*
                // $http returns a promise, which has a then function, which also returns a promise
                var promise = $http.get('http://localhost:55692/api/projects').then(function (response) {
                    // The then function here is an opportunity to modify the response
                    console.log(response);
                    // The return value gets picked up by the then in the controller.
                    return response.data;
                });
                // Return the promise to the controller
                return promise;
                */
            },
            getId: function (id) {
                return {
                    idProject: 1, description: "FTS",
                    leads: [
                        {
                            idLead: 1,
                            description: 'Silvina Lespade'
                        },
                        {
                            idLead: 2,
                            description: 'Germán Stark'
                        },
                        {
                            idLead: 3,
                            description: 'Mariano Rivera'
                        }, 
                    ],
                    projectFeatures: [{
                        idProjectFeature: 1,
                        idmailtype: 1,
                        mailtype: 'Correo de Bienvenida',
                        description: 'El tfs del proyecto es http://tfs2012.deloitte.com/tfs/ITS/ExpenseTwoRelease3'
                    }]
                };
            }
        };
    };


}());