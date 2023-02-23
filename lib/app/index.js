const morgan = require('morgan');
const expressSession = require('express-session');
const sessionFileStore = require('session-file-store');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const express = require('express');

const config = require('../config');
const logger= require('../logger');
const todo = require('./todo/router');

const app = express();
const FileStore = sessionFileStore(expressSession);

//set up templating
// Use handlebars for templates with the '.hbs' file extension
const handlebarsEngine = expressHandlebars.engine(
    {   defaultLayout: null, 
        extname: '.hbs' 
    }
); 
app.engine('hbs', handlebarsEngine);
app.set('view engine', handlebarsEngine);
app.set('views', config.viewsDir);

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
app.use('/todo/', todo);

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
