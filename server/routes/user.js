const express = require("express");
const router = express.Router();
const {
    newUser,userList,userDetail,updateUserDetails,deleteUser
} = require("../controller/user.controller");

router.post("/new-user" ,newUser )
router.get("/user-list",userList)
router.get("/user-detail/:user_id",userDetail)
router.put("/update-user-detail/:user_id", updateUserDetails )
router.post("/delete-user", deleteUser )
module.exports = router;