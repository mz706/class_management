const express = require("express");
const router = express.Router();
const {
    newStudent,
    studentList,
    updateStudentStatus,
    updateStudentInfo,
    studentDetails
} = require("../controller/student.controller");

router.post("/new-student" , newStudent )
router.post("/student-list-filter", studentList )
router.get("/student-detail/:student_id" , studentDetails)
router.put("/update-student-detail/:student_id" , updateStudentInfo)
router.post("/student-status/:student_id" , updateStudentStatus)
module.exports = router;