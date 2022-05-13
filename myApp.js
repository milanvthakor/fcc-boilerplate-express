require('dotenv').config();
let express = require('express');
let app = express();

console.log('Hello World');

/* app.get('/', (req, res) => {
    res.send('Hello Express');
}); */
// allows the client to access the files from the public folder via URL
app.use('/public', express.static(__dirname + '/public'));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

// serving a json data
app.get('/json', (req, res) => {
    let message = 'Hello json';
    res.json({
        'message': process.env.MESSAGE_STYLE === 'uppercase' ? message.toUpperCase() : message
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});




























module.exports = app;
