const mongoose = require("mongoose")
const userSchema = mongoose.Schema({

    username: {
        type: String,
        required: [true, "please add your username"]
    },

    email: {
        type: String,
        required: [true, "please add your email"],
        Unique: [true, "email has already been already declared"]
    },

    password: {
        type: String,
        required: [true, "please add your password"]
    }
}, {
    timestamps: true
})


module.exports = mongoose.model("User", userSchema)