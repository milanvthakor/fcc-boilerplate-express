let express = require('express');
let app = express();

console.log('Hello World');

/* app.get('/', (req, res) => {
    res.send('Hello Express');
}); */
// allows the client to access the files from the public folder via URL
app.use('/public', express.static(__dirname + '/public'));

// serving a json data
app.get('/json', (req, res) => {
    res.json({
        'message': 'Hello json'
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});




























module.exports = app;
