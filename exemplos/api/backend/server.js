const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const banco = require('banco');



let app = express();

app.use(bodyParser.json());
app.get('/tarefas', (req, res) => {

});


http.createServer(app).listen(8001, () => {
  console.log('Acesse o servidor: http://127.0.0.1:8001/');
});
