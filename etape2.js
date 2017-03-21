var express = require('express');
var app = express();
var fs = require("fs");

app.set('view engine', 'ejs'); // générateur de template 
//app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))  // pour utiliser le dossier public

app.get('/', function (req, res) {
       //console.log( data );
       res.render('index.ejs');
})

app.get('/fichier', function (req, res) {
   fs.readFile( __dirname + "/public/text/" + "collection_provinces.json", 'utf8', function (err, data) {
       console.log( data );
       res.send(data);
   });
})


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Exemple l'application écoute sur http://%s:%s", host, port)

})