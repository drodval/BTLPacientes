var app     = angular.module('betelApp', ['ngRoute','jkuri.datepicker']);

//app.value('idTab', 1);

app.service('tabToShow', function(){
    
    this.currentTab = 1;
    
});

app.controller('indexCtrl', indexCtrl);
app.controller('pacientesCtrl', pacientesCtrl);
app.controller('detallePacienteCtrl', detallePacienteCtrl);
app.controller('addPacienteCtrl', addPacienteCtrl);
app.controller('visitasPacienteCtrl', visitasPacienteCtrl);
app.controller('medicosCtrl', medicosCtrl);
app.controller('dataCtrl', dataCtrl);

app.config(function($routeProvider){
    $routeProvider
            .when('/',{
                templateUrl: 'data-visualization.html'
            })
            .when('/medicos',{
                templateUrl: 'medicos.html'
            })
            .when('/todos',{
                templateUrl: 'todos.html',
            })
            .when('/newPaciente',{
                templateUrl: 'newPaciente.html'
            })
            .when('/detallePaciente/:id',{
                templateUrl: 'pacienteDetalle.html'
            })
            .when('/visitasPaciente',{
               templateUrl: 'hola.html' 
            })
            .when('/newPaciente',{
               templateUrl: 'newPaciente.html' 
            });
});

