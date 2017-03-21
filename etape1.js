var http = require("http");
var fs = require("fs");//importation du module gestion de fichier
var fichierProvince = "";

fs.readFile('public/text/collection_provinces.json', 'utf8', function (err, data) {
      if (err) throw err; // we'll not consider error handling for now 
      //var obj = JSON.stringify(data);

    function affiche_objet(monObjet){

      fichierProvince = data;
      return fichierProvince;
    }

    affiche_objet(fichierProvince);

  });

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(fichierProvince);
  response.end();
}).listen(8081);


console.log("Programme lu");