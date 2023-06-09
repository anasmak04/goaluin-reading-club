const express = require("express");
const connectDb = require("./config/DbConnection");
const dotenv = require("dotenv").config();
const ErrorHandler = require("./middleware/ErrorHandler");
const app = express();
connectDb();
app.use(express.json());

app.use("/api/user", require("./routes/UserRouter"));

app.use(ErrorHandler);


const port = process.env.PORT

app.listen(port, () => {
    console.log(`port running in ${port}`)
})