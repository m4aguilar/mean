const express = require('express');
const bodyParser = require('body-parser');//Para parsear middlewares(intercambio de información entre aplicaciones)
const path = require('path'); //Para trabajar con directorios
const http = require('http');
const app = express();

//API file for interacting with MongoDB
const api = require('./server/routes/api');

//Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

//API location
app.use('/api', api);

//Send all other request to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));