const morgan = require('morgan');
const expressSession = require('express-session');
const sessionFileStore = require('session-file-store');
const bodyParser = require('body-parser');
const express = require('express');
const config = require('../config');
const logger= require('../logger');
const FileStore = sessionFileStore(expressSession);

const app = express();
const basics = require('./basics');

//loging
app.use(morgan('dev', {stream: logger.httpStream}));

//parse POST url encoded forms
app.use(bodyParser.urlencoded({extended: false}));

//session
app.use(expressSession({
    secret: config.sessionSecret,
    saveUninitialized: false,
    resave: false,
    store: new FileStore(),
}));


//features
app.use('/basics', basics.router);

//second to-last:try to find
app.use(express.static(config.staticDir));

//last thing: not found
app.get((req, res) => {
    res.status(404);
    res.type('text/html');
    res.send('Not found');
});

app.use(bodyParser.json());

module.exports = app;
