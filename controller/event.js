var EVENT = require('../model/event')

exports.addDATA = async function(req, res, next) {
    try {
      let addDATA = await EVENT.create(req.body)
      res.status(201).json({
        status: "success..!!",
        message: "create successfullly",
        addDATA
      })
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message:error.message
      })
    }
};
  exports.findDATA = async function(req, res, next) {
    try {
      let findDATA = await EVENT.find().populate('userID')
      res.status(201).json({
        status: "success..!!",
        message: "find successfullly",
      findDATA
      })
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message:error.message
      })
    }
};
  exports.updateDATA = async function(req, res, next) {
    try {
      let updateDATA = await EVENT.findByIdAndUpdate(req.params.id,req.body,{new:true})
      res.status(200).json({
        status: "success..!!",
        message: "update successfullly",
        updateDATA
      })
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message:error.message
      })
    }
};
  exports.deleteDATA = async function(req, res, next) {
    try {
      let deleteDATA = await EVENT.findByIdAndDelete(req.params.id)
      res.status(200).json({
        status: "success..!!",
        message: "delete successfullly",
        deleteDATA
      })
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message:error.message
      })
    }
  };