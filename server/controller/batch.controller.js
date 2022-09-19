const batchModel = require("../model/batch.model")
const newBatch = (req, res) => {
    try {
        // res.status().json()
        const { title, description, startFrom, status } = req.body
        let obj = {
            title,
            description,
            startFrom,
            status
        }
        let newBatch = new batchModel(obj)
        newBatch.save((err, data) => {
            if (err) {
                return res.status(400).json({
                    message: "SOMETHING WENT WRONG",
                    error: error
                })
            }
            return res.status(201).json({
                message: "BATCH ADDED",
                data: data
            })
        })

    } catch (error) {
        console.log("error ", error)
        return res.status(500).json({
            msg: "INTERNAL SERVER ERROR",
            error: error
        })

    }
}

const batchListWithFilter = (req, res) => {
    try {
        //start in beetween , active , upcoming , not defined , completed , 
        //batch tables with the filter , pagination , search , cource type filter
        batchModel.find((err, data) => {
            if (err) {
                return res.status(400).json({
                    message: "SOMETHING WENT WRONG",
                    error: error
                })
            }
            return res.status(201).json({
                message: "BATCH ADDED",
                data: data
            })
        })

    } catch (error) {
        console.log("error ", error)
        return res.status(500).json({
            msg: "INTERNAL SERVER ERROR",
            error: error
        })

    }
}
const batchDetails = (req, res) => {
    try {
        let batchId = req.params.batch_id
        //start in beetween , active , upcoming , not defined , completed , 
        //batch tables with the filter , pagination , search , cource type filter
        batchModel.findById(batchId, (err, data) => {
            if (err) {
                return res.status(400).json({
                    message: "SOMETHING WENT WRONG",
                    error: error
                })
            }
            return res.status(201).json({
                message: "BATCH DETAILS",
                data: data
            })
        })

    } catch (error) {
        console.log("error ", error)
        return res.status(500).json({
            msg: "INTERNAL SERVER ERROR",
            error: error
        })

    }
}
const upcomingBatches = (req, res) => {
    try {
        // res.status().json()
        const { title, description, startFrom, status } = req.body
        let obj = {
            title,
            description,
            startFrom
        }
        let newBatch = new batchModel(obj)
        newBatch.save((err, data) => {
            if (err) {
                return res.status(400).json({
                    message: "SOMETHING WENT WRONG",
                    error: error
                })
            }
            return res.status(201).json({
                message: "BATCH ADDED",
                data: data
            })
        })

    } catch (error) {
        console.log("error ", error)
        return res.status(500).json({
            msg: "INTERNAL SERVER ERROR",
            error: error
        })

    }
}
const updateBatchInfo = (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send({
                message: "Data to update can not be empty!"
            });
        }

        const id = req.params.id;
        console.log("batch id", id)

        Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
            .then(data => {
                if (!data) {
                    res.status(404).send({
                        message: `Cannot update batch with id=${id}. Maybe batch was not found!`
                    });
                } else res.status(204).send({ message: "BATCH UPDATED SUCCESSFULLY" , data : data});
            })
            .catch(err => {
                console.log("error " , err)
                res.status(500).send({
                    message: "Error updating batch with id=" + id
                });
            });
    } catch (error) {
        console.log("error ", error)
        return res.status(500).json({
            msg: "INTERNAL SERVER ERROR",
            error: error
        })

    }
}
const deleteBatch = (req, res) => {
    try {
        // res.status().json()
        const { batchId } = req.body
        batchModel.deleteMany( { _id : batchId }  , (err, data) => {
            if (err) {
                console.log("error in delete many" , err)
                return res.status(400).json({
                    message: "SOMETHING WENT WRONG",
                    error: err
                })
            }
            return res.status(201).json({
                message: "BATCHES DELETED",
                data: data
            })
        })

    } catch (error) {
        console.log("error ", error)
        return res.status(500).json({
            msg: "INTERNAL SERVER ERROR",
            error: error
        })

    }
}

module.exports = {
    newBatch, batchListWithFilter, upcomingBatches, batchDetails, updateBatchInfo, deleteBatch
}