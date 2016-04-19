function visitasPacienteCtrl($scope, $http, $routeParams, $route, $window) {
    
    $scope.visitas = new Array();
    $scope.laVisita = new Object();
    
    $http.get('/api/visitasPaciente/'+$routeParams.id)
            .success(function(data) {
                console.log(data);
                
               
                for (i=0; i<data.length; i++){
                    
                    $scope.visitas[i]               = new Object();
                    $scope.visitas[i].id            = data[i].ID;
                    $scope.visitas[i].fecha         = data[i].FECHA;
                    $scope.visitas[i].idPaciente    = data[i].ID_PACIENTE;
                    $scope.visitas[i].comentario    = data[i].COMENTARIO;
                    $scope.visitas[i].diagnostico   = data[i].DIAGNOSTICO;
                    
                }
                
            })
            .error(function(data) {
                $scope.value = data;
                console.log('Error: ' + data);
            });
    
    
    $scope.getVisita = function(id){
            
//            $scope.$apply(function(){$scope.laVisita.id = $scope.visitas[id-1].id;});
            
            $http.get('/api/visita/:'+id)
                .success(function(data) {
                    console.log(data);

                    $scope.laVisita.id            = data[0].ID;
                    $scope.laVisita.fecha         = data[0].FECHA;
                    $scope.laVisita.idPaciente    = data[0].ID_PACIENTE;
                    $scope.laVisita.comentario    = data[0].COMENTARIO;
                    $scope.laVisita.diagnostico   = data[0].DIAGNOSTICO;
                    
                    

                })
                .error(function(data) {
                    $scope.value = data;
                    console.log('Error: ' + data);
                });

        }
        
    $scope.updateVisita = function(idVisita){
        
        var postObject              = new Object();
        postObject.id               = $scope.visitas[idVisita].id;
        postObject.fecha            = $scope.visitas[idVisita].fecha;
        postObject.comentario       = $scope.visitas[idVisita].comentario;
        postObject.diagnostico      = $scope.visitas[idVisita].diagnostico;
        
        $http.post('/api/updateVisita', postObject )
                .success(function(data){
                    
                    $scope.showOkUpdatePaciente();
                })
                .error(function(data) {
                    $scope.showErrorUpdatePaciente();
                });
    }
    
    $scope.insertVisita = function(id){
        
        var idPaciente = id;
        
        $http.post('/api/insertVisita/:'+id)
                .success(function(data){
                                        
                    $http.get('/api/visitasPaciente/:'+idPaciente)
                            .success(function(data) {
                                console.log(data);

                                for (i=0; i<data.length; i++){

                                    $scope.visitas[i]               = new Object();
                                    $scope.visitas[i].id            = data[i].ID;
                                    $scope.visitas[i].fecha         = data[i].FECHA;
                                    $scope.visitas[i].idPaciente    = data[i].ID_PACIENTE;
                                    $scope.visitas[i].comentario    = data[i].COMENTARIO;
                                    $scope.visitas[i].diagnostico   = data[i].DIAGNOSTICO;

                                }

                                $route.reload();
                                                
                            })
                            .error(function(data) {
                                    $scope.value = data;
                                    console.log('Error: ' + data);
                            });
                   
                }).error(function(data){
                    
                });
    },
    
    $scope.getReportVisita = function(idVisita){
                        
        var id = $scope.visitas[idVisita].id;
        $http.get('/reports/pdf/:'+id)
                .success(function (data, status, that) {

                    $window.open('reports/file.pdf');
                    
                }).error(function (data, status, headers, config, statusText) {
                    console.log("ERROR reporting /pdf");
                });
                
    }
}