const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;
const request = require('request');
const NodeCache = require('node-cache');
const cache =  new NodeCache();

app.use(cors());
app.get('/', function (req, res) { return res.send('Welcome to Tutorialspoint!')});

app.get('/collection', function (req, res) {
    if(cache.get("collectionResponse") == undefined) {
        request({
            method: 'GET',
            uri: 'https://www.rijksmuseum.nl/api/en/collection?key=kXkaXPj1&ps=20'
        }, function (error, response) {
            if(error) {
                return res.send(error);
            }
            if(response.statusCode === 200) {
                cache.set("collectionResponse", JSON.parse(JSON.stringify(response.body)));
                return res.send(JSON.parse(JSON.stringify(response.body)));
            }
        })
    } else {
        return res.send(cache.get("collectionResponse"));
    }
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
