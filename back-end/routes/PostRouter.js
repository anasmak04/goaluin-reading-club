const express = require("express");
const router = express.Router();
const  {createpost,deletepost} = require("../controller/PostControlller");


router.post("/post", createpost);
router.delete("/post" , deletepost);


module.exports = router;