import mongoose from "mongoose"

const connectToDatabase = async () => {
    try {
        const connection = await mongoose.connect("mongodb+srv://davidev:GYxQJo77Aw91DFP8@blossom-app.419gg9l.mongodb.net/")

        if(connection) console.log("Connection established")

    } catch (error) {
        console.log("error in connectToDatabase ",error)
        throw error
    }
}

export default connectToDatabase