const express = require("express");
const router = express.Router();
const  {CreatePost,DeletePost} = require("../controller/PostControlller");


router.post("/post", CreatePost);
router.delete("/post" , DeletePost);


module.exports = router;