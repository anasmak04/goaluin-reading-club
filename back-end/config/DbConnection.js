const mongoose = require("mongoose")
const connectDb  = async () => {
        try{
            const connect = await mongoose.connect(process.env.MONGO_DRIVER);
            console.log("database connected")

        }catch(err){
            console.log(er)
        }
}

module.exports = connectDb