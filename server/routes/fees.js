const express = require("express");
const router = express.Router();
const {
    submitFees,
    allFeesHistoryByFilter,
    feesHistoryByStudent,
    updateExistingFeeEntry,
    deleteWrongFeesEntry

} = require("../controller/fees.controller");

router.post("/add-fees" , submitFees)
router.post("/fees-history",allFeesHistoryByFilter )
router.get("/student-fees-details/:student_id", feesHistoryByStudent)
router.put("/update-fees-detail/:fees_id",updateExistingFeeEntry)
router.post("/delete-fees-wrong-entry",deleteWrongFeesEntry)
module.exports = router;