//import mongoose from "mongoose"
const mongoose = require("mongoose")

let isConnected = false;

/*0export*/ const connectToDB = async () => {
    if (isConnected) return


    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "Author-It",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true;
        console.log('MongoDB connected 😀')

    } catch (error) {
        console.log(error)
    }
}

module.exports = { connectToDB }