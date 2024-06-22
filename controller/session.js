var SESSION = require('../model/session')

exports.addDATA = async function(req, res, next) {
    try {
        let create = await SESSION.create(req.body)
        res.status(404).json({
          status: "success..!!",
            message: "create successfully",
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
        let find = await SESSION.find().populate('eventID')
        res.status(404).json({
          status: "success..!!",
            message: "find successfully",
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
        let update = await SESSION.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(404).json({
          status: "success..!!",
            message: "update successfully",
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
        let deleteDATA = await SESSION.findByIdAndDelete(req.params.id)
        res.status(404).json({
          status: "success..!!",
            message: "delete successfully",
          deleteDATA
        })
        
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message:error.message
      })
    }
};