var express = require('express');
var router = express.Router();
var EVENT = require('../model/event')
var eventC = require('../controller/event')

/* GET home page. */
router.post('/eventCREATE',eventC.addDATA)
router.get('/',eventC.findDATA)
router.patch('/:id',eventC.updateDATA)
router.delete('/:id',eventC.deleteDATA)

module.exports = router;
