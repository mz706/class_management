const express = require("express");
const router = express.Router();
const {
    newBatch,batchListWithFilter,upcomingBatches,batchDetails ,updateBatchInfo,deleteBatch
} = require("../controller/batch.controller");

router.post("/new-batch" , newBatch)
router.get("/batch-list" , batchListWithFilter)
// router.get("/upcoming-batch", upcomingBatches)
router.get("/batch-detail/:batch_id" , batchDetails)
router.put("/update-batch-detail/:batch_id" , updateBatchInfo)
router.post("/delete-batch" , deleteBatch)
module.exports = router;