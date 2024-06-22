var express = require('express');
var router = express.Router();
var SESSION = require('../model/session')
var sessionC =  require('../controller/session')

/* GET home page. */
router.post('/session',sessionC.addDATA)
router.get('/',sessionC.findDATA)
router.patch('/:id',sessionC.updateDATA)
router.delete('/:id',sessionC.deleteDATA)
  

module.exports = router;
