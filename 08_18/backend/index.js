const express = require('express');
const app = express();
const fs = require('fs');

app.get('/get-AllCustomers', function(req, res) => {
   fs.readFile('AllCustomers.json', 'utf8', (err, data) => {
    res.send(JSON.stringify({'status':200, 'error': null, 'response': JSON.parse(data) }))})})

app.listen(5000, () => {
    console.log('server is running on port 5000')
})

app.post('/')