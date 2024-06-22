var USER = require('../model/users')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
exports.sequre = async function(req, res, next) {
  try {
    let token = req.headers.authorization
    if (!token) {
      throw new Error('token invaild')
    }
    let decoded = jwt.verify(token, 'USER')
    let usercheck = await USER.findById(decoded.id)
    if (!usercheck) {
      throw new Error('user not found')
    }
    next()
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message:error.message
    })
  }
};
exports.organzier_Register = async function(req, res, next) {
    try {
      req.body.password = await bcrypt.hash(req.body.password,10)
      let organizer_R = await USER.create(req.body)
      var token = jwt.sign({ id: organizer_R._id }, 'USER');

      res.status(201).json({
        status: "success..!!",
        message: "Register successfully",
        organizer_R,
        token
      })
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message:error.message
      })
    }
};
exports.organzier_LogIn = async function(req, res, next) {
    try {
     
      let organizer_L = await USER.findOne({ email: req.body.email })
      if (!organizer_L) {
        throw new Error('user not found')
      }
      let passverify = await bcrypt.compare(req.body.password, organizer_L.password)
      if (!passverify) {
        throw new Error('password invaild')
      }
      var token = jwt.sign({ id: organizer_L._id }, 'USER');

      res.status(201).json({
        status: "success..!!",
        message: "LogIn successfully",
        organizer_L,
        token
      })
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message:error.message
      })
    }
};
exports.participer_Register=async function(req, res, next) {
    try {
      req.body.password = await bcrypt.hash(req.body.password,10)
      let participer_R = await USER.create(req.body)
      var token = jwt.sign({ id: participer_R._id }, 'USER');

      res.status(201).json({
        status: "success..!!",
        message: "Register successfully",
        participer_R,
        token
      })
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message:error.message
      })
    }
};
  exports.participer_LogIn = async function(req, res, next) {
    try {
     
      let participer_L = await USER.findOne({ email: req.body.email })
      if (!participer_L) {
        throw new Error('user not found')
      }
      let passverify = await bcrypt.compare(req.body.password, participer_L.password)
      if (!passverify) {
        throw new Error('password invaild')
      }
      var token = jwt.sign({ id: participer_L._id }, 'USER');

      res.status(201).json({
        status: "success..!!",
        message: "LogIn successfully",
        participer_L,
        token
      })
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message:error.message
      })
    }
};  
exports.update = async function (req, res, next) {
  try {
    // req.body.status  = pending
     
    let update = await USER.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(201).json({
      status: "success..!!",
      message: "update successfully",
      update
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
};