const express = require('express');

const handlers = require('./handlers');

let router = express.Router();

router.get('/', handlers.renderList);

router.get('/list', handlers.getList);

router.post('/list', handlers.getList);

module.exports = router;
