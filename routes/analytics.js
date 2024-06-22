var express = require('express');
var router = express.Router();
var EVENT = require('../model/event')
var ANALYTICS = require('../controller/analytics')

/* GET home page. */
router.get('/:id',ANALYTICS.getID);

module.exports = router;
