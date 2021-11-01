const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;
const request = require('request');

app.use(cors());
app.get('/', function (req, res) { return res.send('Welcome to Tutorialspoint!')});

app.get('/collection', function (req, res) { 
    request({
        method: 'GET',
        uri: 'https://www.rijksmuseum.nl/api/en/collection?key=kXkaXPj1&ps=20'
    }, function (error, response) {
        if(error) {
            return res.send(error);
        }
        if(response.statusCode === 200) {
            return res.send(JSON.parse(JSON.stringify(response.body)));
        }
    })
});

app.get('/collection/:objNumber', function (req, res) { 
    const objNumber = req.params.objNumber;
    request({
        method: 'GET',
        uri: 'https://www.rijksmuseum.nl/api/en/collection/'+objNumber+'?key=kXkaXPj1'
    }, function (error, response) {
        if(error) {
            return res.send(error);
        }
        if(response.statusCode === 200) {
            return res.send(JSON.parse(JSON.stringify(response.body)));
        }
    })
});

// startup our app at http://localhost:3000
app.listen(port, function() { return console.log(`Example app listening on port ${port}!`)});
