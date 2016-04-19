 function dataCtrl($scope, $http, $routeParams, tabToShow) {
 
    $http.get('/api/graficos')
            .success(function(data){
                
                $scope.hombre = 0;
                $scope.mujer  = 0;
                
                for (var i=0; i<data.length; i++){
                    if (data[i].HOMBRE === 1){
                        $scope.hombre++;
                    } else{
                        $scope.mujer++;
                    }
                }
                
                var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

                var pieChartDataActive = [
                {
                   value: $scope.hombre,
                   color:"#3399FF",
                   highlight: "#0066FF",
                   label: "Hombres"
                },
                {
                   value: $scope.mujer,
                   color: "#FF66CC",
                   highlight: "#FF3399",
                   label: "Mujeres"
                }
                ] // pie chart data

                var ctx_doughnutActive = document.getElementById("templatemo-doughnut-chartActive").getContext("2d");

                window.myDoughnutChartActive = new Chart(ctx_doughnutActive).Doughnut(pieChartDataActive,{
                    responsive: true
                });
                
                // Line chart
                var currentDate = new Date();
                var meses = [];
                var primerMes = currentDate.getMonth() + 1;
                for (var i=0; i<12; i++){
                    
                    if (primerMes+i>11){
                        primerMes =  -12;
                    }
                    
                    switch (primerMes+i){
                        case 0:
                            meses.push("Enero");
                            break;
                        case 1:
                            meses.push("Febrero");
                            break;
                        case 2:
                            meses.push("Marzo");
                            break;
                        case 3:
                            meses.push("Abril");
                            break;
                        case 4:
                            meses.push("Mayo");
                            break;
                        case 5:
                            meses.push("Junio");
                            break;
                        case 6:
                            meses.push("Julio");
                            break;
                        case 7:
                            meses.push("Agosto");
                            break;
                        case 8:
                            meses.push("Setiembre");
                            break;
                        case 9:
                            meses.push("Octubre");
                            break;
                        case 10:
                            meses.push("Noviembre");
                            break;
                        case 11:
                            meses.push("Diciembre");
                            break;
                    }
                }
                
                var lineChartData = {
                  labels : meses,
                  datasets : [
                  {
                    label: "Entradas",
                    fillColor : "rgba(0,220,0,0.2)",
                    strokeColor : "rgba(0,220,0,1)",
                    pointColor : "rgba(0,220,0,1)",
                    pointStrokeColor : "#fff",
                    pointHighlightFill : "#fff",
                    pointHighlightStroke : "rgba(220,220,220,1)",
                    data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),
                            randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
                  },
                  {
                    label: "Salidas",
                    fillColor : "rgba(220,0,0,0.2)",
                    strokeColor : "rgba(220,0,0,1)",
                    pointColor : "rgba(220,0,0,1)",
                    pointStrokeColor : "#fff",
                    pointHighlightFill : "#fff",
                    pointHighlightStroke : "rgba(151,187,205,1)",
                    data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),
                            randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
                  }
                  ]

                } // lineChartData
                
                var ctx_line = document.getElementById("templatemo-line-chart").getContext("2d");
                window.myLine = new Chart(ctx_line).Line(lineChartData, {
                    responsive: true
                });


            })
            .error(function(data){
                
            });
}