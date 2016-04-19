function detallePacienteCtrl($scope, $http, $routeParams, tabToShow) {

    $scope.showMe = tabToShow.currentTab;
    $scope.errorUpdatePaciente = false;
    $scope.okUpdatePaciente = false;
    $scope.edad = 0;

    $scope.getEdad = function (fecha) {
        var currentDate = new Date();
        var currentDay = currentDate.getDay();
        var currentMonth = currentDate.getMonth();
        var currentYear = currentDate.getYear();

        //$scope.edad = (currentYear + 1900) - fecha.subString(0,3);

//       if ( ahora_mes < (mes - 1)){
//         edad--;
//       }
//       if (((mes - 1) == ahora_mes) && (ahora_dia < dia)){ 
//         edad--;
//       }
//       if (edad > 1900){
//           edad -= 1900;
//       }   

        return currentYear;
    }

    $http.get('/api/detallePaciente/' + $routeParams.id)

            .success(function (data) {

                console.log(data);

                $scope.paciente = new Object();
                $scope.paciente.id = data[0].ID;
                $scope.paciente.nombre = data[0].NOMBRE;
                $scope.paciente.apellidos = data[0].APELLIDOS;
                $scope.paciente.notas = data[0].NOTAS;
                $scope.paciente.entrada = data[0].FECHA_ENTRADA;
                $scope.paciente.ingreso = data[0].FECHA_INGRESO;
                $scope.paciente.lugarNacimiento = data[0].LUGAR_NACIMIENTO;
                $scope.paciente.domicilio = data[0].DOMICILIO;
                $scope.paciente.ciudad = data[0].CIUDAD;
                $scope.paciente.provincia = data[0].PROVINCIA;
                $scope.paciente.telf1 = data[0].TELF_1;
                $scope.paciente.telf2 = data[0].TELF_2;
                $scope.paciente.contactofamiliar = data[0].CONTACTO_FAMILIAR;
                $scope.paciente.dni = data[0].DNI;
                $scope.paciente.cip = data[0].CIP;
                $scope.paciente.entradassalidas = data[0].ENTRADASSALIDAS;
                $scope.paciente.notasingreso = data[0].NOTAS_INGRESO;
                $scope.paciente.otrasVacunas = data[0].OTRAS_VACUNAS;
                $scope.paciente.hepatitisComentario = data[0].HEPATITIS_B_COMENTARIO;
                $scope.paciente.tdComentario = data[0].TD_COMENTARIO;
                $scope.paciente.neumoniaComentario = data[0].NEUMONIA_COMENTARIO;
                $scope.paciente.antigripalComentario = data[0].ANTIGRIPAL_COMENTARIO;
                $scope.paciente.alerta = data[0].ALERTA;
                $scope.paciente.cp = data[0].CP;
                $scope.paciente.fechaNacimiento = data[0].FECHA_NACIMIENTO;
                $scope.paciente.nacionalidad = data[0].NACIONALIDAD;
                $scope.paciente.situacionFamiliar = data[0].SITUACION_FAMILIAR;
                $scope.paciente.situacionLaboral = data[0].SITUACION_LABORAL;
                $scope.paciente.situacionSocial = data[0].SITUACION_SOCIAL;
                $scope.paciente.antecedentesPersonales = data[0].ANTECEDENTES_PERSONALES;
                if (data[0].TBC === 1) {
                    $scope.paciente.tbc = true;
                } else {
                    $scope.paciente.tbc = false;
                }
                $scope.paciente.TBCTratamiento = data[0].TBC_TRATAMIENTO;
                if (data[0].HEPATITIS_A === 1) {
                    $scope.paciente.hepatitisA = true;
                } else {
                    $scope.paciente.hepatitisA = false;
                }
                if (data[0].HEPATITIS_B === 1) {
                    $scope.paciente.hepatitisB = true;
                } else {
                    $scope.paciente.hepatitisB = false;
                }
                if (data[0].HEPATITIS_C === 1) {
                    $scope.paciente.hepatitisC = true;
                } else {
                    $scope.paciente.hepatitisC = false;
                }
                if (data[0].HIV === 1) {
                    $scope.paciente.hiv = true;
                } else {
                    $scope.paciente.hiv = false;
                }
                $scope.paciente.hepatitisTratamiento = data[0].HEPATITIS_TRATAMIENTO;
                $scope.paciente.HIVTratamiento = data[0].HIV_TRATAMIENTO;
                if (data[0].GONORREA === 1) {
                    $scope.paciente.gonorrea = true;
                } else {
                    $scope.paciente.gonorrea = false;
                }
                if (data[0].SIFILIS === 1) {
                    $scope.paciente.sifilis = true;
                } else {
                    $scope.paciente.sifilis = false;
                }
                $scope.paciente.enfermedadesTransmision = data[0].ENFERMEDADES_TRANSMISION;
                if (data[0].ENOLISMO === 1) {
                    $scope.paciente.enolismo = true;
                } else {
                    $scope.paciente.enolismo = false;
                }
                if (data[0].TABAQUISMO === 1) {
                    $scope.paciente.tabaquismo = true;
                } else {
                    $scope.paciente.tabaquismo = false;
                }
                if (data[0].ADVP === 1) {
                    $scope.paciente.advp = true;
                } else {
                    $scope.paciente.advp = false;
                }
                $scope.paciente.tipoToxico = data[0].TIPO_TOXICO;
                $scope.paciente.drogaFumada = data[0].DROGA_FUMADA;
                $scope.paciente.drogaInhalada = data[0].DROGA_INHALADA;
                $scope.paciente.otrasDrogas = data[0].OTRAS_DROGAS;
                $scope.paciente.situacionActual = data[0].SITUACION_ACTUAL;
                $scope.paciente.sistemaMusculoEsqueletico = data[0].SISTEMA_MUSCULO_ESQUELETICO;
                $scope.paciente.esferaOral = data[0].ESFERA_ORAL;
                $scope.paciente.organosVisuales = data[0].ORGANOS_VISUALES;
                $scope.paciente.aparatoRespiratorio = data[0].APARATO_RESPIRATORIO;
                $scope.paciente.sistemaCardioCirculatorio = data[0].SISTEMA_CARDIOCIRCULATORIO;
                $scope.paciente.otrosHallazgos = data[0].OTROS_HALLAZGOS;
                $scope.paciente.pruebasComplementarias = data[0].PRUEBAS_COMPLEMENTARIAS;
                $scope.paciente.diagnosticos = data[0].DIAGNOSTICOS;
                $scope.paciente.vacunasRecomendadas = data[0].VACUNAS_RECOMENDADAS;
                $scope.paciente.tratamientoRealizar = data[0].TRATAMIENTO_A_REALIZAR;
                $scope.paciente.controlesMedicos = data[0].CONTROLES_MEDICOS_A_REALIZAR;
                $scope.paciente.derivacionAmbulatorioHospital = data[0].DERIVACION_AMBULATORIO_HOSPITAL;
                $scope.paciente.medico = data[0].MEDICO;

                if (data[0].ACTIVO === 1) {
                    $scope.paciente.activo = true;
                } else {
                    $scope.paciente.activo = false;
                }
                if (data[0].HOMBRE === 1) {
                    $scope.paciente.hombre = true;
                } else {
                    $scope.paciente.hombre = false;
                }
                if (data[0].MUJER === 1) {
                    $scope.paciente.mujer = true;
                } else {
                    $scope.paciente.mujer = false;
                }

                if (data[0].HEPATITIS_B === 1) {
                    $scope.paciente.hepatitisB = true;
                } else {
                    $scope.paciente.hepatitisB = false;
                }
                if (data[0].TD === 1) {
                    $scope.paciente.td = true;
                } else {
                    $scope.paciente.td = false;
                }
                if (data[0].NEUMONIA === 1) {
                    $scope.paciente.neumonia = true;
                } else {
                    $scope.paciente.neumonia = false;
                }
                if (data[0].ANTIGRIPAL === 1) {
                    $scope.paciente.antigripal = true;
                } else {
                    $scope.paciente.antigripal = false;
                }
                if (data[0].SHOW_ALERTA === 1) {
                    $scope.paciente.showAlerta = true;
                } else {
                    $scope.paciente.showAlerta = false;
                }

                var currentDate = new Date();
                $scope.paciente.edad = $scope.paciente.fechaNacimiento - currentDate.getDate();

                $http.get('/api/medicos') 
                            .success(function(data){
                                console.log(data);
                                $scope.medicos = data;
                                console.log('medicos');
                                console.log($scope.medicos);
                                
                            })
                            .error(function(data){
                                
                            });
                
            })
            .error(function (data) {
                $scope.value = data;
                console.log('Error: ' + data);
            });

    $scope.updatePaciente = function () {
        console.log("llamada a updatePaciente");

        var postObject = new Object();
        postObject.id = $scope.paciente.id;
        postObject.nombre = $scope.paciente.nombre;
        postObject.apellidos = $scope.paciente.apellidos;
        postObject.notas = $scope.paciente.notas;
        postObject.entrada = $scope.paciente.entrada;
        postObject.fechaingreso = $scope.paciente.ingreso;
        postObject.lugarNacimiento = $scope.paciente.lugarNacimiento;
        postObject.domicilio = $scope.paciente.domicilio;
        postObject.ciudad = $scope.paciente.ciudad;
        postObject.telf1 = $scope.paciente.telf1;
        postObject.telf2 = $scope.paciente.telf2;
        postObject.contacto_familiar = $scope.paciente.contactofamiliar;
        postObject.dni = $scope.paciente.dni;
        postObject.cip = $scope.paciente.cip;
        postObject.entradassalidas = $scope.paciente.entradassalidas;
        postObject.notasingreso = $scope.paciente.notasingreso;
        postObject.alerta = $scope.paciente.alerta;
        postObject.cp = $scope.paciente.cp;
        postObject.fechaNacimiento = $scope.paciente.fechaNacimiento;
        if ($scope.paciente.activo === true) {
            postObject.activo = 1;
        } else {
            postObject.activo = 0;
        }
        if ($scope.paciente.hombre === true) {
            postObject.hombre = 1;
        } else {
            postObject.hombre = 0;
        }
        if ($scope.paciente.mujer === true) {
            postObject.mujer = 1;
        } else {
            postObject.mujer = 0;
        }
        if ($scope.paciente.hepatitisB === true) {
            postObject.hepatitisB = 1;
        } else {
            postObject.hepatitisB = 0;
        }
        if ($scope.paciente.td === true) {
            postObject.td = 1;
        } else {
            postObject.td = 0;
        }
        if ($scope.paciente.neumonia === true) {
            postObject.neumonia = 1;
        } else {
            postObject.neumonia = 0;
        }
        if ($scope.paciente.antigripal === true) {
            postObject.antigripal = 1;
        } else {
            postObject.antigripal = 0;
        }
        if ($scope.paciente.showAlerta === true) {
            postObject.showAlerta = 1;
        } else {
            postObject.showAlerta = 0;
        }
        postObject.provincia = $scope.paciente.provincia;
        postObject.otrasVacunas = $scope.paciente.otrasVacunas;
        postObject.hepatitisComentario = $scope.paciente.hepatitisComentario;
        postObject.tdComentario = $scope.paciente.tdComentario;
        postObject.neumoniaComentario = $scope.paciente.neumoniaComentario;
        postObject.antigripalComentario = $scope.paciente.antigripalComentario;
        
        postObject.situacionFamiliar = $scope.paciente.situacionFamiliar;
        postObject.situacionLaboral = $scope.paciente.situacionLaboral;
        postObject.situacionSocial = $scope.paciente.situacionSocial;
        postObject.antecedentesPersonales = $scope.paciente.antecedentesPersonales;
        if ($scope.paciente.tbc) {
            postObject.tbc = 1;
        } else {
            postObject.tbc = 0;
        }
        postObject.TBCTratamiento = $scope.paciente.TBCTratamiento;
        if ($scope.paciente.hepatitisA) {
            postObject.hepatitisA = 1;
        } else {
            postObject.hepatitisA = 0;
        }
        if ($scope.paciente.hepatitisC) {
            postObject.hepatitisC = 1;
        } else {
            postObject.hepatitisC = 0;
        }
        if ($scope.paciente.hiv) {
            postObject.hiv = 1;
        } else {
            postObject.hiv = 0;
        }
        postObject.hepatitisTratamiento = $scope.paciente.hepatitisTratamiento;
        postObject.HIVTratamiento = $scope.paciente.HIVTratamiento;
        if ($scope.paciente.gonorrea) {
            postObject.gonorrea = 1;
        } else {
            postObject.gonorrea = 0;
        }
        if ($scope.paciente.sifilis) {
            postObject.sifilis = 1;
        } else {
            postObject.sifilis = 0;
        }
        postObject.enfermedadesTransmision = $scope.paciente.enfermedadesTransmision;
        if ($scope.paciente.enolismo) {
            postObject.enolismo = 1;
        } else {
            postObject.enolismo = 0;
        }
        if ($scope.paciente.tabaquismo) {
            postObject.tabaquismo = 1;
        } else {
            postObject.tabaquismo = 0;
        }
        if ($scope.paciente.advp) {
            postObject.advp = 1;
        } else {
            postObject.advp = 0;
        }
        postObject.tipoToxico = $scope.paciente.tipoToxico;
        postObject.drogaFumada = $scope.paciente.drogaFumada;
        postObject.drogaInhalada = $scope.paciente.drogaInhalada;
        postObject.otrasDrogas = $scope.paciente.otrasDrogas;
        postObject.situacionActual = $scope.paciente.situacionActual;
        postObject.sistemaMusculoEsqueletico = $scope.paciente.sistemaMusculoEsqueletico;
        postObject.esferaOral = $scope.paciente.esferaOral;
        postObject.organosVisuales = $scope.paciente.organosVisuales;
        postObject.aparatoRespiratorio = $scope.paciente.aparatoRespiratorio;
        postObject.sistemaCardioCirculatorio = $scope.paciente.sistemaCardioCirculatorio;
        postObject.otrosHallazgos = $scope.paciente.otrosHallazgos;
        postObject.pruebasComplementarias = $scope.paciente.pruebasComplementarias;
        postObject.diagnosticos = $scope.paciente.diagnosticos;
        postObject.vacunasRecomendadas = $scope.paciente.vacunasRecomendadas;
        postObject.tratamientoRealizar = $scope.paciente.tratamientoRealizar;
        postObject.controlesMedicos = $scope.paciente.controlesMedicos;
        postObject.derivacionAmbulatorioHospital = $scope.paciente.derivacionAmbulatorioHospital;
        postObject.medico = $scope.paciente.medico;
        postObject.nacionalidad = $scope.paciente.nacionalidad;
                

        $http.post('/api/updatePaciente', postObject)
                .success(function (data) {

                    $scope.showOkUpdatePaciente();
                })
                .error(function (data) {
                    $scope.showErrorUpdatePaciente();
                });
    };

    $scope.showTab = function (id) {

        if (id !== "-1") {
//            actualTabService.showMe = id;
//            idTab = id; 
            tabToShow.currentTab = id;
            $scope.showMe = id;
        } else {
//            $scope.showMe = actualTabService.showMe; 
        }

    };

    $scope.showErrorUpdatePaciente = function () {
        $scope.errorUpdatePaciente = !$scope.errorUpdatePaciente;
    };
    $scope.showOkUpdatePaciente = function () {
        $scope.okUpdatePaciente = !$scope.okUpdatePaciente;
    };



}