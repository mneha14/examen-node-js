var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');

app.set('view engine', 'ejs'); // générateur de template 
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))  // pour utiliser le dossier public

//etape 01
app.get('/fichier', function (req, res) {
   fs.readFile( __dirname + "/public/text/" + "collection_provinces.json", 'utf8', function (err, data) {
       console.log( data );
       res.send(data);
   });
})

//etape 02
app.get('/', function (req, res) {
   fs.readFile( __dirname + "/public/text/" + "collection_provinces.json", 'utf8', function (err, data) {
    provinces = JSON.parse(data);
    console.log(provinces);

      /*provinces = data ;
      var code = provinces["code" + req.body.code];
      var nom = provinces["nom" + req.body.nom];
      var capital = provinces["capital" + req.body.capital];*/

   });
   res.render('index.ejs');
   });


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Exemple l'application écoute sur http://%s:%s", host, port)

})