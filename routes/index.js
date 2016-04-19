//var Movie=require('../models/movie');
var express=require('express');
var connection = require("../connection");

//configure routes

var router=express.Router();

router.get('/',function(req,res){
        res.render('index.html');
        console.log("/routes/index.js -> router.get /" );
        
    });
    
router.get('/graficos',function(req,res){
        console.log("requesting table PACIENTES");
        connection.query('SELECT * FROM pacientes', function(error, result){
                        
                        console.log(JSON.stringify(result));
                        res.send(JSON.stringify(result));
                    });
        console.log("/routes/index.js -> router.get /grafico" );
        
    });
    
router.get('/pacientes',function(req,res){
        console.log("requesting table PACIENTES");
        connection.query('SELECT * FROM pacientes', function(error, result){
                        
                        console.log(JSON.stringify(result));
                        res.send(JSON.stringify(result));
                    });
        console.log("/routes/index.js -> router.get /pacientes" );
        
    });
    
router.get('/detallePaciente/:id',function(req,res){
        console.log("requesting table PACIENTES by id " + req.params.id.substr(1));
        connection.query('SELECT * FROM pacientes WHERE ID = ' + req.params.id.substr(1), function(error, result){

                        console.log(JSON.stringify(result));
                        res.send(JSON.stringify(result));
                    });
        console.log("/routes/index.js -> router.get /pacientes/:id" );
    });
    
router.post('/updatePaciente', function(req, res){
        console.log("/routes/index.js -> router.post /updatePaciente "+req.body.nombre);
        console.log(req.body );
        
        connection.query('UPDATE pacientes '+
                            'SET nombre = \''+ req.body.nombre +'\','+
                            'apellidos = \''+ req.body.apellidos +'\','+
                            'notas = \''+ req.body.notas +'\','+
                            'notas_ingreso = \''+ req.body.notasingreso +'\','+
                            'domicilio = \''+ req.body.domicilio +'\','+
                            'ciudad = \''+ req.body.ciudad +'\','+
                            'provincia = \''+ req.body.provincia +'\','+
                            'telf_1 = \''+ req.body.telf1 +'\','+
                            'telf_2 = \''+ req.body.telf2 +'\','+
                            'contacto_familiar = \''+ req.body.contacto_familiar +'\','+
                            'fecha_entrada = \''+  req.body.entrada +'\','+
                            'fecha_ingreso = \''+  req.body.fechaingreso +'\','+
                            'lugar_nacimiento= \'' + req.body.lugarNacimiento +'\','+
                            'activo= \'' + req.body.activo +'\','+
                            'dni= \'' + req.body.dni +'\','+
                            'cip= \'' + req.body.cip +'\','+
                            'hombre= \'' + req.body.hombre +'\','+
                            'entradassalidas= \'' + req.body.entradassalidas +'\','+
                            'hepatitis_b = \'' + req.body.hepatitisB +'\','+
                            'td = \'' + req.body.td +'\','+
                            'neumonia = \'' + req.body.neumonia +'\','+
                            'antigripal = \'' + req.body.antigripal +'\','+
                            'otras_vacunas = \'' + req.body.otrasVacunas +'\','+
                            'hepatitis_b_comentario = \'' + req.body.hepatitisComentario +'\','+
                            'td_comentario = \'' + req.body.tdComentario +'\','+
                            'neumonia_comentario = \'' + req.body.neumoniaComentario +'\','+
                            'antigripal_comentario = \'' + req.body.antigripalComentario +'\','+
                            'alerta = \'' + req.body.alerta +'\','+
                            'show_alerta =\'' +  req.body.showAlerta +'\','+
                            'mujer= \'' + req.body.mujer +'\','+
                            'cp=\'' + req.body.cp +'\','+
                            'fecha_nacimiento=\'' + req.body.fechaNacimiento + '\','+
                            'nacionalidad=\'' + req.body.nacionalidad + '\','+
                            'situacion_familiar=\'' + req.body.situacionFamiliar + '\', '+
                            'situacion_laboral=\'' + req.body.situacionLaboral + '\', '+
                            'situacion_social=\'' + req.body.situacionSocial + '\', '+
                            'antecedentes_personales=\'' + req.body.antecedentesPersonales + '\', ' +
                            'tbc=\'' + req.body.tbc + '\', '+
                            'tbc_tratamiento=\'' + req.body.TBCTratamiento + '\', '+
                            'hepatitis_A=\'' + req.body.hepatitisA + '\', '+
                            'hepatitis_C=\'' + req.body.hepatitisC + '\', '+
                            'hiv=\'' + req.body.hiv + '\', '+
                            'hepatitis_tratamiento=\'' + req.body.hepatitisTratamiento + '\', '+
                            'hiv_tratamiento=\'' + req.body.HIVTratamiento + '\', '+
                            'gonorrea=\'' + req.body.gonorrea + '\', '+
                            'sifilis=\'' + req.body.sifilis + '\', '+
                            'enfermedades_transmision=\'' + req.body.enfermedadesTransmision + '\', '+
                            'enolismo=\'' + req.body.enolismo + '\', '+
                            'tabaquismo=\'' + req.body.tabaquismo + '\', '+
                            'advp=\'' + req.body.advp + '\', '+
                            'tipo_toxico=\'' + req.body.tipoToxico + '\', '+
                            'droga_fumada=\'' + req.body.drogaFumada + '\', '+
                            'droga_inhalada=\'' + req.body.drogaInhalada + '\', '+
                            'otras_drogas=\'' + req.body.otrasDrogas + '\', '+
                            'situacion_actual=\'' + req.body.situacionActual + '\', '+
                            'sistema_musculo_esqueletico=\'' + req.body.sistemaMusculoEsqueletico + '\', '+
                            'esfera_oral=\'' + req.body.esferaOral + '\', '+
                            'organos_visuales=\'' + req.body.organosVisuales + '\', '+
                            'aparato_respiratorio=\'' + req.body.aparatoRespiratorio + '\', '+
                            'sistema_cardiocirculatorio=\'' + req.body.sistemaCardioCirculatorio + '\', '+
                            'otros_hallazgos=\'' + req.body.otrosHallazgos + '\', '+
                            'pruebas_complementarias=\'' + req.body.pruebasComplementarias + '\', '+
                            'diagnosticos=\'' + req.body.diagnosticos + '\', '+
                            'vacunas_recomendadas=\'' + req.body.vacunasRecomendadas + '\', '+
                            'tratamiento_a_realizar=\'' + req.body.tratamientoRealizar + '\', '+
                            'controles_medicos_a_realizar=\'' + req.body.controlesMedicos + '\', '+
                            'derivacion_ambulatorio_hospital=\'' + req.body.derivacionAmbulatorioHospital + '\', '+
                            'medico=\'' + req.body.medico + '\' '+
        
                            'WHERE id = ' + req.body.id + ';', function(error, result){
                            connection.query('commit;');
                            console.log('committed ' + error);
                            res.send(JSON.stringify(result));
                    });
        
    });
    
