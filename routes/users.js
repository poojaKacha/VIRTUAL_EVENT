var express = require('express');
var router = express.Router();
var userC = require('../controller/users')


/* GET users listing. */
router.post('/organzier_Register',userC.organzier_Register)
router.post('/organzier_LogIn',userC.organzier_LogIn)

router.post('/participer_Register',userC.participer_Register)
router.post('/participer_LogIn',userC.participer_LogIn)

router.patch('/:id',userC.sequre,userC.update)

module.exports = router;
