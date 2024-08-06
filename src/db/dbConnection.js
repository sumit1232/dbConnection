import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        dbName: "FirstDatabase",
    }).then(() => {
        console.log(`Database Connected`);
    }).catch((error) => {
        console.log(`Databse Connection Error`, error);
    });
};