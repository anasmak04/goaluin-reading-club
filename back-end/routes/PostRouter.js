const express = require("express");
const router = express.Router();
const  {CreatePost,DeletePost,GetPost} = require("../controller/PostControlller");


router.post("/post", CreatePost);
router.delete("/post" , DeletePost);
router.get("/post", GetPost);


module.exports = router;