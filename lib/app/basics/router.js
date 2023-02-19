const express = require('express');
const router = express.Router();
var path = require('path');

const bodyParser = require('body-parser');

//parse POST url encoded forms
router.use(bodyParser.urlencoded({extended: false}));

router.get('/birthday', (req, res) =>{
    let name, age;
    if (req.query.name && req.query.age) {
        req.session.name = req.query.name;
        req.session.age = req.query.age;
    }
    if (req.session.name && req.session.age) {
        name = req.session.name;
        age = req.session.age;
    }
    else{
        name =  "somebody";
        age = "some";
    }
    res.type('text/html');
    res.send(`<!DOCTYPE html>
    <html>
    <h1>Happy Birthday, ${name}!</h1>
    <p>How does it feel being ${age} years old?</p>
    </html>`);
});

router.get('/madlib', (req, res) => {
    //res.redirect('/form.html');

    res.sendFile(path.join(__dirname, '/../../static/form.html'));
    //res.redirect(path.join(__dirname, '/../../static/form.html'));
    
    //next();
});

// router.post('/form.html', (req, res) => {
//     //res.sendFile(path.join(__dirname, '/../../static/form.html'));
//     res.send('new');
// });

router.post('/madlib', (req, res) => {
    let time = req.body.time ? req.body.time : 'time';
    let furniture = req.body.furniture ? req.body.furniture : 'furniture';
    let condition = req.body.condition ? req.body.condition : 'condition';
    let thing = req.body.thing ? req.body.thing : 'thing';
    let good = req.body.good ? req.body.good : 'good';
    let bad = req.body.bad ? req.body.bad : 'bad';
    let event = req.body.event ? req.body.event : 'event';
    let activity = req.body.activity ? req.body.activity : 'activity';

    res.type('text/html');
    res.send(`<!DOCTYPE html>
    <html>
    <h1>My Blues Song</h1>
    <p>Woke up this ${time} and crawled out of my ${furniture}.</p>
    <p>Well, my ${thing} was gone, and I was left here with ${condition}.</p>
    <p>I ain't had no ${good} since ${event}.</p>
    <p>No, I've only had ${bad} ever since ${event}.</p>
    <p>Think I'll go ${activity} before my ${condition} gets too much.</p>
    </html>`);
});


router.use(bodyParser.json());

module.exports = { router };