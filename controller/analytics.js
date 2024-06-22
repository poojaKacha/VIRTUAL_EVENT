var EVENT = require('../model/event')

exports.getID = async function(req, res, next) {
    try {
        let analytics = await EVENT.findById(req.params.id)
        res.status(201).json({
          status: "success..!!",
            message: "analytics  successfully",
            analytics
   }) 
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message:error.message
     }) 
    }
}