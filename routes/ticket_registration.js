var express = require('express');
var router = express.Router();
var TICKET = require('../model/ticket&registration')
var ticketC = require('../controller/ticket&registration')

/* GET home page. */
router.post('/ticket',ticketC.addDATA)
router.get('/',ticketC.findDATA)
router.patch('/:id',ticketC.updateDATA)
router.delete('/:id',ticketC.deleteDATA)

module.exports = router;
