const express = require('express');

const handlers = require('./handlers');

let router = express.Router();

router.get('/', handlers.renderList);

router.get('/list', handlers.getList);

router.post('/list', handlers.getList);

router.post('/add', handlers.addList);

router.post('/save', handlers.saveList);

router.post('/remove', handlers.removeList);

module.exports = router;
