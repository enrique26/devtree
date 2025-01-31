import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const url = process.env.MONGO_URI
        const {connection} = await mongoose.connect(url)
        const info = `${connection.host}: ${connection.port}`
        console.log('infobd conectado a:', info);
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}