const asyncHandler = require("express-async-handler");
const Post = require("../models/PostModel");


const CreatePost = asyncHandler(async (req, res) => {
    const { title, decription } = req.body;
    if (!title || !decription) {
        res.status(400)
        throw new Eroor("please add all fields");
    }

    const createpost = await Post.create({ title, description });

    res.status(200).json(createpost);
})

const DeletePost = asyncHandler(async (req, res) => {

    const { title, decription } = req.body;
    if (!title || !decription) {
        res.status(400)
        throw new Eroor("please add all fields");
    }

    const deletepost = await Post.findByIdAndRemove(req.params.id);
    if (!deletepost) {
        res.status(400)
        throw new Eroor("id doesnt exist");
    }

    res.status(201).json(deletepost);


})


module.exports = { CreatePost, DeletePost };