const express = require("express");
const router = express.Router();
const {
    newInquiry,
    inquiryListFilter,
    inquiryDetail,
    deleteInquiry,
    updateInquiry
} = require("../controller/inquiry.controller");

router.post("/new-inquiry" , newInquiry)
router.post("/inquery-list-filter",inquiryListFilter)
router.get("/inquiry-detail/:inquiry_id",inquiryDetail)
router.put("/update-inquiry/:inquiry_id" ,updateInquiry)
router.post("/delete-inquiry" , deleteInquiry)
module.exports = router;
//handle by
//acitve status
//