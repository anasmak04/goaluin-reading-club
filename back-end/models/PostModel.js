const mongoose = require("mongoose");
const postSchema = new mongoose.Schema ( {
    title : {
        type : String,
        required : [true , "please add your title"],
    },

    description : {
        type : String,
        required : [true, "please add your description"],
    },
})

module.exports = mongoose.model('Post', postSchema);