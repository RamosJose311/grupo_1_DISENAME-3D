const express = require('express');
const app = express();
const path = require('path');
const serv = 3030;

app.use(express.static('public'));


app.get('/', (req, res) => res.sendFile(path.resolve(__dirname ,'view','home.html')));
app.get('/productCart.html', (req, res) => res.sendFile(path.resolve(__dirname ,'view','productCart.html' )));



app.listen(serv, () => console.log('Server runing in http://localhost:' + serv));