console.log('Hello');
const http = require('http');
const processenv = require('processenv');
const port = processenv('PORT') || 3001; //falls die Umgebungsvariable nicht gesetzt sein sollte, 3000 auswaehlen
const server = http.createServer((request, response) => { //createServer aufrufen
    response.write('Hallo aus Nopde.js');
    response.end(); //Verbindung zumachen
});  
server.listen(port, () =>{ //Server auf Port 3000 starten
    console.log(`Server started on port ${port}.`); //Meldung ausgeben
});  

//