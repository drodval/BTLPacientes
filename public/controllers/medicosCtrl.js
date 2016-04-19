function medicosCtrl($scope, $http, $route, $routeParams) {
    
    $scope.errorUpdateMedico = false;
    $scope.okUpdateMedico    = false;
    $scope.currentPage = 0;
    $scope.medicos = []
    ,$scope.currentPage = 1
    ,$scope.numPerPage = 10
    ,$scope.maxSize = 5;
    $scope.isShowingDetail = false;
    $scope.idMedico = 0;

    $http.get('/api/medicos')

            .success(function(data) {

                $scope.todos = data;
                var begin = (($scope.currentPage-1) * $scope.numPerPage)
                    , end = begin + $scope.numPerPage;
    
                $scope.medicos = $scope.todos.slice(begin, end);
                        
            })
            .error(function(data) {
                
                $scope.items = data;
                console.log('Error: ' + data);
            
            }); 
            
    $scope.insertMedico = function(){
        
        $http.post('/api/insertMedico')
                .success(function(data){
                                        
                

                                $route.reload();
                                                
                           
                   
                }).error(function(data){
                    
                });
    };
    
    $scope.updateMedico = function(){
        
        var postObject              = new Object();
        postObject.id               = $scope.medicos[$scope.idMedico].ID;
        postObject.nombre           = $scope.medicos[$scope.idMedico].NOMBRE;
        postObject.apellidos        = $scope.medicos[$scope.idMedico].APELLIDOS;
        postObject.numeroColegiado  = $scope.medicos[$scope.idMedico].NUMERO_COLEGIADO;
        
        $http.post('/api/updateMedico', postObject )
                .success(function(data){
                    
                    $scope.showOkUpdateMedico();
                })
                .error(function(data) {
                    $scope.showErrorUpdateMedico();
                });
    };
            
    $scope.getMedico = function(id){
        console.log(id);
        $scope.isShowingDetail = !$scope.isShowingDetail;
        $scope.idMedico = id-1;
        
        console.log($scope.medicos[$scope.idMedico]);
    };
    
    $scope.closeMedico = function(){
        $scope.isShowingDetail = !$scope.isShowingDetail;
        $scope.errorUpdateMedico = false;
        $scope.okUpdateMedico = false;
    };        
    
    $scope.numPages = function () {
        return Math.ceil($scope.todos.length / $scope.numPerPage);
    };
  
    $scope.getNextPage = function() {
        if ($scope.currentPage < $scope.numPages()){
            var begin = (($scope.currentPage) * $scope.numPerPage)
            , end = begin + $scope.numPerPage;

            $scope.currentPage = $scope.currentPage + 1;
            $scope.activePrior="";
            if ($scope.currentPage === $scope.numPages){
                $scope.activeNext="disabled";
            }
            $scope.medicos = $scope.todos.slice(begin, end);
        }
    };
    
    $scope.getPriorPage = function() {
        if ($scope.currentPage > 1){
            $scope.currentPage = $scope.currentPage - 1;
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
            , end = begin + $scope.numPerPage;


            $scope.activeNext="";
            if ($scope.currentPage === 1){
                $scope.activePrior="disabled";
                $scope.priorDisabled=true;
            }
            $scope.medicos = $scope.todos.slice(begin, end);
        }
    };
    
    $scope.getPage = function(page){
        
        var begin = ((page) * $scope.numPerPage)
        , end = begin + $scope.numPerPage;
        $scope.medicos = $scope.todos.slice(begin, end);
        
    };
    
    $scope.showErrorUpdateMedico = function(){
        $scope.errorUpdateMedico = !$scope.errorUpdateMedico;
    };
    $scope.showOkUpdateMedico = function(){
        $scope.okUpdateMedico = !$scope.okUpdateMedico;
    };
}