import mongoose from 'mongoose';
import 'dotenv/config'

export default async function  connectDB () {
try {
    const res =await mongoose.connect(`${process.env.MONGO_URI}/hotel-booking`)
    console.log(`MongoDB connected to ${res.connection.host}`);
} catch (error) {
    console.error(error);
}
}