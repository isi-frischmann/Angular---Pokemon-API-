const path = require('path');

// server
const port = 8000;

// express
var express = require('express');
const app = express();

// connection to the Angular files
app.use(express.static(__dirname + '/angularPoke/dist/angularPoke'));


const server = app.listen(port);