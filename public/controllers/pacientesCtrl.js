function pacientesCtrl($scope, $http, $routeParams, $route, $window, $filter) {
    
    $scope.hideme = false;
    $scope.activePrior="disabled";
    $scope.activeNext="";
    $scope.currentPage = 0;
    $scope.filteredTodos = []
    ,$scope.currentPage = 1
    ,$scope.numPerPage = 10
    ,$scope.maxSize = 5;
    $scope.priorDisabled = true;
    $scope.idPacienteToDelete = 0;
    
    $http.get('/api/pacientes')
    
            .success(function(data) {

                $scope.todosNoFilter = data;
                $scope.$watch('buscador', function(val)
                { 
                    if (val !== undefined){
                        $scope.todos = $filter('filter')($scope.todosNoFilter, val);
                    } else{
                        $scope.todos = $scope.todosNoFilter;
                    }
               
                    var begin = (($scope.currentPage-1) * $scope.numPerPage)
                        , end = begin + $scope.numPerPage;
    
                    $scope.filteredTodos = $scope.todos.slice(begin, end);
                });
                        
            })
            .error(function(data) {
                
                $scope.items = data;
                console.log('Error: ' + data);
            
            });    
            
    $scope.setPacienteToDelete = function(id){
        
        idPacienteToDelete = id;
      
    };
    
    $scope.deletePaciente = function(){
        
        console.log("borrando paciente");
        $http.post('/api/deletePaciente/:' + idPacienteToDelete)
        
                
                .success(function(){
                    
                    $window.location.reload();
                })
                
//                .then(function(){
//                    
//                    $http.get('/pacientes')
//    
//                        .success(function(data) {
//
//                            $scope.todos = data;
//                            var begin = (($scope.currentPage-1) * $scope.numPerPage)
//                                , end = begin + $scope.numPerPage;
//
//                            $scope.filteredTodos = $scope.todos.slice(begin, end);
//                            console.log(data);
//                            
//                            $route.reload();                                                        
//
//                        })
//                        
//                        .error(function(data) {
//
//                            $scope.items = data;
//                            console.log('Error: ' + data);
//            
//                        });  
//                        
//                
//            
//                });
        
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
            $scope.filteredTodos = $scope.todos.slice(begin, end);
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
            $scope.filteredTodos = $scope.todos.slice(begin, end);
        }
    };
    
    $scope.getPage = function(page){
        
        var begin = ((page) * $scope.numPerPage)
        , end = begin + $scope.numPerPage;
        $scope.filteredTodos = $scope.todos.slice(begin, end);
        
    };
    
    $scope.confirmDialog = function(){
    
        dlg = $dialogs.confirm('Please Confirm','Is this awesome or what?');
        dlg.result.then(function(btn){
            $scope.confirmed = 'You thought this quite awesome!';
        },function(btn){
            $scope.confirmed = 'Shame on you for not thinking this is awesome!';
        });
        
    };
}