router.post('/addPaciente', function(req, res){
        console.log('/routes/index.js -> router.post /newPaciente');
        
        connection.query('INSERT INTO pacientes () VALUES ()', function(error, result){
                        connection.query('commit;');
                        
                        connection.query('SELECT * FROM pacientes ORDER BY id DESC LIMIT 1', function(error, result){
                            console.log("set despues de nuevo user" + JSON.stringify(result));
                            
                            res.send(JSON.stringify(result));
                        });
                        
                    });
});

router.post('/deletePaciente/:id', function(req,res){
    console.log('/routes/index.js -> router.post /deletePaciente ');
    
    connection.query('DELETE FROM pacientes WHERE id = ' + req.params.id.substr(1)), function(error, result){
                            connection.query('commit;');
                            console.log('committed ' + error);
                            res.send(JSON.stringify(result));
                    };
                    
    res.send('OK');
});

router.get('/visitasPaciente/:id', function(req,res){
        console.log("requesting table visitas by id " + req.params.id.substr(1));
        connection.query('SELECT * FROM visitas WHERE ID_PACIENTE = ' + req.params.id.substr(1), function(error, result){

                        console.log(JSON.stringify(result));
                        res.send(JSON.stringify(result));
                    });
        console.log("/routes/index.js -> router.get /pacientes/:id" );
});

router.get('/visita/:id', function(req,res){
        console.log("requesting visita " + req.params.id.substr(1));
        
        connection.query('SELECT * FROM visitas WHERE id = ' + req.params.id.substr(1), function(error, result){
                        console.log(JSON.stringify(result));
                        res.send(JSON.stringify(result));
                    });
});

router.post('/updateVisita', function(req, res){
        console.log("/routes/index.js -> router.post /updateVisita "+req.body.nombre);
        console.log(req.body );
        connection.query('UPDATE visitas '+
                            'SET fecha = \''+ req.body.fecha +'\','+
                            'comentario = \''+ req.body.comentario +'\','+
                            'diagnostico = \''+ req.body.diagnostico +'\' '+
                            'WHERE id = ' + req.body.id + ';', function(error, result){
                            connection.query('commit;');
                            console.log('committed ' + error);
                            res.send(JSON.stringify(result));
                    });
        
    });

router.post('/insertVisita/:id', function(req, res){
        console.log('/routes/index.js -> router.post /insertaVisita ' + req.params.id.substr(1));
        
        connection.query('INSERT INTO visitas (ID_PACIENTE) VALUES ('+ req.params.id.substr(1) +')', function(error, result){
                        connection.query('commit;');

                        res.send(JSON.stringify(result));
                    });
});

router.get('/medicos',function(req,res){
        console.log("requesting table MEDICOS");
        connection.query('SELECT * FROM medicos', function(error, result){
                        
                        console.log(JSON.stringify(result));
                        res.send(JSON.stringify(result));
                    });
        console.log("/routes/index.js -> router.get /medicos" );
        
    });
    
router.post('/updateMedico', function(req, res){
    console.log("/routes/index.js -> router.post /updateMedico "+req.body.nombre);
    console.log(req.body );
    connection.query('UPDATE medicos '+
                        'SET nombre = \''+ req.body.nombre +'\','+
                        'apellidos = \''+ req.body.apellidos +'\','+
                        'numero_colegiado = \''+ req.body.numeroColegiado +'\' '+
                        'WHERE id = ' + req.body.id + ';', function(error, result){
                        connection.query('commit;');
                        console.log('committed ' + error);
                        res.send(JSON.stringify(result));
                });
    });    

router.post('/insertMedico', function(req, res){
    
    console.log('/routes/index.js -> router.post /insertMedico');
    
    connection.query('INSERT INTO medicos (nombre, apellidos) VALUES ("------","------"); ', function(error, result){
        connection.query('commit;');
        res.send(JSON.stringify(result));
    });
});
    
module.exports=router;
