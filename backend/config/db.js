import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:123@cluster0.hpbyoon.mongodb.net/food-del-fullstack').then(()=>console.log("DB Connected"));
}