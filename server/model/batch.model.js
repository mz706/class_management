const {  Schema , model } = require("mongoose")

const batchStatus = {RUNNING : 'RUNNING', UPCOMING : 'UPCOMING', NOTDEFINED :'NOTDEFINED'}

const batchSchema = new Schema({
     title : { type : String },
     description : { type : String },
     startFrom : { type : Date },
     status: {
        type: String,
        enum: batchStatus,
        default : batchStatus.NOTDEFINED
      }
})
const batchModel = model( "batches" , batchSchema );
module.exports = batchModel;