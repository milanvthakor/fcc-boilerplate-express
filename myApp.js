require('dotenv').config();
const bodyParser = require('body-parser');
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

app.use(bodyParser.urlencoded({ extended: false }));

// serving a json data
app.get('/json', (req, res) => {
    let message = 'Hello json';
    res.json({
        'message': process.env.MESSAGE_STYLE === 'uppercase' ? message.toUpperCase() : message
    });
});

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({ time: req.time });
});

app.get('/:word/echo', (req, res) => {
    res.json({ echo: req.params.word });
});

app.route('/name')
    .get((req, res) => {
        res.json({ name: `${req.query.first} ${req.query.last}` });
    })
    .post((req, res) => {
        res.json({ name: `${req.body.first} ${req.body.last}` });
    });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});




























module.exports = app;
