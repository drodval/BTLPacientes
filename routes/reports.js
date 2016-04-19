'use strict';
var fs = require('fs');
var PDFDocument = require('pdfkit');
var connection = require("../connection");
var express = require('express');
var router  = express.Router();
//var rest = require('restler');
  
//var path = require('path');          
//var fs = require('fs');
//var db = require('../modules/database.js');
//var profile = require("../modules/profile_auth.js")
//var resourceType = require("../modules/resource_types.js");
//var permissionType = require("../modules/permission_types.js");


//var jasper = require('../node_modules/node-jasper')({
//    path: '../node_modules/jasper/lib',
//    reports:{
//        'HOLA':{
//            jasper: '../reports/a1.jasper',
//            jrxml: '../reports/a1.jrxml',
//            conn: 'in_memory_json'
//        }
//    }
//});

router.get('/pdf/:id', function(req,res){
        
    console.log("requesting visita " + req.params.id.substr(1));
        
//    connection.query('SELECT * FROM visitas WHERE id = ' + req.params.id.substr(1), function(error, result){
    connection.query('SELECT p.*, v.*, m.NOMBRE as NOMBRE_MEDICO, m.APELLIDOS as APELLIDOS_MEDICO, m.NUMERO_COLEGIADO FROM betel.visitas v '
                        +' JOIN betel.pacientes p ON v.`ID_PACIENTE`=p.`ID`'
                        +' JOIN betel.medicos m ON p.`MEDICO`=m.`ID`'
                        +' WHERE v.`ID` = ' + req.params.id.substr(1), function(error, result){

        console.log(JSON.stringify(result));
        var visita = JSON.stringify(result);
    
        var pdf = new PDFDocument({
            size: 'LEGAL', // See other page sizes here: https://github.com/devongovett/pdfkit/blob/d95b826475dd325fb29ef007a9c1bf7a527e9808/lib/page.coffee#L69
            info: {
                Title: 'Tile of File Here',
                Author: 'Some Author',
            }
        });    
        var y = 0;
        pdf.fontSize(20);
        pdf.fillColor("blue");
        pdf.text('BETEL-VISITA', 50, y+100);
        pdf.fillColor("black");
        pdf.fontSize(10);
        pdf.polygon([45,y+125],[560,y+125],[560,y+200],[45,y+200]);
        pdf.text('CODIGO VISITA', 50, y+130, {underline: true});
        pdf.text(result[0].ID, 150, y+130);
        pdf.text('DNI', 50, y+150, {underline: true});
        pdf.text(result[0].DNI, 150, y+150);
        pdf.text('NOMBRE', 50, y+170, {underline: true});
        pdf.text(result[0].NOMBRE, 150, y+170);pdf.text(result[0].APELLIDOS, 200, y+170);
        pdf.text('FECHA', 50, y+190, {underline: true});
        pdf.text(result[0].FECHA, 150, y+190);
//            .fillColor("blue");
        pdf.fontSize(15);
        pdf.polygon([45,y+210],[560,y+210],[560,y+240],[45,y+240]);
        pdf.text('DIAGNÓSTICO', 50, y+220, {underline: true});
        pdf.text(result[0].DIAGNOSTICO, 180, y+220);
        pdf.fontSize(10)
        pdf.text(result[0].COMENTARIO, 50, y+260);
    
    
        pdf.text("Médico -       " + result[0].NOMBRE_MEDICO + " " + result[0].APELLIDOS_MEDICO + " - " + result[0].NUMERO_COLEGIADO, 50, 890, {align: "center"});
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd='0'+dd
        } 

        if(mm<10) {
            mm='0'+mm
        } 

        today = mm+'/'+dd+'/'+yyyy;
       
        pdf.text("Fecha impresión " + today, 50, 920);
//    pdf.pipe(
//  fs.createWriteStream('./path/to/file.pdf')
//)
//  .on('finish', function () {
//    console.log('PDF closed');
//  });
//
//// Close PDF and write file.
//pdf.end();


//    pdf.fontSize(25)
//       .text('Here is some vector graphics...', 100, 80);
//    
//    // some vector graphics
//    pdf.save()
//       .moveTo(100, 150)
//       .lineTo(100, 250)
//       .lineTo(200, 250)
//       .fill("#FF3300");
//
//    pdf.circle(280, 200, 50)
//       .fill("#6600FF");
//       
//    // an SVG path
//    pdf.scale(0.6)
//       .translate(470, 130)
//       .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
//       .fill('red', 'even-odd')
//       .restore();

    // and some justified text wrapped into columns
//    pdf.text('And here is some wrapped text...', 100, 300)
//       .font('Times-Roman', 13)
//       .moveDown()
//       .text(lorem, {
//         width: 412,
//         align: 'justify',
//         indent: 30,
//         columns: 2,
//         height: 300,
//         ellipsis: true
//       });

    // end and display the pdfument in the iframe to the right
    // Stream contents to a file
    console.log("enviar pdf");
    pdf.pipe(
        fs.createWriteStream('./public/reports/file.pdf')
    )
    .on('finish', function () {
        console.log('PDF closed');
    });

    // Close PDF and write file.
    pdf.end();
//    var stream = pdf.pipe(blobStream());
//    blob = stream.toBlob('application/pdf');
//    stream.toBlobURL('application/pdf');
    
//    var file = fs.createReadStream('./reports/file.pdf');
//var stat = fs.statSync('./reports/file.pdf');
//res.setHeader('Content-Length', stat.size);
//console.log(stat.size);
//res.setHeader('Content-Type', 'application/pdf');
//res.setHeader('Content-Disposition', 'attachment; filename=quote.pdf');
//file.pipe(res);
    
    
    res.download('./reports/file.pdf');
    
    });
//    res.sendfile('./reports/file.pdf');
//    stream.on('finish', function() {
//      iframe.src = stream.toBlobURL('application/pdf');
//    });
    
//  Jose Antonio
//    var r = jasper.export({ report: 'HOLA', data: {}, dataset: [] }, 'pdf', 'es');
//    res.setHeader('Content-Disposition', 'attachment; filename=HOLA');
//    res.setHeader('Content-Type', 'application/pdf');
//    res.setHeader('Content-Length', r.length);
//    res.end(r);
    
//  agmoyano
//    console.log('requesting HOLA report');
//    var informe = {report: 'HOLA', data: {}, dataset: [{"id": 1},{"id": 2},{"id":3}]};
//    console.log('set HOLA report');
//    var pdf = jasper.export(informe, 'pdf');
//    res.setHeader('Content-Disposition', 'attachment; filename=HOLA');
//    res.setHeader('Content-Type', 'application/pdf');
//    res.setHeader('Content-Length', pdf.length);
//    res.end(pdf);
//    res.send(pdf);
});

module.exports = router;