var TICKET = require('../model/ticket&registration')

exports.addDATA = async function(req, res, next) {
    try {
      let create = await TICKET.create(req.body)
      res.status(404).json({
        status: "success..!!",
        message: "create successsful",
        create
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
      let find = await TICKET.find().populate('eventID')
      res.status(404).json({
        status: "success..!!",
        message: "find successsful",
        find
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
      let update = await TICKET.findByIdAndUpdate(req.params.id,req.body,{new:true})
      res.status(404).json({
        status: "success..!!",
        message: "update successsful",
        update
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
      let deleteDATA = await TICKET.findByIdAndDelete(req.params.id)
      res.status(404).json({
        status: "success..!!",
        message: "delete successsful",
        deleteDATA
      })
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message:error.message
      })
    }
  };